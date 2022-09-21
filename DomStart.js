const Ul = (document.querySelector('.items'));

Ul.firstElementChild.textContent = 'Hello';


Ul.firstElementChild.style.color = 'green';

Ul.children[1].style.color = 'yellow';
  



const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector('#my-form').style.background = '#ccc'
;
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    
    document.querySelector('#my-form').style.background = '#ccc'
    ;
    document.querySelector('body').classList.add('blue');

});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    
    document.querySelector('body').classList.add('dark');
});



const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please Enter all fields';
        setTimeout(() => msg.remove, 3000);
    } else {
        console.log('success');
    }
}