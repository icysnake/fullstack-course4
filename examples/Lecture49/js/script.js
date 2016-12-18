// // Object literals and "this"
// // var literalCircle = {
// //   radius: 10,

// //   getArea: function () {
// //     var self = this;
// //     console.log(this);

// //     var increaseRadius = function () {
// //       self.radius = 20;
// //     };
// //     increaseRadius();
// //     console.log(this.radius);

// //     return Math.PI * Math.pow(this.radius, 2);
// //   }
// // };

// // console.log(literalCircle.getArea());

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function() {
//   console.log(this.name + " likes barking! Bark!");
//   console.log(this);
// };


// var max = new Dog("Max");
// var min = new Dog("Buddy");

// max.bark();
// min.bark();

// (function iife (iifearg) {
//   var results = 5;
//   this.results = results + iifearg;
//   console.log(0 + " , " + this.results);
//   console.log(this)
// })(23)

(function(window) {
var obj = {};
obj.dreamOn = function () {
 console.log("I want to see the global scope! Let me out!");
};

window.doer = obj;

})(window);

doer.dreamOn();