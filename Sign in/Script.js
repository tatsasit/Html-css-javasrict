const container = document.querySelector(".container");
const signUpBth = document.querySelector(".green-bg button");

signUpBth.addEventListener('click',
() => {
    container.classList.toggle('change')
})