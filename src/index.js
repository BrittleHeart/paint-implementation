const rows = document.querySelectorAll('.row')
const colorPicker = document.querySelector('.picker')
const resetButton = document.querySelector('.reset')

let picker = new CP(colorPicker)
let value = ''

resetButton.addEventListener('click', () => {
    for (let index = 0; index < rows.length; index++) {
        reset(rows[index])
    }
})

picker.on('change', function(r, g, b, a) {
    if (1 === a) {
        this.source.value = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else {
        this.source.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    }

    value = this.source.value
});

rows.forEach(element => {
    element.addEventListener('mousedown', () =>  {
        if(!element.hasAttribute('style'))
            element.style = `background-color: ${value}`
        else
            element.removeAttribute('style')
    })
})

function reset(element) {
    return element.removeAttribute('style')
}