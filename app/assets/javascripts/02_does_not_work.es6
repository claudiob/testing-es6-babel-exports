export default class AnotherGreeter {
  sayHi(name = 'Anonymous') {
    alert('hi');
    console.log(`Hi ${name}!`);
  }
}


var anotherGreeter = new AnotherGreeter();
anotherGreeter.sayHi();