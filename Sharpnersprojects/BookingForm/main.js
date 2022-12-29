// function localStorage(event) {
//     event.preventDefault();
//     const name = event.target.user;
//     const emailid = event.target.emailId;
//     const phoneNumber = event.target.phonenumber;
//     localStorage.setItem('name', user);
//     localStorage.setItem('email', emailId);
//     localStorage.setItem('phonenumber', phonenumber);
// }

const keyArray = Object.keys(obj)
                keyArray.forEach(key => 
                    console.assertlog(obj[key]));
                    
                localStorage.setItem(obj.email, JSON.stringify(obj));
                showNewUserOnScreen(obj)