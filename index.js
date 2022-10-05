const bill = document.querySelector('.input-bill')
const people = document.querySelector('.input-people')
const custom = document.querySelector('.custom')
const cant = document.querySelector('.cant')
const tipPerson = document.querySelector('.tip-person')
const totalTips = document.querySelector('.total-person')
const botones = document.querySelectorAll('.tip-boton')
const reset = document.querySelector('.reset-boton')


let billInput = 0
let peopleInput = 0
let porCientos = 0

const comprobacion =()=>{
    if(billInput && peopleInput && porCientos ){
        reset.classList.add("reset-active")
    }else{
        reset.classList.remove("reset-active")
    }
}

cant.textContent = ''
const propina = (total=0,personas=0,porciento=0)=>{
    console.log(total,personas,porciento)
    const person = Math.floor(Number(total) / Number(personas))
    const prop = person * Number(porciento)
    const totalF = prop + person
    
    return [prop,totalF]
}
const renderizar = ()=>{

    const propinaIn = propina(billInput, +peopleInput, porCientos)[0].toFixed(2)
    const propinaT = propina(billInput, peopleInput, porCientos)[1].toFixed(2)
    tipPerson.textContent =  propinaIn ? `$ ${propinaIn}` : 0.00
    totalTips.textContent =  propinaT ? `$ ${propinaT}` : 0.00

}
bill.addEventListener('input',(e)=>{

    people.classList.remove("people-active")
    cant.textContent = ''
    billInput = Number(e.target.value)
    renderizar()
    comprobacion()

    // if(!people.value || people.value ==''){
    //     people.classList.add("people-active")
    //     cant.textContent = "Can't be 0"
    //     renderizar()
        
    //     //people.focus()
        
    // }else if(!bill.value){
    //     bill.value = ''
    //     renderizar()
    //     comprobacion()

    // }else{

    // }  
})

people.addEventListener('input',(e)=>{
    if(!bill.value || bill.value ==''){
        console.log('inserte bill')
    }else{

        
        
        peopleInput = Number(e.target.value)
        people.classList.remove("people-active")
        cant.textContent = ''
        renderizar()
        comprobacion()
    }
})

botones.forEach((boton,i,botons)=>{
    boton.addEventListener('click',(e)=>{
        botones.forEach(bot=>bot.classList.remove("active-boton"))
        boton.classList.add("active-boton")
        const a = Number(boton.textContent.replace('%','')) * 0.01
        porCientos = a
        custom.value = '' 
        custom.blur()
        renderizar()
        comprobacion()   
    })
    
})
custom.addEventListener('input',(e)=>{


    if(!people.value|| !bill.value){
        console.log('inserte valores')
    }else{

        
        botones.forEach(bot=>bot.classList.remove("active-boton"))
        porCientos = (e.target.value)*0.01
        renderizar()
        comprobacion()
    }

})






reset.addEventListener('click',()=>{
    if(reset.classList.contains("reset-active")){
        botones.forEach(bot=>bot.classList.remove("active-boton"))
        bill.value = ''
        people.value = ''
        custom.value =''
        billInput = ''
        peopleInput = ''
        porCientos = ''
        tipPerson.textContent = 0.00
        totalTips.textContent = 0.00
        reset.classList.remove("reset-active")
        bill.focus()


    }
    
})