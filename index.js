console.log('person1:show ticket')
console.log('person2:show ticket')

const preMovie = async() =>{
    const promisewifebringhngTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    })
    
const getPopcorn= new Promise((resolve,reject)=> resolve('popcorn'));

let getCandy = new Promise((resolve ,reject)=>resolve('candy'))
let getcake = new Promise((resolve,reject)=>resolve('cake'))
let ticket = await promisewifebringhngTicket;

let[popcorn,candy,cake] =await Promise.all([getPopcorn,getCandy,getcake])
console.log(`${popcorn}`, `${candy}`,`${cake}`)
return ticket;
}

preMovie().then((m)=> console.log(`person3: show ${m}`))

console.log('person4show ticket')
console.log('person5:show ticket')