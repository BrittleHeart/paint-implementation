const wrapper = document.querySelector('.wrapper')

function createSheet(quantity) {
    let app = document.createElement('div')
    app.setAttribute('class', 'app')
    app.setAttribute('id', 'app')

    wrapper.appendChild(app)

    app = document.querySelector('#app')

    if(typeof quantity === 'number' && quantity > 0) {
        for(let i = 1; i <= quantity; i++) {
            let div = document.createElement("div")
            div.setAttribute('class', 'row')
            div.textContent = i
            app.appendChild(div)
        }
    } else {
        throw new Error('Quantity must be integer and must be greater than 0')
    }
}

let  quantity = prompt('Ile elementów na płótnie?')
createSheet(parseInt(quantity))

const rows = document.querySelectorAll('.row')
const colorPicker = document.querySelector('.picker')
const resetButton = document.querySelector('#reset')

let picker = new CP(colorPicker)
let value = ''

console.log(rows);

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
