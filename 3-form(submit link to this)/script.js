const inputs = document.querySelectorAll('.textbox');
const labels = document.querySelectorAll('.card__label');


inputs.forEach(input => {

    input.addEventListener('focus', () => {
        input.previousElementSibling.style['color'] = '#dddaff';
    })
    input.addEventListener('focusout', () => {
        input.previousElementSibling.style['color'] = '#7a73b3';
    })
})


