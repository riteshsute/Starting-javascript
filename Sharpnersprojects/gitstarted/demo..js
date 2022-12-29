async function fun1(){
    console.log('a');
    console.log('b');
    const message = await new Promise((res, rej) => {
        setTimeout(() =>( res('c')), 1000)
    }) 
    console.log(message)

    const message2 = await new Promise((res, rej) => {
        setTimeout(() => res('d'), 0)
    })
    console.log(message2)
    console.log('e');
    }



fun1()
    
    


