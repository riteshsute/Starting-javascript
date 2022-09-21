class user { 
    static count = 0
    constructor (userName, email, password) {
        this.userName = userName
        this.emai = email
        this.password = password
        user.count++
    }
    
    printNumberofUser() {
        console.log('Number of users registered = ' + user.count)
    } 

    register() {
        console.log(this.userName+ ' Now registered')
    }

}

const  manish = new user('manish', 'manish@gmail.com', '00000');
const  satish = new user('rohit', 'rohit@gmail.com', '84000');
const kalpesh = new user('kalpesh', 'kalpesh@gmail.com', '98000');


class member extends user {
    constructor(userName, email, password, memberPackage) {
        super(userName, email, password);
        this.memberPackage = memberPackage;
        let todaysDate = new Date();
        const membershipActiveTillYear = todaysDate.getFullYear();
        const membershipActiveTillMonth = todaysDate.getMonth();
        const membershipActiveTillDay = todaysDate.getDay();
        this.membershipActiveTillDate = new Date (
            membershipActiveTillYear,
            membershipActiveTillMonth+ 1,
            membershipActiveTillDay
        );
        }

        renewMembership() {
            const membershipActiveTillYear = this.membershipActiveTillDate.getFullYear();
            const membershipActiveTillMonth = this.membershipActiveTillDate.getMonth();
            const membershipActiveTillDay = this.membershipActiveTillDate.getDay();
            
            if (this.memberPackage === 'standard') {
            this.membershipActiveTillDate = new Date (
                membershipActiveTillYear,
                membershipActiveTillMonth + 1,
                membershipActiveTillDay
            );
            } else if(this.memberPackage === 'yearly') {
                this.membershipActiveTillDate = new Date (
                    membershipActiveTillYear + 1,
                    membershipActiveTillMonth,
                    membershipActiveTillDay
                );
            }
        }

        subscriptionactiveTill() {
            console.log ( this.userName + ` is subscribed to ` + this.memberPackage + ` uptil `+ this.membershipActiveTillDate );
        }
        
        getPackage() {
            console.log (this.userName +' is subscribed to ' + this.memberPackage + ' package');
        }

    }




    const mike = new member('mike','mike@gmail.com','10333', 'standard');
     
    mike.getPackage()
    mike.subscriptionactiveTill()
    mike.renewMembership()
  
