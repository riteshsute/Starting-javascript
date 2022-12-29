console.log('person1: Shows ticket');
console.log('person2: Shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopCorn =  new Promise((resolve, reject) => resolve(`Popcorn`));
    const addButter =  new Promise((resolve, reject) => resolve(`Butter`));
    const getColdDrinks  =  new Promise((resolve, reject) => resolve(`coldrinks`));

    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: i want popcorn');

    let popcorn = await getPopCorn


    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i want Butter on Popcorn');

    let butter = await addButter

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');

    let colddrink = await getColdDrinks
    console.log(`wife : yes! i want some ${colddrink}`);
    console.log(`husband: here is the ${colddrink}`)
    console.log(`wife: lets go we are getting late`)
    console.log(`huband: thanks for the reminder`)
    return ticket;
};

preMovie().then((m) => console.log(`Person3: shows ${m}`))
        

console.log('person4: Shows ticket');
console.log('person5: Shows ticket');