// let btn = document.getElementById('Buttom')

// function changeBackgroundColor(){
//     const colorInput = document.getElementById('colorInput').value.toLowerCase()
//     const validColors = ['red','blue','green','black','white']

//     if(validColors.includes(colorInput)) {
//         document.body.style.backgroundColor = colorInput
//     } else {
//         alert('Invalid color')
//     }
// }

// btn.addEventListener('click',changeBackgroundColor)


////////////////////////////////////////////////////////////////////////

let calculateButton = document.getElementById('calculateButton')
let averageResult = document.getElementById('averageResult')

calculateButton.addEventListener('click',calculateAverage)

function calculateAverage(){
    const numberInput = document.getElementById('numberInput').value
    const numbersArray = numberInput.split(':').map(Number)
    if (numbersArray.length === 0){
        averageResult.textContent = 'No numbers entered'
        return
    }

    const sum = numbersArray.reduce((total,num) => total + num, 0)
    const average = sum / numbersArray.length 

    averageResult.textContent = `average: ${average.toFixed(2)}`
}

