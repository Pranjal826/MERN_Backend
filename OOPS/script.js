document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    
    // Get the value of the input element
    const name = nameInput.value;
    
    class Person {
        constructor(name) {
            this.name = name;
        }
    
        introduceSelf() {
            console.log(`Hi! I'm ${this.name}`);
        }
    }
    
    const giles = new Person(name);
    
    giles.introduceSelf(); // This should work now
});
