let title1 = document.createElement('h1')
title1.innerText = 'PASSE O LOBO PELO LABIRINTO'
title1.style.border = '2px solid black'
title1.style.backgroundColor = 'yellow'
title1.style.width ='900px'
title1.style.height = '50px'
title1.style.textAlign = 'center'
document.querySelector('body').appendChild(title1)

let imag = document.createElement('img')
imag.src = 'IMG/img2.png'
imag.style.width = "100px"
imag.style.height = "100px"
document.querySelector('div').appendChild(imag)

let imag1 = document.createElement('img')
imag1.src = "IMG/img1.jpg"
imag1.style.width = '900px'
imag1.style.height = '500px'
imag1.style.border = '2px solid black'
document.querySelector('body').appendChild(imag1)

let moveHor = 50;
let moveVert = 100;

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp'){
        moveVert = (moveVert - 10);
        document.getElementById('box').style.top = moveVert + "px"
    }
    if(event.key === 'ArrowDown'){
        moveVert = (moveVert + 10);
        document.getElementById('box').style.top = moveVert + "px"
    }
    if(event.key === 'ArrowRight'){
        moveHor = (moveHor + 10);
        document.getElementById('box').style.left = moveHor + "px"
    }
    if(event.key === 'ArrowLeft'){
        moveHor = (moveHor - 10);
        document.getElementById('box').style.left = moveHor + "px"
    }

})
