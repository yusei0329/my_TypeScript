type Engineer = {
  name: string;
  role: string;

}
type Blogger = {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const quill: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 100
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string | Number) {
  if(typeof x === 'string') {
    return x.toUpperCase();
  } else {
    return '';
  }
}
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadeWorker: NomadWorker) {
  console.log(nomadeWorker.name);
  if ('role' in nomadeWorker) {
    console.log(nomadeWorker.role);
  }
}

class Dog {
  speak() {
    console.log('bow-wow');
  }
}
class Bird {
  speak() {
    console.log('lll');
  }
  fly() {
    console.log('fultter');
  }
}