# Создание своих типов и манипуляции с ними
- :page_with_curl: [На главную](../../../README.md)<br>
- :page_with_curl: [Знакомство с TypeScript](./introducing_typescript.md)<br>
- :page_with_curl: [Создание своих типов и манипуляции с ними](./create_own_types.md)<br>
- :page_with_curl: [Интерфейсы. Их взаимодействие с классами. Шаблонизация](./interfaces_templating.md)<br>
---
Собственные типы создаются с помощью type. Их названия принято записывать с большой буквы. Тип может быть просто примитивным типом, конкретным значением, типом объекта с типизированными полями, типа массива с типизированными полями и т.д.<br>
Типы можно <b>объединять (оператор |),</b> тем самым создавая новый тип, означающий один из объединяемых типов. Например:

```
const uniqueID: string | number;  // переменная uniqueID может принимать 
                                  // или строковое, или числовое значение
```

Типы можно <b>пересекать (оператор &),</b> тем самым создавая тип, содержащий все поля объединяемых типов. Например:

```
type Person = {
    name: string;
};

type Course = {
    id: number;
};

type CourseStudent = Person & Course;  // создаваемый тип будет содержать поля name и id 
```

Еще примеры создания собственных типов:

```
type Name = string;                            // создаем тип Name, эквивалентный типу string

type Language = 'js' | 'ts';                   // создаем юнион - данный тип может 
                                               // принимать значение или 'js', или 'ts' 

type Person = {                                // типизируем объект
    name: Name;
    age: number;
    projects: string[];                        // типизируем массив
};

type Programmer = {                            // типизируем еще один объект
    favouriteLanguage: Language;
};

type FrontendDeveloper = Person & Programmer;  // создаем пересечение - данный тип получит
                                               // все поля типа Person и поля типа Programmer
```

### Полезные ссылки
- [О том, что можно делать с типами](https://www.typescriptlang.org/docs/handbook/utility-types.html)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>