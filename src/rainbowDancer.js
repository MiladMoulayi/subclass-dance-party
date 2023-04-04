var MakeRainbowDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  MakeDancer.prototype.setPosition.call(this);
  MakeDancer.prototype.step.call(this);
}


MakeRainbowDancer.prototype = Object.create(MakeDancer.prototype);
MakeRainbowDancer.prototype.constructor = MakeRainbowDancer;

MakeRainbowDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.toggle();
  var colors = ['blue', 'green', 'yellow', 'purple'];

  var random = function () {return Math.floor(Math.random() * 4)};
  styleSettings = {
    border:'10px solid ' + colors[random()],
  };
  this.$node.css(styleSettings);
}
