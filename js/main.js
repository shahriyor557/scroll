let button = document.querySelector('button')
let acadmy = document.querySelector(".acadmy")
let madal = document.querySelector(".madal")
let courses = document.querySelector(".courses")
window.addEventListener('scroll', function () {
    if (window.scrollY > 400 && window.scrollY < 800) {
        button.classList.add("active")
    }
    else if (window.scrollY > 1651 && window.screenY < 2284) {
        madal.classList.add("madal_act")
    }
    else {
        button.classList.remove("active")
        madal.classList.remove("madal_act")
    }
    // console.log(window.scrollY);

});

button.addEventListener('click', () => {
    // console.log(acadmy.scrollTop);
    window.scrollTo(0, 0);
    console.log(courses.scrollTop);


})
