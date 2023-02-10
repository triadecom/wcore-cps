# WebCore, Задание по блоку 1.6

## Описание

[![Task Gist Badge]][Task Gist URL] [![Figma Badge]][Source Figma Template URL]
Сверстать адаптивную страницу по макету из фигмы
Полагаясь на пройденные темы в материале WebCore 1.2 - 1.6

### Стэк разработки

[![JS Badge]][JS URL] [![Webpack Badge]][Webpack URL] [![SCSS Badge]][SCSS URL] [![Node.Js Badge]][Node.Js URL] [![Eslint Badge]][Eslint URL] [![SwiperJS Badge]][SwiperJS URL]

### Материалы для задания

- [Макет][Source Figma Template URL] Цвета, текста и изображения экспортировать с макета
- [Шрифт][Font TT Lakes URL] *начертания TT Lakes Regular, TT Lakes Medium, TT Lakes Bold*
- [Webpack Сборка](https://github.com/jm-program/webpack-static-template) Инструкция по установке и функционалу сборки: [В ссылке][Task Webpack Template URL]

## Требования к проекту

1. Проект должен быть написан на основе сборщика webpack [Сборка для задания][Task Webpack Template URL]
2. Поддержка браузеров - последние версии **Safari, Chrome, Firefox**
3. **Без** использования css фреймворков, **без** jQuery
4. Между указанными на макете разрешениями (320, 768, 1440) все должно адекватно выглядеть и ничего не должно ломаться. На больших разрешениях центрируем страницу.
5. Использование БЭМ методологии в именовании сущностей.  
   Стиль именования - two dashes:  
   `block-name__elem-name--mod-name--mod-val`
6. Использование в основе стилизации препроцессор **SASS/SCSS**,  
   C правильной организацией файловой и логической структуры, используя БЭМ правила
7. Результат должен быть в виде репозитория на Github и ссылки на Github Pages
8. Репозиторий проекта не должен содержать в главной ветке **master** скомпилированные файлы, внутри должны быть только исходники

## Требования по интерактиву в проекте

1. Функционал для открытия навигационного меню из шапки
   - Мобильное меню должно раскрываться при клике на кнопку "бургер" слева в шапке.
   - На "планшете" меню закрывается так же при нажатии на "заблюренную" область.
   - Само меню не должно дублироваться в коде*
2. Функционал выпадающего меню, скрытия
   - При клике "Показать все" должен раскрываться более полный список
   - При клике "Скрыть" должен возвращаться в исходное состояние
3. Правильная работа внешнего модуля для свайпов [SwiperJs](https://swiperjs.com/). 
   - Не нужно делать, чтобы при ресайзе слайдер убирался/добавлялся
   - Инициировать слайдер в зависимости от начальной ширины экрана.
4. Работа с модальными окнами
   - По клику на кнопку с трубкой открывается модалка "заказать звонок"
   - По клику на кнопку с сообщением открывается модалка "обратная связь"

<!--- URL References --->
[Task Gist Badge]: https://shields.io/badge/Gist-task.md-dark?logo=github&style=flat-red
[Task Gist URL]: https://gist.github.com/jm-program/b786de1a1f34b62d3c30e587fb0c3d3d

[Figma Badge]: https://img.shields.io/badge/Figma-template-purple?style=flat&logo=Figma
[Source Figma Template URL]: https://www.figma.com/file/ttlPwrOE9PxIpxl3FqkIT1/%D0%92%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%BB%D0%B5%D0%BC%D0%BE%D0%B3%D0%BE-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0?node-id=0%3A312&t=e5yhwOwhdBAmAWN0-1

[Font TT Lakes URL]: https://webfonts.pro/base-web-fonts/sans-serif-grotesque/897-tt-lakes.html

[SwiperJS Badge]: https://img.shields.io/badge/SwiperJS-_-blue?logo=Swiper&color=444
[SwiperJS URL]: https://swiperjs.com/get-started

[JS Badge]: https://shields.io/badge/JavaScript-_-green?logo=javascript&color=444
[JS URL]: https://developer.mozilla.org/docs/Web/JavaScript

[Webpack Badge]: https://shields.io/badge/Webpack-_-green?logo=webpack&color=444
[Webpack URL]: https://webpack.js.org/

[SCSS Badge]: https://shields.io/badge/SCSS-_-green?logo=sass&color=444
[SCSS URL]: https://sass-lang.com/

[Node.Js Badge]: https://shields.io/badge/Node.js-_-green?logo=node.js&color=444
[Node.Js URL]: https://nodejs.org/en/

[Eslint Badge]: https://shields.io/badge/Eslint-_-green?logo=eslint&color=444
[Eslint URL]: https://eslint.org/
[Task Webpack Template URL]: https://gist.github.com/didolf/b2fcdab713265eee5852221ebf5df7d5