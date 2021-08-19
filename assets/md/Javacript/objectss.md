# Объекты
- :page_with_curl: [Типы данных. Преобразования типов. Сравнение](./assets/md/Javacript/data-types_comparison.md)<br>
- :page_with_curl: [Переменные](./assets/md/Javacript/variables.md)<br>
- :page_with_curl: [Объекты](./assets/md/Javacript/objectss.md)<br>
- :page_with_curl: [Массивы](./assets/md/Javacript/arrays.md)<br>
- :page_with_curl: [Функции. Контекст. Замыкания, каррирование](./assets/md/Javacript/functions_сontext_сarr_сlosures.md)<br>
- :page_with_curl: [Отложенные действия. Промисы](./assets/md/Javacript/delayed-actions_promise.md)<br>
---
<b>Объект</b> - это набор свойств, которые представляют из себя пару - ключ и значение. По ключу можно обратиться к значению свойства объекта.
Ключ свойства должен иметь тип string или другой тип, который можно преобразовать к string. Например, если задать свойство с ключом true типа boolean, то ключ будет преобразован в 'true' типа string. Значение свойства может иметь любой тип.
<b>Обратиться к свойству</b> объекта можно:
- Через точку (obj.property);
- Через квадратные скобки и имя свейства (obj['property']);
- Через квадратные скобки и переменную, содержащую имя свойства (obj[prop], где prop = 'property').

<b>Удалить свойство</b> можно с помощью оператора delete (delete obj.property).
<b>Проверить существование свойства</b> можно с помощью:
- Обращения к этому свойству и проверки, является ли значение undefined (например, obj.property === undefined);
- Оператора in ('property' in obj);
- Метода hasOwnProperty (obj.hasOwnProperty).

<b>Перебор свойств</b> объекта можно осуществить с помощью цикла: for (property in obj). Также для итерации по объекту можно использовать:
- Object.keys() - вернет массив ключей свойств объекта;
- Object.values() - вернет массив значений свойств объекта;
- Object.entries() - вернет массив массивов вида [ключ, значение].
### Полезные ссылки
- [Общие сведения об объектах](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Глава о прототипах на learn js](https://learn.javascript.ru/prototypes)
- [Скрытые свойства Symbol](https://learn.javascript.ru/symbol#skrytye-svoystva)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>