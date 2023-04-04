var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  MakeDancer.prototype.setPosition.call(this);
  MakeDancer.prototype.step.call(this);
}


MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  var randomLeft = function () {return Math.floor(Math.random() * 1200)};
  var randomTop = function () {return Math.floor(Math.random() * 600)};
  var randomRGB = function () {return Math.floor(Math.random() * 256)}

  var randomizedColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
  styleSettings = {
    border:'10px solid ' + randomizedColor,
  };
  this.$node.css(styleSettings);
  this.$node.toggle();
}




// ***************************** OLD CODE *******************************************

// var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
// };