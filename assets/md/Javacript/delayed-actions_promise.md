# Отложенные действия. Промисы
- :page_with_curl: [На главную](../../../README.md)<br>
- :page_with_curl: [Типы данных. Преобразования типов. Сравнение](./data-types_comparison.md)<br>
- :page_with_curl: [Переменные](./variables.md)<br>
- :page_with_curl: [Объекты](./objectss.md)<br>
- :page_with_curl: [Массивы](./arrays.md)<br>
- :page_with_curl: [Функции. Контекст. Замыкания, каррирование](./functions_сontext_сarr_сlosures.md)<br>
- :page_with_curl: [Отложенные действия. Промисы](./delayed-actions_promise.md)<br>
---
### setTimeout, setInterval
Для выполнения отложенных действий в JavaScript существуют следующие способы:
- <b>setTimeout</b> - вызывает функцию через определенное количество миллисекунд. Функция вызывается только один раз. Может быть отменен с помощью clearTimeout.
- <b>setInterval</b> - вызывает функцию бесконечно с интервалом в  определенное количество миллисекунд, пока не будет отменен с помощью clearInterval.

### Callback hell и что такое промис
<b>Промис</b> это объект, который ждёт выполнения асинхронной операции (pending), после чего (т.е. после выполнения) промис принимает одно из двух состояний: fulfilled (успешное выполнение) или rejected (выполнено с ошибкой). При создании промис принимает функцию, в аргументах которой передаются методы resolve и reject, отвечающие за то, как должен быть обработан промис в результате переданной функции. Если в resolve/reject передать некоторое значение, то промис будет завершен успешно/неуспешно с этим значением.
На отлов определенного результата завершения промиса можно "подписаться" с помощью методов:
- <b>then</b> - принимает два колбэка, первый из которых вызывается, если промис завершен успешно, а второй - если с ошибкой. Если передан один колбэк, он будет вызван как для успешного промиса, так и для завершившегося ошибкой.;
- <b>catch</b> - принимает один колбэк, который будет вызван только в случае, если промис будет завершен с ошибкой;
- <b>finally</b> - принимает один колбэк, который выполнися в любом случае, независимо от результата завершения промиса.

### Методы работы с несколькими промисами
- <b>Promise.all()</b> - возвращает промис, который исполнится после исполнения всех переданных промисов. В случае, если любой из промисов будет отклонен, финальный промис будет также отклонен;
- <b>Promise.race()</b> - возвращает промис, который будет исполнен или отклонен с результатом исполнения первого исполненного или отклонённого промиса;
- <b>Promise.allSettled()</b> - возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

### async/await

- <b>async</b> - гарантирует, что функция асинхронная и возвращает промис.
- <b>await</b> - заставляет JavaScript ждать выполнения промиса. Код продолжит выполняться только когда будет получен результат промиса. Не может быть использован вне асинхронной функции (в функции без async).

### Полезные ссылки:
- [Глава про промисы и async/await](https://learn.javascript.ru/async)
- [Немного про цикл событий](https://learn.javascript.ru/event-loop)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>