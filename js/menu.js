// Этот код использует библиотеку jQuery для выполнения действий при возникновении определенных событий на странице. Конкретно:

// Когда документ готов, он настраивает несколько прослушивателей событий:
// При нажатии на элемент с классом "menu-btn" он переключает класс "menu_active" 
// на элемент с классом "menu" и переключает класс "body_scroll" на элемент "body"
// При нажатии на элемент с классом "catalog_link" он удаляет класс "menu_active"
//  из элемента с классом "menu" и удаляет класс "body_scroll" из элемента "body".

// При нажатии на элемент с классом "close-btn" он удаляет класс "menu_active" из 
// элемента с классом "menu" и удаляет класс "body_scroll" из элемента "body"
// Этот код, вероятно, используется для открытия и закрытия меню на веб-сайте. Обработчик
//  событий первого щелчка, когда нажат элемент с классом 'menu-btn', переключает класс 'menu_active' 
//  на элемент с классом 'menu'. Этот класс, вероятно, изменит визуальное состояние меню, сделав его видимым
//   или скрытым. Второй обработчик событий click, когда элемент с классом 'catalog_link' и элемент с классом 'close-btn'
//    щелкнут, удаляет класс 'menu_active' и 'body_scroll' соответственно. Это скроет меню и позволит снова прокручивать веб-сайт.

$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('.menu').toggleClass('menu_active');
        $('body').toggleClass('body_scroll');
    });

    $('.catalog_link').click(function() {
        $('.menu').removeClass('menu_active');
        $('body').removeClass('body_scroll');
    });

    $('.close-btn').click(function() {
        $('.menu').removeClass('menu_active');
        $('body').removeClass('body_scroll');
    });
});