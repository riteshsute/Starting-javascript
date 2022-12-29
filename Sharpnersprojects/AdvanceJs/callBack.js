function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener('DOMContentLoaded', function xyz() {
    console.log('Dom Has Loaded');
    });
    }

    attachEventListeners();


console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 1000)

console.log('d')