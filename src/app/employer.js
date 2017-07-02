const MyWorker = require('worker-loader!./worker.js');

const worker = new MyWorker();

worker.addEventListener('message', function (event) {
    if (event.data) {
        console.log('message from worker thread', event.data);
        if (event.data.type === 'result') {
            console.log(event.data.content);
            // 不需要的时候销毁
            // worker.terminate();
        }
    }
});

worker.addEventListener('error', function (event) {
    console.error(event);
    // worker.terminate();
});

worker.postMessage({
    type: 'compute',
    content: {
        msg: 'hi'
    }
});
