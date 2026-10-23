const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}
const debounce=function(fn,d){
let timer=0;
return function(){
clearTimeout(timer);
timer=setTimeout(()=>{
    fn();
},d);
};
};
const betterFunction=debounce(getData,300);
