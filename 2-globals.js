//* GLOBALS - NO WINDOW(cause there is no browser ofc) !!!
//*  __dirname - path to current directory.
//*  __filename - file name.
//*  require - function to use modules (CommonJS).
//*  process - info about env where the program is being executed.


console.log(__dirname)
console.log(__filename)

setInterval(()=>{
    console.log('hello world');
},1000)