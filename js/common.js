$(function() {

	/*mobile-menu*/
	$("#my-menu").mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		offCanvas: {
			position: 'left'
		}
	});

	var api_mmenu = $('#my-menu').data('mmenu');
	api_mmenu.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');

	});

	var bol_menu_left = false
	$('.main__bg-burger-menu-left').on('click', function() {
		if ( bol_menu_left == false) {
			$('.main__menu-left-menu').removeClass('main__none-left');
			$('.main__menu-left-menu').addClass('main__active-left');
			$('.main__filter').addClass('main__filter__no');
			$('.main__mobile-active').addClass('mobile-margin-right');
			$('.main__mobile-active').removeClass('mobile-margin-left');
			bol_menu_left = true;
		} else {
			$('.main__menu-left-menu').removeClass('main__active-left');
			$('.main__menu-left-menu').addClass('main__none-left');
			$('.main__filter').removeClass('main__filter__no');
			$('.main__mobile-active').removeClass('mobile-margin-right');
			$('.main__mobile-active').addClass('mobile-margin-left');
			bol_menu_left = false;
		}
	});

	/*форма категории*/
	var tab_1 = document.querySelector('.btn-tab-1');
	var tab_2 = document.querySelector('.btn-tab-2');
	var light_select = document.getElementsByClassName('select-none');
	var dis_no = document.getElementsByClassName('disp-mob-yes-no');

	tab_1.onclick = function() {
		this.classList.add('active-btn');
		tab_2.classList.remove('active-btn');

		for(var i = 0; i < light_select.length; i++) {
			light_select[i].style.display = 'block';
		}

		if (window.innerWidth <= 1200) {
			for(var i = 0; i < dis_no.length; i++) {
				dis_no[i].style.display = 'block';
			}
		}
	}

	tab_2.onclick = function() {
		this.classList.add('active-btn');
		tab_1.classList.remove('active-btn');

		for(var i = 0; i < light_select.length; i++) {
			light_select[i].style.display = 'none';
		}

		if (window.innerWidth <= 1200) {
			for(var i = 0; i < dis_no.length; i++) {
				dis_no[i].style.display = 'none';
			}
		}
	}

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/*форма для поиска*/
	$('#main__form_search').validate({
		rules: {
			search: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			search: {
				required: 'Поле обязательно для заполнения',
				minlength: 'Мин. кол. символов 2'
			}
		}
	});

	/*форма электроной почты*/
	$('#fotter__form-mail').validate({
		rules: {
			email: {
				required: true,
				email: true	
			}
		},
		messages: {
			email: {
				required: 'Поле обязательно',
				email: 'Неверный адрес почты'
			}
		}
	});

	function pop_up() {
		$('.pop_up').css('top', '0%');

		function func_pop_top() {
			$('.pop_up').css('top', '-100%');
		}

		setTimeout(func_pop_top, 5000);
	}

	$('#fotter__form-mail').submit(function(e) {
		e.preventDefault();
		var $form = $(this);
                if($form.valid()){
                	pop_up();
                	$('.footer_email').val("");
                } 
            });

	/*форма входа*/
	$('#form__admin').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 4
			}
		},
		messages: {
			email: {
				required: 'Поле обязательно',
				email: 'Неверный логин'
			},
			password: {
				required: 'Поле обязательно',
				minlength: 'Мин пароль 4 символа'
			}
		}
	});

	/*форма для обратной связи*/
	$('#phone').inputmask('+38(099)999-99-99', {autoclear: false});
	
	$('#form__mobile').validate({
		rules: {
			mobile: {
				required: true
			}
		},
		messages: {
			mobile: {
				required: 'Введите номер телефона'
			}
		}
	});

	/*только положительные числа*/

	$( '.moneu-1' ).change(function() {
		var val = Math.abs($('.moneu-1').val());
		$('.moneu-1').val(val);
	});

	$( '.moneu-2' ).change(function() {
		var val = Math.abs($('.moneu-2').val());
		$('.moneu-2').val(val);
	});


});



