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
  var colors = ['blue', 'green', 'yellow', 'purple', 'aqua', 'chartreuse', 'coral', 'darkorchid', 'greenyellow', 'lime', 'gold'];

  var randomColor = function () {return Math.floor(Math.random() * 11)};

  var randomLeft = function () {return Math.floor(Math.random() * 1200)};
  var randomTop = function () {return Math.floor(Math.random() * 600)};
  var randomRGB = function () {return Math.floor(Math.random() * 256)}

  var randomizedColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
  styleSettings = {
    border:'10px solid ' + randomizedColor,
  };
  this.$node.css(styleSettings);
  var rand = Math.random();

  if (rand > .5) {
    this.$node.animate({left: $("body").width() * Math.random()});
  } else {
    this.$node.animate({top: $("body").height() * Math.random()});
  }
  // if (this.rand > .5) {
  //   this.$node.animate({left: randomLeft()});
  //  } else {
  //   this.$node.animate({top: randomTop()});
  //  }
}
