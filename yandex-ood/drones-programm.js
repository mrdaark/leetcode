// const Worker = require(’./WorkerClass’);

class Worker {
    new (path);
    onmessage (message) {

    };

    postMessage (text) {

    };

    terminate () {
        
    }
    
    
    ; // сюда нужно записать свою функцию-обработчик,
    // // чтобы принимать сообщения от дрона
    // postMessage: (text: string) => void; // эту функцию нужно вызвать для передачи строки боту,
    // // который её захеширует
    // terminate: () => void; // после одного использования, нужно удалять инстансы,
    // // таким образом освобождать дроны для следующих работ
  }


const doOneWork = (text:) => {
    try {
        const worker = new Worker('./worker'); // создаём дрона
        worker.onmessage = ({data}) => { // подписываемся на его сообщение
            // тут работа выполнена, используем data и освобождаем дрон
            worker.terminate();
        };
        worker.postMessage(text); // отправляем сообщение дрону, чтобы он начал работу
    } catch (e) {
        // свободных дронов нету, ждём освобождения дронов и создаём новый дрон повторно
    }
};
