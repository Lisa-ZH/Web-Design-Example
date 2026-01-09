
/* 
 ================================================
 PVII Slide-Out Menu scripts
 Copyright (c) 2015-2016 Project Seven Development
 www.projectseven.com
 Version: 1.1.5 -build 17
 ================================================
 
*/

var p7SOM={
    ctl: [],
    once: false,
    prf: 'none',
    body: null,
    clk: false,
    defAnim: 1,
    defDuration: 600,
    animDelay: (1000/60)
};
var p7SOMadv=[];
function P7_SOMset(){
    var sh='';
    if(!document.getElementById){
        return;
    }
    sh+='.p7SOM {display:none;position:absolute;top:0;visibility:hidden;overflow:hidden;}\n';
    sh+='.p7SOM ul div {position:static; height:0px; overflow:hidden;}\n';
    sh+='.p7SOM.som-from-left {left:0;}\n';
    sh+='.p7SOM.som-from-left ul.level_1 {left:-100%;}\n';
    sh+='.p7SOM.som-from-right {right:0;}\n';
    sh+='.p7SOM.som-from-right ul.level_1 {left:100%;}\n';
    p7SOM.prf = P7_SOMgetCSSPre();
    P7_SOMaddSheet(sh);
}
P7_SOMset();
function P7_SOMop(){
    if(!document.getElementById){
        return;
    }
    p7SOM.ctl[p7SOM.ctl.length]=arguments;
}
function P7_SOMbb(){
}
function P7_SOMaddLoad(){
    if(!document.getElementById){
        return;
    }
    if(window.addEventListener){
        document.addEventListener("DOMContentLoaded",P7_SOMinit,false);
        window.addEventListener("load",P7_SOMinit,false);
        window.addEventListener("unload",P7_SOMbb,false);
    }
    else if(window.attachEvent){
        document.write("<script id=p7ie_som defer src=\"//:\"><\/script>");
        document.getElementById("p7ie_som").onreadystatechange=function(){
            if (this.readyState=="complete"){
                if(p7SOM.ctl.length>0){
                    P7_SOMinit();
                }
            }
        };
        window.attachEvent("onload",P7_SOMinit);
        window.attachEvent("onunload",P7_SOMbb);
    }
}
P7_SOMaddLoad();
function P7_SOMinit(){
    var i,j,jj,k,x,d,tB,tU,tD,tA,taA,tBR,cN,tS,pn,dv,el,pp,fs,ls,cl,lv;
    if(p7SOM.ctl.length<1){
        return;
    }
    if(p7SOM.once){
        return;
    }
    p7SOM.once=true;
    p7SOM.body = P7_SOMgetScrollBody();
    for(jj=0;jj<p7SOM.ctl.length;jj++){
        tB=document.getElementById(p7SOM.ctl[jj][0]);
        if(tB){
            tB.p7opt=p7SOM.ctl[jj];
            if(tB.parentNode.nodeName!='BODY'){
                document.getElementsByTagName('BODY')[0].appendChild(tB);
            }
            tU=tB.getElementsByTagName('UL');
            if(tU&&tU.length>1){
                for(i=tU.length-1;i>0;i--){
                    pn=tU[i].parentNode;
                    dv=document.createElement('div');
                    dv.somd=true;
                    dv.appendChild(tU[i]);
                    pn.appendChild(dv);
                }
            }
            P7_SOMremClass(tB,'p7SOMnoscript');
            tB.somTBR = document.getElementById(tB.id.replace('_','tb_'));
            if(tB.somTBR){
                if(tB.somTBR.parentNode.nodeName!='BODY'){
                    document.getElementsByTagName('BODY')[0].appendChild(tB.somTBR);
                }
                P7_SOMremClass(tB.somTBR,'p7SOMnoscript');
            }
            cl='som-from-left';
            if(tB.p7opt[2]==2){
                cl='som-from-right';
            }
            P7_SOMsetClass(tB,cl);
            P7_SOMsetClass(tB.somTBR,cl);
            tB.somDefLink=false;
            tB.somShut=true;
            if(!p7SOM.clk){
                p7SOM.clk=true;
                if(window.addEventListener){
                    document.addEventListener("click",P7_SOMbody,false);
                }
                else if(window.attachEvent){
                    window.attachEvent("click",P7_SOMbody,false);
                }
            }
            tB.style.zIndex=tB.p7opt[1];
            tB.somTBR.style.zIndex=tB.p7opt[1]-1;
            tU=tB.getElementsByTagName('UL');
            tD=tU[0].getElementsByTagName('DIV');
            tU[0].somMenuOb=tB;
            for(i=0;i<tD.length;i++){
                if(tD[i].somd){
                    tD[i].setAttribute("id",tB.id+'d'+(i+2));
                    tD[i].somState='closed';
                    tD[i].somMenu=tB.id;
                    tU[i].somMenuOb=tB;
                }
            }
            tB.somUL=tU[0];
            tB.somTBR.somMenu=tB.id;
            tB.somTBR.somUL=tB.somUL;
            tB.somTBR.somState='closed';
            P7_SOMchangeClass(tB.somTBR,'opened','closed');
            tB.somUL.somState='closed';
            P7_SOMchangeClass(tB.somUL,'opened','closed');
            tB.somState='closed';
            P7_SOMchangeClass(tB,'opened','closed');
tB.somTBR.onclick = function(){
    return P7_SOMtoolbar(this.somMenu);
};
tA=tB.somTBR.getElementsByTagName('A');
if(tA && tA[0]){
    tA[0].onclick=function(){
        return false;
    };
}
el=document.getElementById(tB.id.replace('_','hd_'));
if(el){
    el.parentNode.somHeader=true;
    el.somDiv=tB.id;
el.onclick = function(){
    P7_SOMtoolbar(this.somDiv,'close');
    return false;
};
}
d=1;
for(i=0;i<tU.length;i++){
tU[i].setAttribute("id",tB.id+'u'+(i+1));
tU[i].somMenu=tB.id;
tU[i].setAttribute('aria-hidden','true');
lv=1;
pp=tU[i].parentNode;
while(pp){
    if(pp.id&&pp.id==tB.id){
        break;
    }
    if(pp.tagName&&pp.tagName=="UL"){
        lv++;
    }
    pp=pp.parentNode;
}
tU[i].somLevel=lv;
P7_SOMsetClass(tU[i],'level_'+lv);
var tH,wH=window.location.href;
wH=wH.replace(window.location.hash,'');
cN=tU[i].childNodes;
fs=-1;
ls=0;
if(cN){
    for(j=0;j<cN.length;j++){
        if(cN[j].tagName&&cN[j].tagName=='LI'){
            if(cN[j].somHeader){
                continue;
            }
            ls++;
            taA=cN[j].getElementsByTagName('A');
            if(taA && taA[0]){
                tA=taA[0];
            }
            else{
                continue;
            }
            if(fs<0){
                P7_SOMsetClass(tA,'somfirst');
                P7_SOMsetClass(cN[j],'somfirst');
            }
            fs=j;
            tA.setAttribute("id",tB.id+'a'+(d));
            d++;
            cN[j].somTrigger=tA;
            tA.somState='closed';
            tA.somLevel=lv;
            tA.somParentDiv=tU[i].parentNode.id;
            tA.somMenu=tB.id;
            tA.somSub=false;
            if(i===0){
                P7_SOMsetClass(cN[j],('root_'+ls));
            }
            if(/som-ste/.test(tA.getAttribute('class'))){
                tH=tA.href;
                tH=tH.replace(tA.hash,'');
                if(tH==wH){
                    tA.somSTE=true;
                }
            }
            tA.onclick=function(evt){
                return P7_SOMclick(this);
            };
            tS=cN[j].getElementsByTagName('UL');
            if(tS&&tS.length>0){
                tA.somSub=tS[0].parentNode.id;
                tS[0].parentNode.somTrigger=tA;
                if(i===0){
                    P7_SOMsetClass(tA,('root_trig'));
                    P7_SOMsetClass(tA.parentNode,('root_trig'));
                }
                P7_SOMsetClass(tA,'trig_closed');
                P7_SOMsetClass(tA.parentNode,'trig_closed');
            }
            else{
                P7_SOMsetClass(tA,'som-link');
                P7_SOMsetClass(tA.parentNode,'som-link');
                if(i===0){
                    P7_SOMsetClass(tA,('root_link'));
                    P7_SOMsetClass(tA.parentNode,('root_link'));
                }
            }
        }
    }
    if(fs>0){
        P7_SOMsetClass(cN[fs],'somlast');
        P7_SOMsetClass(tA,'somlast');
    }
}
}
tB.somState='closed';
tB.somUL.somState='closed';
P7_SOMsetClass(tB,'closed');
tB.style.visibility='visible';
if(tB.p7opt[5]==1){
P7_SOMcurrentMark(tB);
}
if(tB.p7opt[12]==1){
P7_SOMtoolbar(tB.id,'open');
}
}
}
p7SOM.status=true;
}
function P7_SOMctrl(d,ac,a){
    if(a){
        a.somTrig=true;
    }
    P7_SOMtoolbar(d,ac);
}
function P7_SOMtoolbar(d,ac,bp){
    var tB,tBR,fr,tr,prop,an,un='%',br,bf;
    tB=document.getElementById(d);
    if(tB){
        tBR=tB.somTBR;
    }
    else{
        return false;
    }
    if((ac=='open' && tB.somState=='opened') || (ac=='closed' && tB.somState=='closed')){
        return false;
    }
    if(tB && tBR){
        if( (ac!='close' && ac!='open') || !ac){
            ac=(tBR.somState=='closed')?'open':'closed';
        }
        an=(bp==1)?0:tB.p7opt[3];
        if(ac=='open'){
            tB.somState='opened';
            P7_SOMchangeClass(tB,'closed','opened');
            tBR.somState='opened';
            P7_SOMchangeClass(tBR,'closed','opened');
            tB.somUL.somState='opened';
            P7_SOMchangeClass(tB.somUL,'closed','opened');
            if(tB.p7opt[2]==1){
                tr=0;
                fr=parseInt(P7_SOMgetStyle(tB.somUL,'left'),10);
                prop='left';
            }
            else if(tB.p7opt[2]==2){
                tr=0;
                fr=parseInt(P7_SOMgetStyle(tB.somUL,'left'),10);
                prop='left';
            }
            tB.style.display='block';
            if(tB.p7opt[3]==1){
                P7_SOManimate(tB.somUL,prop,un,fr,tr,tB.p7opt[4],'quad');
            }
            else{
                tB.somUL.style[prop] = tr+un;
            }
        }
        else{
            tBR.somState='closed';
            P7_SOMchangeClass(tBR,'opened','closed');
            tB.somUL.somState='closed';
            P7_SOMchangeClass(tB.somUL,'opened','closed');
            tB.somState='closed';
            P7_SOMchangeClass(tB,'opened','closed');
            if(tB.p7opt[2]==1){
                fr=parseInt(P7_SOMgetStyle(tB.somUL,'left'),10);
                tr=-110;
                prop='left';
            }
            else if(tB.p7opt[2]==2){
                fr=parseInt(P7_SOMgetStyle(tB.somUL,'left'),10);
                tr=110;
                prop='left';
            }
            if(tB.p7opt[3]==1){
                P7_SOManimate(tB.somUL,prop,un,fr,tr,tB.p7opt[4],'quad',function(){
                    this.somMenuOb.style.display='none';
                }
                );
            }
            else{
                tB.somUL.style[prop] = tr+un;
                tB.style.display='none';
            }
        }
    }
    return false;
}
function P7_SOMclick(a,bp){
    var wH,tB,cnv=false,m=false;
    wH=window.location.href;
    if(a.href != wH && a.href != wH+'#'){
        if(a.href.toLowerCase().indexOf('javascript:')==-1){
            m=true;
        }
    }
    if( m && a.somSub && a.somState=='closed' ){
        m=false;
    }
    if(a.somSTE){
        P7_SOMscrollToElement(a);
        m=false;
        if(bp != 1){
            P7_SOMtoolbar(a.somMenu,'close');
        }
    }
    else{
        if(a.somState=='closed'){
            P7_SOMopen(a.id);
        }
        else{
            P7_SOMclose(a.id);
        }
    }
    return m;
}
function P7_SOMopen(d){
    var i,a,tB,iM,op,sD,tU,mT,mL,cmb,pB,fr,tr;
    a=document.getElementById(d);
    if(a.somState=='open'){
        return;
    }
    tB=document.getElementById(a.somMenu);
    if(tB.p7opt[11]==1){
        P7_SOMtoggle(a);
    }
    op=tB.p7opt[8];
    if(a.somSub){
        sD=document.getElementById(a.somSub);
        sD.somState='open';
        tB.somShut=false;
        a.somState='open';
        P7_SOMchangeClass(a,'trig_closed','trig_open');
        P7_SOMchangeClass(a.parentNode,'trig_closed','trig_open');
        tU=sD.getElementsByTagName('UL')[0];
        tU.setAttribute('aria-hidden','false');
        if(op==1){
            fr=sD.offsetHeight;
            tr=tU.offsetHeight;
            P7_SOManimate(sD,'height','px',fr,tr,tB.p7opt[9],'quad',function(){
                this.style.height='auto';
            }
            );
        }
        else{
            sD.style.height='auto';
            sD.style.visibility='visible';
        }
    }
}
function P7_SOMclose(d,bp){
    var i,a,tB,iM,op,sD,tU,fr,tr;
    a=document.getElementById(d);
    if(a.somState=='closed'){
        return;
    }
    tB=document.getElementById(a.somMenu);
    op=(bp==1)?0:tB.p7opt[8];
    if(a.somSub){
        sD=document.getElementById(a.somSub);
        sD.somState='closed';
        a.somState='closed';
        P7_SOMchangeClass(a,'trig_open','trig_closed');
        P7_SOMchangeClass(a.parentNode,'trig_open','trig_closed');
        tU=sD.getElementsByTagName('UL')[0];
        tU.setAttribute('aria-hidden','true');
        if(op==1){
            fr=sD.offsetHeight;
            tr=0;
            P7_SOManimate(sD,'height','px',fr,tr,tB.p7opt[9],'quad',function(){
                this.style.height='0px';
            }
            );
        }
        else{
            sD.style.height='0px';
        }
    }
}
function P7_SOMtoggle(a){
    var i,k,tD,cN,li,pp;
    pp=a.parentNode;
    while(pp){
        if(pp.tagName&&pp.tagName=='LI'){
            li=pp;
        }
        if(pp.tagName&&pp.tagName=='UL'){
            break;
        }
        pp=pp.parentNode;
    }
    cN=pp.childNodes;
    for(k=0;k<cN.length;k++){
        if(cN[k].tagName && cN[k].tagName=='LI'){
            if(cN[k].somTrigger && cN[k] != li){
                if(cN[k].somTrigger.somState!='closed'){
                    P7_SOMclose(cN[k].somTrigger.id);
                }
            }
        }
    }
}
function P7_SOMshut(d){
    var i,tB,tD;
    if(d){
        tB=document.getElementById(d);
        if(tB && !tB.somShut && tB.somUL){
            tD=tB.somUL.getElementsByTagName("DIV");
            if(tD&&tD.length){
                tB.somShut=true;
                for(i=tD.length-1;i>-1;i--){
                    if(tD[i].somState && tD[i].somState=='open'){
                        P7_SOMclose(tD[i].somTrigger.id,1);
                    }
                }
            }
        }
    }
}
function P7_SOMshutall(bp){
    var i,tB;
    if(p7SOM.ctl && p7SOM.ctl.length){
        for(i=0;i<p7SOM.ctl.length;i++){
            tB=document.getElementById(p7SOM.ctl[i][0]);
            if(tB && (!bp || bp!=tB.id)){
                P7_SOMtoolbar(tB.id,'close',1);
            }
        }
    }
}
function P7_SOMbody(evt){
    evt=(evt)?evt:event;
    var m=true,pp=(evt.fromElement)?evt.fromElement:evt.target;
    while(pp){
        if(pp.somTrig){
            m=false;
            break;
        }
        if(pp && pp.id && typeof(pp.id)=='string' && pp.id.indexOf('p7SOM')===0){
            m=false;
            break;
        }
        if(pp && pp.tagName && (pp.tagName=='BODY'||pp.tagName=='HTML')){
            break;
        }
        pp=pp.parentNode;
    }
    if(m){
        P7_SOMshutall();
    }
}
function P7_SOManimate(ob,prop,un,fv,tv,dur,typ,cb){
    if(ob.p7AnimRunning){
        ob.p7AnimRunning=false;
        clearInterval(ob.p7SOManim);
    }
    typ=(!typ)?'quad':typ;
    ob.p7animType=typ;
    ob.p7animProp=prop;
    ob.p7animUnit=un;
    ob.p7animStartVal=fv;
    ob.p7animCurrentVal=ob.p7animStartVal;
    ob.p7animFinishVal=tv;
    ob.style[ob.p7animProp]=ob.p7animCurrentVal+ob.p7animUnit;
    ob.style.visibility='visible';
    ob.p7animStartTime=P7_SOMgetTime(0);
    ob.p7animDuration=dur;
    if(!ob.p7AnimRunning){
        ob.p7AnimRunning=true;
ob.p7SOManim=setInterval(function(){
    P7_SOManimator(ob,cb);
}
, p7SOM.animDelay);
}
}
function P7_SOManimator(el,cb,op){
    var i,tB,tA,tS,et,nv,m=false;
    et=P7_SOMgetTime(el.p7animStartTime);
    if(et>=el.p7animDuration){
        et=el.p7animDuration;
        m=true;
    }
    if(el.p7animCurrentVal!=el.p7animFinishVal){
        nv=P7_SOManim(el.p7animType, et, el.p7animStartVal, el.p7animFinishVal-el.p7animStartVal, el.p7animDuration);
        el.p7animCurrentVal=nv;
        el.style[el.p7animProp]=nv+el.p7animUnit;
    }
    if(m){
        el.p7AnimRunning=false;
        clearInterval(el.p7SOManim);
        if(cb && typeof(cb) === "function"){
            cb.call(el);
        }
    }
}
function P7_SOManim(tp,t,b,c,d){
    if(tp=='quad'){
        if((t/=d/2)<1){
            return c/2*t*t+b;
        }
        else{
            return -c/2*((--t)*(t-2)-1)+b;
        }
    }
    else{
        return (c*(t/d))+b;
    }
}
function P7_SOMgetTime(st){
    var d = new Date();
    return d.getTime() - st;
}
function P7_SOMscrollToElement(a){
    var st,dy,op,el,t,tf,h,tb;
    h=a.hash;
    if(!h || h===''){
        return false;
    }
    else{
        h=h.replace('#','');
    }
    el=document.getElementById(h);
    if(!el){
        return false;
    }
    if(p7SOM.body.p7AnimRunning){
        p7SOM.body.p7AnimRunning=false;
        clearInterval(p7SOM.body.p7SOManim);
    }
    if(typeof(p7STT)=='object'){
        if(p7STT.body && p7STT.body.p7AnimRunning){
            p7STT.body.p7AnimRunning=false;
            clearInterval(p7STT.body.p7STTanim);
        }
    }
    st=p7SOM.body.scrollTop;
    t=st+el.getBoundingClientRect().top+1;
    tf=parseInt(a.getAttribute('data-top-offset'),10);
    if(tf && tf!==''){
        t-=tf;
    }
    tf=a.getAttribute('data-top-offset-id');
    if(tf && tf!==''){
        tb=document.getElementById(tf);
        if(tb){
            t-=tb.offsetHeight;
        }
    }
    if(p7SOM.defAnim==1){
        P7_SOMscrollAnim(p7SOM.body,st,t,p7SOM.defDuration,'quad');
    }
    else{
        p7SOM.body.scrollTop=t;
        if(typeof(P7_STTrsz)=='function'){
            P7_STTrsz();
        }
    }
    P7_SOMmarkLink(a);
    return false;
}
function P7_SOMscrollAnim(ob,fv,tv,dur,typ,cb){
    if(ob.p7AnimRunning){
        ob.p7AnimRunning=false;
        clearInterval(ob.p7SOManim);
    }
    typ=(!typ)?'quad':typ;
    ob.p7animType=typ;
    ob.p7animStartVal=fv;
    ob.p7animCurrentVal=ob.p7animStartVal;
    ob.p7animFinishVal=tv;
    ob.p7animStartTime=P7_SOMgetTime(0);
    ob.p7animDuration=dur;
    if(!ob.p7AnimRunning){
        ob.p7AnimRunning=true;
ob.p7SOManim=setInterval(function(){
    P7_SOMscrollAnimator(ob,cb);
}
, p7SOM.animDelay);
}
}
function P7_SOMscrollAnimator(el,cb,op){
    var i,tB,tA,tS,et,nv,m=false;
    et=P7_SOMgetTime(el.p7animStartTime);
    if(et>=el.p7animDuration){
        et=el.p7animDuration;
        m=true;
    }
    if(el.p7animCurrentVal!=el.p7animFinishVal){
        nv=P7_SOManim(el.p7animType, et, el.p7animStartVal, el.p7animFinishVal-el.p7animStartVal, el.p7animDuration);
        el.p7animCurrentVal=nv;
        el.scrollTop=nv;
    }
    if(m){
        el.p7AnimRunning=false;
        clearInterval(el.p7SOManim);
        if(typeof(P7_STTrsz)=='function'){
            P7_STTrsz();
        }
        if(cb && typeof(cb) === "function"){
            cb.call(el);
        }
    }
}
function P7_SOMmarkLink(a){
    var tB,tA,i;
    tB=document.getElementById(a.somMenu);
    if(tB.p7opt[5]==1){
        tA=tB.getElementsByTagName('A');
        for(i=0;i<tA.length;i++){
            if(tA[i]!=a){
                P7_SOMremClass(tA[i],'current_mark');
                P7_SOMremClass(tA[i].parentNode,'current_mark');
            }
        }
        P7_SOMsetClass(a,'current_mark');
        P7_SOMsetClass(a.parentNode,'current_mark');
    }
}
function P7_SOMmark(){
    p7SOMadv[p7SOMadv.length]=arguments;
}
function P7_SOMcurrentMark(el){
    var j,i,wH,cm=false,mt=['',1,'',''],op,r1,k,kk,tA,aU,pp,a,im,x;
    wH=window.location.href;
    if(el.p7opt[6]!=1){
        wH=wH.replace(window.location.search,'');
    }
    if(el.p7opt[7]!=1){
        wH=wH.replace(window.location.hash,'');
    }
    if(wH.charAt(wH.length-1)=='#'){
        wH=wH.substring(0,wH.length-1);
    }
    for(k=0;k<p7SOMadv.length;k++){
        if(p7SOMadv[k][0]&&p7SOMadv[k][0]==el.id){
            mt=p7SOMadv[k];
            cm=true;
            break;
        }
    }
    op=mt[1];
    if(op<1){
        return;
    }
    r1=/index\.[\S]*/i;
    k=-1;
    kk=-1;
    tA=el.getElementsByTagName("A");
    for(j=0;j<tA.length;j++){
        aU=tA[j].href.replace(r1,'');
        if(op>0){
            if(tA[j].href==wH||aU==wH){
                k=j;
                kk=-1;
            }
        }
        if(op==2){
            if(tA[j].firstChild){
                if(tA[j].firstChild.nodeValue==mt[2]){
                    kk=j;
                }
            }
        }
        if(op==3&&tA[j].href.indexOf(mt[2])>-1){
            kk=j;
        }
        if(op==4){
            for(x=2;x<mt.length;x+=2){
                if(wH.indexOf(mt[x])>-1){
                    if(tA[j].firstChild&&tA[j].firstChild.nodeValue){
                        if(tA[j].firstChild.nodeValue==mt[x+1]){
                            kk=j;
                        }
                    }
                }
            }
        }
    }
    k=(kk>k)?kk:k;
    if(k>-1){
        el.somDefLink=tA[k];
        pp=tA[k].parentNode;
        while(pp){
            if(pp.tagName&&pp.tagName=='LI'){
                P7_SOMsetClass(pp,'li_current_mark');
                a=pp.getElementsByTagName('A');
                if(a&&a[0]){
                    P7_SOMsetClass(a[0],'current_mark');
                    if(a[0].hasImg){
                        im=a[0].getElementsByTagName('IMG')[0];
                        im.mark=true;
                        im.src=im.p7imgswap[2];
                    }
                    if(el.p7opt[10]==1 && a[0].somSub){
                        P7_SOMopen(a[0].id);
                    }
                }
            }
            else{
                if(pp==el){
                    break;
                }
            }
            pp=pp.parentNode;
        }
        if(tA[k].somSTE){
setTimeout(function(){
    P7_SOMclick(tA[k],1);
}
,300);
}
}
}
function P7_SOMsetClass(ob,cl){
    if(ob){
        var cc,nc,r=/\s+/g;
        cc=ob.className;
        nc=cl;
        if(cc&&cc.length>0){
            if(cc.indexOf(cl)==-1){
                nc=cc+' '+cl;
            }
            else{
                nc=cc;
            }
        }
        nc=nc.replace(r,' ');
        ob.className=nc;
    }
}
function P7_SOMremClass(ob,cl){
    if(ob){
        var cc,nc;
        cc=ob.className;
        if(cc&&cc.indexOf(cl>-1)){
            nc=cc.replace(cl,'');
            nc=nc.replace(/\s+/g,' ');
            nc=nc.replace(/\s$/,'');
            nc=nc.replace(/^\s/,'');
            ob.className=nc;
        }
    }
}
function P7_SOMchangeClass(ob,clf,clt){
    if(ob){
        var cc,nc;
        cc=ob.className;
        if(cc && cc.indexOf(clf)>-1){
            nc=cc.replace(clf,clt);
            ob.className=nc;
        }
        else{
            P7_SOMsetClass(ob,clt);
        }
    }
}
function P7_SOMgetStyle(el,s){
    if(el.currentStyle){
        s=el.currentStyle[s];
    }
    else if (document.defaultView && document.defaultView.getComputedStyle){
        s=document.defaultView.getComputedStyle(el,"")[s];
    }
    else{
        s = el.style[s];
    }
    return s;
}
function P7_SOMgetCSSPre(){
    var i,dV,pre=['transition','WebkitTransition'];
    var c='none',cssPre=['','-webkit-'];
    dV=document.createElement('div');
    for(i=0;i<pre.length;i++){
        if(dV.style[pre[i]]!==undefined){
            c=cssPre[i];
            break;
        }
    }
    return c;
}
function P7_SOMaddSheet(sh){
    var h,hd;
    hd=document.head || document.getElementsByTagName('head')[0];
    h=document.createElement('style');
    h.type='text/css';
    if(h.styleSheet){
        h.styleSheet.cssText=sh;
    }
    else{
        h.appendChild(document.createTextNode(sh));
    }
    hd.appendChild(h);
}
function P7_SOMgetScrollBody(){
    var y,el = document.documentElement;
    if(el){
        y = el.scrollTop;
        el.scrollTop += 1;
        if(el.scrollTop == y){
            el = document.body;
        }
        else{
            el.scrollTop -= 1;
        }
    }
    else{
        el = document.body;
    }
    return el;
}
