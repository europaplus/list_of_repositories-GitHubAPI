# Интерфейсы. Их взаимодействие с классами. Шаблонизация
- :page_with_curl: [На главную](../../../README.md)<br>
- :page_with_curl: [Знакомство с TypeScript](./introducing_typescript.md)<br>
- :page_with_curl: [Создание своих типов и манипуляции с ними](./create_own_types.md)<br>
- :page_with_curl: [Интерфейсы. Их взаимодействие с классами. Шаблонизация](./interfaces_templating.md)<br>
---
<b>Интерфейсы</b> схожи с типами, но предназначаются для описания свойств и методов, которые должен иметь объект. Они определяются с помощью interface. Как правило, названия интерфейсов принято писать с большой буквы и начинать с буквы I.<br>
Поля интерфейса могут быть <b>опциональными</b> (создаются с помощью указания ?) или же <b>доступными только для чтения</b> (с помощью readonly). Опциональное поле может отсутствовать у объекта создаваемого типа. Readonly-поля не могут быть изменены.<br>

Например, создадим свой интерфейс:

```
interface IPerson {           // создаем интерфейс
    readonly name: string;    // объект этого типа должен иметь неизменяемое поле name типа string,
    surname?: string;         // опциональное поле surname типа string
    sayHi(): string;          // и метод sayHi, возвращающий строку
}
```

В отличие от типов, интерфейсы можно <b>наследовать</b> с помощью <b>extends</b>. В таком случае отнаследованный класс получает все свойства и методы родительского интерфейса.

```
interface IStudent extends IPerson {  // наследуем интерфейс IStudent от IPerson
    courseID: number;                 // у IStudent будут все поля IPerson плюс свое поле courseID
}
```

Интерфейсы могут <b>взаимодействовать с классами</b>, позволяя указывать, какие свойства и методы должен иметь класс. Для этого используется <b>implements.</b> При таком взаимодействии класс обязательно должен иметь все поля, описанные в интерфейсе.

Опишем класс через интерфейс:

```
class Student implements IStudent {
    readonly name = 'Nadya';
    courseID: number;

    constructor(courseID: number) {
        this.courseID = courseID;
    }

    sayHi(): string {
        return `hi, ${this.name}`;
    }
}
```

Интерфейсы позволяют использовать <b>шаблоны</b>. С помощью шаблонов можно переопределять типы каких-либо полей, типы аргументов методов и любые другие типы внутри интерфейса. Для одного интерфейса их может быть несколько и они могут иметь значения по умолчанию, подобные тем, что задаются для аргументов функций.

Пример использования шаблонов:

```
interface IStudent<CourseIdT = number, CourseNameT = string> extends IPerson {
    courseID: CourseIdT;                              // тип свойства по умолчанию number
    courseName: CourseNameT:                          // тип свойства по умолчанию string
}

type FrontStudentType = IStudent<number, 'frontend'>; // на основе нашего интерфейса 
                                                      // создаем новый тип, поле courseID 
                                                      // указываем явно как number, а полю
                                                      // courseName даем тип значения 'frontend'

const frontStudent: FrontStudentType = {              // создаем объект нашего типа
    courseID: 1,
    courseName: 'frontend'
}
```

### Полезные ссылки
- [Немного про классы в JS](https://learn.javascript.ru/class)
- [Классы и интерфейсы в TS](https://medium.com/devschacht/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%D1%8B-%D0%B2-typescript-ce556514b7d5)
- [О шаблонах в документации](https://www.typescriptlang.org/docs/handbook/2/generics.html)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>