class Greeter {
  sayHi(name = 'Anonymous') {
    alert('hi');
    console.log(`Hi ${name}!`);
  }
}


var greeter = new Greeter();
greeter.sayHi();