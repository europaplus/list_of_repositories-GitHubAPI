# Создаем проект с помощью CRA
- :page_with_curl: [На главную](../../../README.md)<br>
- :page_with_curl: [Создаем проект с помощью CRA](./create_project_CRA.md)<br>
- :page_with_curl: [Пакетные менеджеры](./package_managers.md)<br>
---
<b>CRA</b> (Create React App) - утилита, позволяющая засетапить react-приложение, скрывающая все конфиги внутри себя и выдающая пользователю интерфейс к внутренним скриптам запуска и сборки.

Чтобы создать приложение, пишем:

```
yarn create react-app my-cra
```

### Структура созданного приложения:
<pre>
my-cra
|---- README.md - руководство использования
|---- node_modules - зависимости вашего приложения
|---- package.json - мета-описание проекта
|---- .gitignore - описание того, что не должно попасть на гит
|---- public - папка со статикой
|    |---- favicon.ico
|    |---- index.html
|    | ...
|---- src - папка с исходным кодом
      |---- App.js
      |---- App.css
      |---- index.js
      |---- index.css
      | ...
</pre>

### Команды для работы с проектом:

```
yarn run start  // запуск проекта
yarn run build  // сборка проекта
yarn run eject  // извлечение конфигов
```

### Преимущества и недостатки CRA

<b>Преимущества:</b>
1. Позволяет быстро начать разработку.
2. Имеет предустановленные библиотеки, нужные для большинства проектов.
3. Конфиги уже оптимизированы.

<b>Недостатки:</b>
1. Рано или поздно настанет необходимость eject.
2. Большое число конфигов и библиотек, в которых сложно разобраться и “зачистить” лишнее.
3. Не позволяет новичкам разобраться во внутреннем устройстве и возможностях react-стека.
### Полезные ссылки
- [Создаем приложение на CRA](https://ru.reactjs.org/docs/create-a-new-react-app.html)
- [Туториал по подключению алиасов](https://habr.com/ru/post/557076/)
- [Библиотека Ant Design](https://ant.design/)
- [Библиотека VKUI](https://vkcom.github.io/VKUI/)
<div align="right">
  <b><a href="#">↥ Наверх</a></b>
</div>