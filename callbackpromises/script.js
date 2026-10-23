const callback = (arg,fn) => {
    console.log(arg);
    fn();
}

const fn = () => {
    console.log("hello world");
}
const loadscript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("harry",fn);
    document.head.appendChild(sc);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);

