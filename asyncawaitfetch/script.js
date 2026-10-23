/*function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("455")
        },3500);
    })
}
console.log("loading modules")
console.log("do something else")
console.log("load data")
let  data=getData()
console.log(data)

console.log("process data")
//agr hum chahhte hai ki neecha ka code chle bina bole tho isko .then ke andar daal do ki jab value aaye tab chle 
data.then((v)=>{
   console.log("process data v aaya")
})
//ab yha se async jh hm jhte hai promise ke neeche wala excute na ho
async function main(params) {
    console.log("loading modules")
    console.log("do something else")
    console.log("load data")
    let  data=await getData()
    console.log(data)
    console.log("process data")
    console.log("process data v aaya")
}*/

//2part fetch api

async function getData(){
  /*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json)) */
  //isko asyn await me convert kr re hai

  let x= await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data=await x.json()
  console.log("fetched data:", data)
  
  
}
 async function main() {
    console.log("loading modules")
    console.log("do something else")
    console.log("load data")
    let  data=await getData()
    console.log("main received data:", data)
    console.log("process data")
    console.log("process data v aaya")
}

main()
async function postdata(){
    let x= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:'new post',
            body:'new post body',
            userId:3
        })
    })
    let data=await x.json()
    console.log("posted datadkjdjdjjkdj:", data)
}
postdata()