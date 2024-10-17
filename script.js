function ChangeColor(element) {
    element.firstElementChild.classList.add('rotate-animation');
    element.firstElementChild.addEventListener('animationend', () => {
        element.firstElementChild.classList.remove('rotate-animation');});
    element.firstElementChild.style.visibility = "visible"
 }