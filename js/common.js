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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();