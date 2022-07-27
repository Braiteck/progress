$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Плавная прокрутка к якорю
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 24

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		if ($('.tabs button[data-content="' + href + '"]').length) {
			const $activeTab = $('.tabs button[data-content="' + href + '"]'),
				$parent = $activeTab.closest('.tabs_container'),
				level = $activeTab.data('level')

			$parent.find('.tabs:first button, .tab_content.' + level).removeClass('active')

			$activeTab.addClass('active')
			$(href).addClass('active')
		}

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Основной слайдер
	if ($('.main_slider .swiper').length) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// банера
	if ($('.banners .swiper').length) {
		new Swiper('.banners .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Банера
	if ($('.order_form .managers .swiper').length) {
		new Swiper('.order_form .managers .swiper', {
			loop: true,
			direction: 'vertical',
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		})
	}


	// Карусель сертификатов
	const certsSliders = []

	$('.certs .swiper').each(function (i) {
		$(this).addClass('certs_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 29,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		}

		certsSliders.push(new Swiper('.certs_s' + i, options))
	})


	// Галерея
	const gallerySliders = []

	$('.gallery .swiper').each(function (i) {
		$(this).addClass('gallery_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Специалисты - Сертификаты
	const specCertsSliders = []

	$('.spec_certs .swiper').each(function (i) {
		$(this).addClass('spec_certs_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 20,
			slidesPerView: 2,
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		}

		specCertsSliders.push(new Swiper('.spec_certs_s' + i, options))
	})

	$('.specialists .load_more .btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.specialists')

		$(this).toggleClass('active')
		parent.find('.hide').toggleClass('show')
	})


	// Клиента - Клиент
	const clientsDataSliders = [],
		clientsDataImagesSliders = []

	$('.clients .data .images .swiper').each(function (i) {
		$(this).addClass('clients_data_images_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			nested: true,
			spaceBetween: 16,
			slidesPerView: 2,
			on: {
				init: swiper => $(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')
			}
		}

		clientsDataImagesSliders.push(new Swiper('.clients_data_images_s' + i, options))
	})

	$('.clients .data > .swiper').each(function (i) {
		$(this).addClass('clients_data_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.clients-swiper-button-next',
				prevEl: '.clients-swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		}

		clientsDataSliders.push(new Swiper('.clients_data_s' + i, options))
	})


	// Клиента - Логотипы
	const clientsLogosSliders = []

	$('.clients .logos .swiper').each(function (i) {
		$(this).addClass('clients_logos_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 0,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			}
		}

		clientsLogosSliders.push(new Swiper('.clients_logos_s' + i, options))
	})


	// Особые гарантии для бизнеса
	$('.guarantees .directions .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.list')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Моб. табы
	$('.mob_tab_btn').click(function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$('.mob_tab_btn').removeClass('active')
			$('.categories .tab_content').slideUp(300)

			$(this).addClass('active')
			$(this).next().slideDown(300)
		} else {
			$(this).removeClass('active')
			$(this).next().slideUp(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal .close_btn', function (e) {
		e.preventDefault()

		Fancybox.close()
	})

	// Увеличение картинки
	Fancybox.bind('.fancy_img, .swiper-slide:not(.swiper-slide-duplicate) .fancy_slider', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	$(document).on('click', '.swiper-slide-duplicate a.fancy_slider', function (e) {
		e.preventDefault()

		let thisSlideIndes = $(this).closest('.swiper-slide-duplicate').data('swiper-slide-index')

		$(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + thisSlideIndes + '"] a.fancy_slider')[0].click()
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Отправка формы
	let forms = document.querySelectorAll('form')
	formErrors = true

	forms.forEach(form => {
		form.addEventListener('submit', e => {
			e.preventDefault()

			let phoneField = e.target.querySelector('input[name=phone]')

			phoneField.value != '' && !phoneField.value.includes('_')
				? phoneField.setAttribute('valid', true)
				: phoneField.setAttribute('valid', false)

			checkForm(e.target)

			if (!formErrors) {
				let params = {
					name: e.target.querySelector('input[name=name]').value,
					phone: e.target.querySelector('input[name=phone]').value,
					type: e.target.querySelector('.options') ? e.target.querySelector('input[name=type]:checked').value : '',
					work: e.target.querySelector('.options') ? e.target.querySelector('input[name=work]:checked').value : '',
					area: e.target.querySelector('.options') ? e.target.querySelector('input[name=area]:checked').value : ''
				},
					url = "./send.php?data=" + encodeURIComponent(JSON.stringify(params))

				xhttp = new XMLHttpRequest()
				xhttp.open('get', url, true)
				xhttp.setRequestHeader('Content-Type', 'application/json')

				xhttp.onload = function () {
					if (xhttp.readyState == 4 && xhttp.status === 200 && xhttp.responseText) {
						Fancybox.close()

						Fancybox.show([{
							src: '#success_modal',
							type: 'inline'
						}])
					}
				}

				xhttp.send()
			}
		})
	})


	function checkForm(form) {
		form.querySelectorAll('[valid="true"]').length == form.querySelectorAll('input[name=phone]').length
			? formErrors = false
			: formErrors = true
	}
})


$(window).on('load', () => {
	// Карта
	if ($('#map').length) {
		ymaps.ready(() => {
			let myMap = new ymaps.Map('map', {
				center: [55.753469, 37.602802],
				zoom: 16,
				controls: []
			})

			// Кастомный маркер
			let myPlacemark = new ymaps.Placemark([55.753301, 37.606272], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/ic_map_marker.svg',
				iconImageSize: [49, 55],
				iconImageOffset: [-25, -55]
			})

			myMap.geoObjects.add(myPlacemark)

			myMap.controls.add('zoomControl', {
				position: {
					right: '20px',
					top: '20px'
				}
			})

			myMap.behaviors.disable('scrollZoom')

			if (window.outerWidth < 768) myMap.setCenter([55.753301, 37.606272])
		})
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})