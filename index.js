const bill = document.querySelector('.input-bill')
const people = document.querySelector('.input-people')
const custom = document.querySelector('.custom')
const cant = document.querySelector('.cant')
const tipPerson = document.querySelector('.tip-person')
const totalTips = document.querySelector('.total-person')
const botones = document.querySelectorAll('.tip-boton')

let inprop = 0
let intotal = 0

let porCientos = 0

cant.textContent = ''

const propina = (total=0,personas=0,porciento=0)=>{
    const person = Math.floor(total / personas)
    const prop = person * porciento
    const totalF = prop + person
    return [prop,totalF]
}
const renderizarA = (e)=>{

    const propinaIn = propina(e.target.value, people.value, porCientos)[0].toFixed(2)
    const propinaT = propina(e.target.value, people.value, porCientos)[1].toFixed(2)
    tipPerson.textContent =  `$ ${propinaIn}`
    totalTips.textContent =  `$ ${propinaT}`

}


const renderizarB = (e)=>{
    const propinaIn = propina(bill.value ,e.target.value,porCientos)[0].toFixed(2)
    const propinaT = propina(bill.value ,e.target.value,porCientos)[1].toFixed(2)
    tipPerson.textContent =  `$ ${propinaIn}`
    totalTips.textContent =  `$ ${propinaT}`

}


bill.addEventListener('input',(e)=>{
    if(!people.value || people.value ==''){
        people.classList.add("people-active")
        cant.textContent = "Can't be 0"
        people.focus()
        
    }else if(!bill.value){
        bill.value = 0
        renderizarA(e)

    }else{
        people.classList.remove("people-active")
        cant.textContent = ''
        renderizarA(e)
    }  
})

people.addEventListener('input',(e)=>{
    if(!bill.value){
        renderizarB(e)
        bill.focus()
    }else if(!people.value){
        people.value = 0
        renderizarB(e)

    }else if(people.classList.contains("people-active")){
        people.classList.remove("people-active")
        cant.textContent = ''
        renderizarB(e)

    }else{

        renderizarB(e)
    }
})

botones.forEach((boton,i,botons)=>{
    boton.addEventListener('click',(e)=>{
        botones.forEach(bot=>bot.classList.remove("active-boton"))
        boton.classList.add("active-boton")
        const a = +(boton.textContent.replace('%','')) * 0.01
        console.log(e.target)
        porCientos = a 
        

        
        
        
    })
    
})

document.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        renderizar(e)
    }
})