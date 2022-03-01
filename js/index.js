const btnDistribution = document.querySelector('.distribution')
const btnClaim = document.querySelector('.claim')
const btnFraud = document.querySelector('.fraud')
const showDistribution = document.querySelector('#distribution')
const showClaim = document.querySelector('#claim')
const showFraud = document.querySelector('#fraud')
btnDistribution.style.background = '#7854F7'
btnDistribution.style.color = 'white'
showClaim.style.display = 'none'
showFraud.style.display = 'none'
btnDistribution.style.fontFamily = 'product-sans-bold'

btnDistribution.addEventListener('click', () => {
    showDistribution.style.display = 'flex'
    showClaim.style.display = 'none'
    showFraud.style.display = 'none'
    btnDistribution.style.background = '#7854F7'
    btnDistribution.style.color = 'white'
    btnDistribution.style.fontFamily = 'product-sans-bold'
    btnClaim.style.background = 'white'
    btnClaim.style.color = '#666666'
    btnClaim.style.fontFamily = 'product-sans-light'
    btnFraud.style.fontFamily = 'product-sans-light'
    btnFraud.style.background = 'white'
    btnFraud.style.color = '#666666'
})
btnClaim.addEventListener('click', () => {
    showDistribution.style.display = 'none'
    showClaim.style.display = 'flex'
    showFraud.style.display = 'none'
    btnClaim.style.background = '#7854F7'
    btnClaim.style.color = 'white'
    btnClaim.style.fontFamily = 'product-sans-bold'
    btnDistribution.style.background = 'white'
    btnDistribution.style.color = '#666666'
    btnFraud.style.background = 'white'
    btnFraud.style.color = '#666666'
    btnDistribution.style.fontFamily = 'product-sans-light'
    btnFraud.style.fontFamily = 'product-sans-light'
})
btnFraud.addEventListener('click', () => {
    showDistribution.style.display = 'none'
    showClaim.style.display = 'none'
    showFraud.style.display = 'flex'
    btnFraud.style.background = '#7854F7'
    btnFraud.style.color = 'white'
    btnFraud.style.fontFamily = 'product-sans-bold'
    btnDistribution.style.background = 'white'
    btnDistribution.style.color = '#666666'
    btnClaim.style.background = 'white'
    btnClaim.style.color = '#666666'
    btnClaim.style.fontFamily = 'product-sans-light'
    btnDistribution.style.fontFamily = 'product-sans-light'
})

