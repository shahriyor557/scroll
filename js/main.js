let button = document.querySelector('button')
let acadmy = document.querySelector(".acadmy")
let madal = document.querySelector(".madal")
let courses = document.querySelector(".courses")
let sec_madal = document.querySelector(".sec_madal")
let partners = document.querySelector(".partners")
let teacher = document.querySelector(".teacher")
teacher.addEventListener('click', () => {
    window.scrollTo(0, 825);
    
})
// console.log(partners.offsetTop);

window.addEventListener('scroll', function () {
    if (window.scrollY > acadmy.offsetTop + 300 && window.scrollY < acadmy.offsetTop + acadmy.offsetHeight) {
        button.classList.add("active")
    }
    else {
        button.classList.remove("active")
    }

    if (window.scrollY > courses.offsetTop && window.scrollY < courses.offsetTop + courses.offsetHeight) {
        madal.classList.add("madal_act")
    }

    else {
        madal.classList.remove("madal_act")
    }
    if (window.scrollY > partners.offsetTop && window.scrollY < partners.offsetTop + partners.offsetHeight) {
        sec_madal.classList.add("madal_act")
    }
    else {
        sec_madal.classList.remove("madal_act")
    }
});

button.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
