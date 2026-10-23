console.log("this is promise");

// let prom1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("timer chla console wala")
//         resolve("hello world reasolve wala")
//     },2000);
// }) 1 phla iske bad koi random number wala
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("hello world reasolve wala error")
    }else{
  setTimeout(()=>{
        console.log("timer chla console wala")
        resolve("hello world reasolve wala")
    },3000);
    }
    
})
let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("hello world reasolve wala error2")
    }else{
  setTimeout(()=>{
        console.log("timer chla console wala2")
        resolve("hello world reasolve wala2")
    },1000);
    }
    
})

// prom1.then((a)=>{
//     console.log(a)
// }) 1 wala agr error aaya tho ye  eeche se catch bhi kro red mark nai bus
// prom1.then((a)=>{
//     console.log(a)
// }).catch((b)=>{
//     console.log(b)
// }
// )2

//ab 3 promise.all jo phle chl jye uska anser 26:00
//ab ye agla wala 2 ke baad wala
let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)

}).catch(error=>{
    console.log(error)
})