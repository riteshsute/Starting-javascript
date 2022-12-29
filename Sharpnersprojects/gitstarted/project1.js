class Queue {
    constructor() {
        this.queue = [];
        this.minpos =0;
        this.maxpos =0;
        }

    push(val) {
        this.queue.push(val);
        this.maxpos = this.maxpos + 1;
    }

    displayQuue() {
    console.log('quee>>', this.queue)
    console.log('minpos', this.minpos)
    console.log('maxpos', this.maxpos)
    }
    
    pop() {
        if(this.minpos < this.maxpos){
        // const valueToPop = this.queue[this.minpos];
        this.queue[this.minpos] = undefined;
        this.minpos = this.minpos + 1;
        // return valueToPop
        } else {
        console.log('array is empty')
        }
    }
}
    const queuel = new Queue()
    queuel.displayQuue()
    queuel.push(1);
    queuel.push(100),
    queuel.pop();
    queuel.displayQuue()
    queuel.pop();
    queuel.displayQuue()
    queuel.pop();
