let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
for(let p = 0; p < dogImages.length; i++){
    dogImages[p].style.transform = '180'
}
let dogNam = document.querySelectorAll('.dog-name')
for(let n=0; n < dogNam.length; i++){ 
    dogNam[n].style.textAlign = 'left'
}
let fooTr = document.querySelector('.footer')
fooTr.style.color = 'red'
