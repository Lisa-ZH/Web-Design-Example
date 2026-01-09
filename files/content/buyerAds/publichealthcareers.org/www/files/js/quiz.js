function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

async function getQuestions() {
    const response = await fetch(_quizQuestionEndpoint);
    //const response = await fetch('/static/sites/www/files/js/questions.json');
    //const response = await fetch('files/js/questions.json');
    const data = await response.json();
    return data['questions'];
}

// For debugging purposes, add as a bookmarklet to pick random answers: `javascript:randomAnswers()`
function randomAnswers() {
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let groups = {};
    document.querySelectorAll('.rating-radios input[type="radio"]').forEach(function(radio) {
        if (!groups[radio.name]) {
            groups[radio.name] = [];
        }
        groups[radio.name].push(radio);
    });

    for (let groupName in groups) {
        let radios = groups[groupName];
        let randomRadio = getRandomElement(radios);
        randomRadio.click();
    }
}

async function makeQuiz() {
    const   quizData = await getQuestions(),
            quizContainer = document.getElementById('quiz');
    let     quizContent,
            n = 1,
            pageNumber = 1;
    for (let index = 0; index < quizData.length; index++) {
        const questionData = quizData[index];
        let question = questionData['question'],
            trait = questionData['trait'],
            questionID = questionData['id'],
            showFirstPage = (pageNumber === 1) ? 'show' : '';
            if(n == 1) {
                quizContent = `<!-- ${pageNumber} --><ul id="quiz-page-${pageNumber}" data-page="${pageNumber}" class="form-questions quiz-page ${showFirstPage}">`;
            }
            quizContent += `<li>
            <fieldset>
                <legend>${question}</legend>
                <div class="rating-radios">
                    <label> 
                        <input required type="radio" id="${questionID}-vd" name="q-${questionID}" value="1">
                        <div class="sr-only">Very Disinterested</div>
                    </label>
                    <label>
                        <input type="radio" id="${questionID}-sd" name="q-${questionID}" value="2">
                        <div class="sr-only">Somewhat Disinterested</div>
                    </label>
                    <label>
                        <input type="radio" id="${questionID}-nind" name="q-${questionID}" value="3">
                        <div class="sr-only">Neither Interested Nor Disinterested</div>
                    </label>
                    <label>
                        <input type="radio" id="${questionID}-si" name="q-${questionID}" value="4">
                        <div class="sr-only">Somewhat Interested</div>
                    </label>
                    <label>
                        <input type="radio" id="${questionID}-vi" name="q-${questionID}" value="5">
                        <div class="sr-only">Very Interested</div>
                    </label>
                </div>
            </fieldset>
        </li>`;
        if(n % 10 == 0 && quizData.length != n) {
            pageNumber++;
            quizContent += `</ul><!-- ${pageNumber} --><ul id="quiz-page-${pageNumber}" data-page="${pageNumber}" class="form-questions quiz-page">`;
        }

        if(quizData.length === n) {
            quizContent += `</ul><!--this is the last page-->`;
        }
        n++;
    }

    quizContainer.insertAdjacentHTML('afterbegin', quizContent);
    /* Click events */
    let checkedRadio = [];
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radio, i){
        
        radio.addEventListener('change', function(){
            var fieldSet = radio.parentNode.parentNode.parentNode;
            if(fieldSet.classList.contains('error')) {
                fieldSet.classList.remove('error');
                fieldSet.children[2].remove();
            }
            let currentClicked = this,
                currentName = this.name;
                this.parentNode.classList.remove('disabled');
                checkedRadio.push(radio.name);
            radioButtons.forEach(function(otherRadio){
                if(currentClicked != otherRadio && otherRadio.name === currentName) {
                    otherRadio.parentNode.classList = 'disabled';
                }
            });
        });  
    });

    
    const quizPages = document.querySelectorAll('.quiz-page');
    const firstPageIndex = 1;
    const lastPageIndex = quizPages.length;
    let prevButton = document.getElementById('prev-page'),
        nextButton = document.getElementById('next-page')
        submitButton = document.getElementById('submit-quiz'),
        progressBar = document.getElementById('progress-bar'),
        progressBarBaseValue = progressBar.value,
        currentPageDiv = document.getElementById('current-page');
        currentPage = 1;
    
    function paged(event) {
        event.preventDefault();
        if(this === nextButton) {
            let collectFinishedQ = [];
            const numberOfQuestions = [10,20,30,40,60,70];
            pageComplete = false;
            radioButtons.forEach(function(radio, i){
                if(isVisible(radio) && radio.checked) {
                    collectFinishedQ.push(radio);
                }
            });
            if(numberOfQuestions.includes( collectFinishedQ.length )) {
                console.log('All questions answered.');
                nextButton.removeAttribute('disabled');
                currentPage++;
                if(currentPage === lastPageIndex) {
                    this.classList.add('hide');
                } else {
                    prevButton.classList.remove('hide');       
                }
            } else {
                radioButtons.forEach(function(radio,i){
                    if(!checkedRadio.includes(radio.name) && isVisible(radio)) {
                        fieldSet =  radio.parentNode.parentNode.parentNode;
                        if(!fieldSet.classList.contains('error')){
                            fieldSet.classList.add('error');
                            fieldSet.insertAdjacentHTML('beforeend', '<div class="error-message">Please select an interest level.</div>');
                        }
                    }
                  
                });
                alert('Please fill out every question.');
            }
        }
        if(this === prevButton) {
            currentPage--;
            if(currentPage === 1) {
                this.classList.add('hide');
            } else {
                nextButton.classList.remove('hide');
            }
        }
        if(currentPage === lastPageIndex) {
            submitButton.classList.remove('hide'); 
        } else {
            submitButton.classList.add('hide'); 
        }
        quizPages.forEach(function(quizPage){
           if(quizPage.id === 'quiz-page-'+currentPage) {
               quizPage.classList.add('show');
           } else {
               quizPage.classList.remove('show');
           }
        });
        progressBar.value = currentPage * progressBarBaseValue;
        currentPageDiv.firstChild.nodeValue = `Progress ${currentPage}/6`;
    }
    prevButton.addEventListener('click', paged);
    nextButton.addEventListener('click', paged);
}
makeQuiz();
