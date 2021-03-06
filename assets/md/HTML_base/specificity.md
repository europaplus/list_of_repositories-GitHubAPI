# Специфичность селекторов
- :page_with_curl: [На главную](../../../README.md)<br>
- :page_with_curl: [Блочные, строчные, блочно-строчные элементы](./block_inline_inline-block.md)<br>
- :page_with_curl: [Единицы измерения](./units.md)<br>
- :page_with_curl: [Позиционирование](./position.md)<br>
- :page_with_curl: [Псевдоклассы и псевдоэлементы. Комбинаторы](./pseudo_classes_pseudo-elements_combinators.md)<br>
- :page_with_curl: [Специфичность селекторов](./specificity.md)<br>
- :page_with_curl: [Выравнивание](./alignment.md)<br>
---
###По убыванию специфичности селекторы можно расположить в таком порядке:
- `!important`. Наиболее большой вес имеют селекторы с модификатором !important. Он присваивает селектору наивысший приоритет. При использовании двух одинаковых свойств с этим модификатором будет применено последнее. Необходимо стараться избегать использования !important
- `style=””`. Инлайновые стили, объявленные прямо в элементе, имеют наивысший приоритет, не считая стилей с !important. Таким образом, по приоритету их можно считать вторыми.
- `#id`. Стили, определенные по селектору с уникальным идентификатором элемента.
- `.class`, [attr=value], :hover. Стили по класснейму элемента, атрибутам и псевдоклассам.
- `<tag>`, ::before. Стили элементов и псевдоэлементов.
- `*, комбинаторы, :not()`. Универсальный селектор, комбинаторы (например, > или ~) и псевдоэлемент :not имеют наименьшую специфичность.
## Полезные ссылки:
1. [О специфичности](https://css-tricks.com/specifics-on-css-specificity/)
2. [data-атрибуты](https://habr.com/ru/company/ruvds/blog/490626/)
3. [Развернутый ответ на вопрос о том, почему нужно избегать использования !important](https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>