const person = {
    firstName: 'rakesh',
    lastName: 'praveen',
    age: 24,
    Hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'indira gandhi road',
        contry: 'india',
        state: 'maharashtra'
    }

}


    const { age, address: {state}} = person;
    console.log(age, street)


    const person = {
        firstName: 'rakesh',
        lastName: 'praveen',
        age: 24,
        Hobbies: ['music', 'movies', 'sports'],
        address: {
            street: 'indira gandhi road',
            contry: 'india',
            state: 'maharashtra'
        }
    
    }
    
    
        const { age, address: {state}} = person;
        console.log(age, state)
    
    
    
    
    const todos = [
        {
            id: 1,
            text: 'take out the trash',
            isComplete: true
        },
        {
            id: 2,
            text: 'meeting with boss',
            isComplete: true
        },
        {
            id: 3,
            text: 'dentist appo',
            isComplete: false
        }
    ]
    
    for(let i=0; i <  todos.length;i++) {
        console.log(todos[i].id);
    }
    
    let i = 0;
    while(i < todos.length) {
        console.log(todos[i].id);
        i++;
    
    }