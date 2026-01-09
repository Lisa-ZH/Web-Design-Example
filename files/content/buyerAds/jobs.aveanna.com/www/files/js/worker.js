const worker = new Worker('./video.js');
worker.postMessage([40, 2]);