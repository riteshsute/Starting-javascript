
var obj = {
    key1 : "india",
    key2 : "germany",
    key3 : "england"
}

    
// let arrayOfKeys = Object.keys(obj);

Object.keys(obj).forEach( key => {
    console.log(obj[key])
})