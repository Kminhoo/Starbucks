const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function() {
    //..Logic
    searchInputEl.focus();
}); 

searchInputEl.addEventListener('focus', function() {
    //..Logic
    searchEl.classList.add('focused');
    //첫번째 인수는 속성의 이름을, 두번째인수에는 속성값을 입력하면 된다.
    searchInputEl.setAttribute('placeholder', '통합검색'); //속성을 지정하는 메소드
});

//blur은 focus가 해제될때 를 나타낸다.
searchInputEl.addEventListener('blur', function() {
    //..Logic
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector('#to-top');

// documnet는 문서를 의미하고 window는 하나의 tab 또는 하나의 창이라고 생각할 수 있다.
// 즉 하나의 브라우저 브라우저의 여러 기능들을 담고 있는 객체
window.addEventListener("scroll", _.throttle(function() {
    console.log(window.scrollY); //scrollY의 위치를 출력
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
        gsap.to(toTopEl, .2, {
            x: 0,
        });     
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
        gsap.to(toTopEl, .2, {
            x: 100,
        });     
    }
}, 300));


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

/*_.throttle(함수, 시간) scroll event를 사용할때 자주 사용되는 js라이브러리로
* 메소드에 작성된 시간만큼의 부하? 제한을 줌으로써 scroll이벤트가 계속 발생되는것을
  막는 역할로 이 프로젝트에서 사용되었다. 시간은 밀리세컨드 단위로! */


/* gsap이라는 애니메이션을 처리해주는 라이브러리가 있다.
    gsap.to(효과를 부여할 요소, 효과가 이루어지는 시간 초단위, 애니메이션이 이루어질 효과를 객체의 형태로 표현)
    하여 나타낸다. */

/* window.addEventListener('scroll', function() {
    if(window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });        
   }
 }) */


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //각 요소별로 시간을 지연시켜주는 역활을 한다.
        opacity: 1,
    });
});

// swiper

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

// promotion swiper
new Swiper('.promotion .swiper', {
    direction: 'horizontal', //Swiper의 기본값이라 따로 추가할 필요는 없다.
    slidesPerView: 3, //화면에 한번에 몇개의 슬라이드가 보이게 둘것인가.
    spaceBetween: 10, //슬라이드 사이의 여백 단위는 px인듯 하다. 알아볼것.
    centeredSlides: true, //첫번째 슬라이드를 가운데에 보이게 하는 것
    loop: true, //반복재생
    // autoplay: {
    //     delay: 5000,
    // },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 요소를 선택한다.
        clickable: true, //사용자가 페이지 요소를 사용가능하게 한다. 즉 클릭하여 이동가능
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', //이전버튼의 요소를 지정
        nextEl: '.promotion .swiper-next' //다음버튼의 요소를 지정
    },
});

//awardSwiper

new Swiper('.awards .swiper', {
    direction: 'horizontal', //Swiper의 기본값이라 따로 추가할 필요는 없다.
    slidesPerView: 5, //화면에 한번에 몇개의 슬라이드가 보이게 둘것인가.
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


// promotion toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion //변수의 설정된 값을 반대로 만들어주는 값
    if (isHidePromotion) {
        //숨김처리!
        promotionEl.classList.add('hide');
    } else {
        //보임처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, //반복횟수의 무한반복을 의미
        yoyo: true, //애니메이션 효과가 끝나고 다시 원상태 -> 다시 애니메이션
        ease: Power1.easeInOut,
        delay: random(0, delay),
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// scrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정하는것.
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

