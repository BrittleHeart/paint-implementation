const rows = document.querySelectorAll('.row')
const colorPicker = document.querySelector('.picker')
const resetButton = document.querySelector('.reset')

let picker = new CP(colorPicker)
let value = ''

resetButton.addEventListener('click', () => {
    for (let index = 0; index < rows.length; index++) {
        rows[index].removeAttribute('style')
    }
})

picker.on('change', function(r, g, b, a) {
    if (1 === a) {
        this.source.value = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else {
        this.source.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    }

    value = this.source.value

    console.log(typeof value);
});



rows.forEach(element => {
    element.addEventListener('mousedown', () =>  {
        if(!element.hasAttribute('style'))
            element.style = `background-color: ${value}`
        else
            element.removeAttribute('style')
    })
})

function addNode(element) {
    if(element.classList.contains('shape'))
        return element.classList.remove('shape')
    else
        return element.classList.add('shape')
}

function reset(element) {
    return element.removeAttribute('style')
}