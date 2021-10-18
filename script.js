const randomButton = document.querySelector('.random-button')

const lista = []

randomButton.addEventListener('click',function(){
    const display = document.querySelector('body')
    // display.classList.add('change-color')
    
    console.log(lista.length)

    if(lista.length > 0){
        console.log('Entrou na condição lista.legth > 0')
        while(lista.length > 0){
            lista.pop()
        }
    }

    while(lista.length < 6){
        let num = getRandom(15)
        console.log(num)
        lista.push(num)
    }

    console.log(lista)
    
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == 10){
            lista[i] = 'A'
        }else if(lista[i] == 11){
            lista[i] = 'B'
        }else if(lista[i] == 12){
            lista[i] = 'C'
        }else if(lista[i] == 13){
            lista[i] = 'D'
        }else if(lista[i] == 14){
            lista[i] = 'E'
        }else if(lista[i] == 15){
            lista[i] = 'F'
        }
    }

    console.log(lista)
    console.log(`#${lista[0]}${lista[1]}${lista[2]}${lista[3]}${lista[4]}${lista[5]}`)

     document.querySelector('.cod-hexa').innerHTML = `#${lista[0]}${lista[1]}${lista[2]}${lista[3]}${lista[4]}${lista[5]}`
    display.style.background = `#${lista[0]}${lista[1]}${lista[2]}${lista[3]}${lista[4]}${lista[5]}`
})



function getRandom(max) {
    let num = Math.floor(Math.random() * max + 1)
    return num
}
