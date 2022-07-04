// header 버튼 클릭시 해당 구역으로 이동
$('#header .depth1 li').on('click', function() {
  var index = $(this).index()
  var sectTop = $('body section').eq(index).offset().top

  $('html').animate({
    scrollTop:(sectTop-90)
  }, 500)

  $(this).addClass('on').siblings().removeClass('on')

  return false;
})

// 스크롤시 해당 구역 header li 표시
$(window).on('scroll', function() {
  var scT = $(this).scrollTop()
  // console.log(scT)
  var sect1 = $('#skills').offset().top - 95
  var sect2 = $('#portfolio').offset().top - 95
  var sect3 = $('#practice').offset().top - 95
  var sect4 = $('#contact').offset().top - 95

  if (sect1 > scT) {
    $('#header .depth1 li').removeClass('on')
  } else if (sect2 > scT && scT >= sect1 ) {
    $('#header .depth1 li').eq(0).addClass('on').siblings().removeClass('on')
  } else if (sect3 > scT && scT >= sect2) {
    $('#header .depth1 li').eq(1).addClass('on').siblings().removeClass('on')
  } else if (sect4 > scT && scT >= sect3) {
    $('#header .depth1 li').eq(2).addClass('on').siblings().removeClass('on')
  } else {
    $('#header .depth1 li').eq(3).addClass('on').siblings().removeClass('on')
  }
})

// 설정안한 sns
$('#main .banner .atbox .articleTop .address .sns a:nth-child(3)').on('click', function() {
  alert("아직 준비되지 않은 sns링크입니다.")
})

// skills 슬라이드 효과
$('#skills .slideOuter .slideInner').slick({
  autoplay:true,
  autoplayspeed:500,
  speed:500,
  dots:true,
  prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
  fade: true,
  slidesToShow: 1,
  slidesToScroll:1,
})

// 포트폴리오 슬라이드 효과
$('#portfolio .portbox .portInner .portSlide').slick({
  autoplay:false,
  speed:500,
  arrows:false,
  dots:true,
  slidesToShow: 1,
  slidesToScroll:1,
})

// 포트폴리오 페이지 이미지 선택 버튼
$('#portfolio .portExplain .pageN span').on('click', function() {
  var btnN = $(this).text()
  console.log(btnN)
  if (btnN === '1') {
    $(this).parent().parent().siblings('.portImg').children('.img2').removeClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img3').removeClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img4').removeClass('on')
  } else if ((btnN === '2' && $(this).hasClass('secP') === false) || btnN === '+') {
    $(this).parent().parent().siblings('.portImg').children('.img2').addClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img3').removeClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img4').removeClass('on')
  } else if (btnN === '3' || btnN === 'L' || (btnN === '2' && $(this).hasClass('secP'))) {
    $(this).parent().parent().siblings('.portImg').children('.img3').addClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img2').removeClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img4').removeClass('on')
  } else if (btnN === 'J') {
    $(this).parent().parent().siblings('.portImg').children('.img4').addClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img2').removeClass('on')
    $(this).parent().parent().siblings('.portImg').children('.img3').removeClass('on')
  }

  // 버튼 색 효과
  $(this).css({
    border: '1px solid rgb(85, 85, 85)',
    backgroundColor: '#000',
    color: '#fff',
  }).siblings('span').css({
    border: '1px solid #000',
    backgroundColor: '#ddd',
    color: '#000',
  })
})

// 준비안된 포트폴리오 링크버튼
$('#portfolio .portStubhub .portExplain .btn').on('click', function() {
  alert("도메인이 준비되지 않았습니다. 시일내에 준비하도록 하겠습니다.")
})

// contact 양식 정규표현식
// $('#contact form').on('submit', function() {
// 	var irumvalcheck = /^[가-힣]+$/
//   var irumval = $(this).children('#name').val()
// 	if(!irumvalcheck.test(irumval)) {
// 			alert("이름은 한글로 입력해주세요.")
// 			$('#name').focus()
// 			return false
// 	}

// 	var mailcheck = /^[a-zA-Z0-9]+[\@]+[a-zA-z]+[\.][a-z]+([\.][a-z]+)*$/
// 	var mailval = $(this).children('#email').val()
// 	if ( !mailcheck.test(mailval)) {
// 			alert("이메일 형식에 맞춰 입력해주세요.")
// 			$('#email').focus()
// 			return false
// 	}

//   var messagevalcheck = /^[가-힣][a-zA-Z0-9]+$/
//   var messageval = $(this).children('#message').val()
//   if (!messagevalcheck.test(messageval)) {
//     alert("보내실 메세지를 입력해주세요.")
//     $('#message').focus()
//     return false
//   }

//   return false
// })