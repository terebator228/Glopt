$(document).ready(function(){
    

    window.addEventListener('DOMContentLoaded', () => {
        const hamburger_menu = document.querySelector('.hamburger-menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            hamburger_menu.classList.toggle('hamburger-menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                hamburger_menu.classList.toggle('hamburger-menu_active');
            })
        })
    })

function valideForms(form) {
    $(form).validate({
        rules: {
            name: 'required',
            phone: 'required',
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свой почту",
              email: "Неправильно введен адрес почты"
            }
          }
        
    })
}

valideForms('#consulting-form');
valideForms('#consultation form');
valideForms('#order form');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
    });
    return false;
});

const slider = tns({
    container: '.reviews__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    responsive: {
        320: {
            nav: true,
            mouseDrag: true
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1,
          nav: false,
        }
      }
});



document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
});


});