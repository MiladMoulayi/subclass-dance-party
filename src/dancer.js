// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.stopDancing = false;
  this.timeoutArr = [];
}

MakeDancer.prototype.step = function () {
  if (this.stopDancing === false) {
    var timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
    this.timeoutArr.push(timeout);
  } else {
    for (var i = 0; i < this.timeoutArr.length; i++) {
      clearTimeout(this.timeoutArr[i]);
    }
  }
}

MakeDancer.prototype.setPosition = function() {
  styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
}



// ***************************** OLD CODE *******************************************

// var MakeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };