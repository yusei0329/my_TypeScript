class Person {

    constructor(public name: string, protected age: number) { //初期化
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
    }  
}

// let person2: Person;

// const quill =  new Person('Quill', 38);
// quill.incrementAge();
// quill.greeting();

class Teacher extends Person {
    get subject() {
        return 'Music';
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`);
    }  
}

const teacher = new Teacher('niwa', 20, 'Math');
