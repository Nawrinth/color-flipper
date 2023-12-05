const button = document.getElementById('btn')
const hexa = document.getElementById('hex')
const contac = document.getElementById('container')
const hexvalue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',


function changer()
{
    let color = '#'

    for (let i=0;i<6;i++)
    {

        color += String(hexvalue[Math.floor(Math.random()*16)])

    }
    console.log(color)
    hexa.innerHTML = color

    contac.style.backgroundColor = color
}

)