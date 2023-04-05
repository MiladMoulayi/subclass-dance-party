var MakeRainbowDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  MakeDancer.prototype.setPosition.call(this);
  MakeDancer.prototype.step.call(this);
  this.stopDancing = false;
}


MakeRainbowDancer.prototype = Object.create(MakeDancer.prototype);
MakeRainbowDancer.prototype.constructor = MakeRainbowDancer;

MakeRainbowDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);
  if (this.stopDancing === false) {
    var randomLeft = function () {return Math.floor(Math.random() * 1200)};
    var randomTop = function () {return Math.floor(Math.random() * 600)};
    var randomRGB = function () {return Math.floor(Math.random() * 256)};
    var randomSize = function () {return Math.floor(Math.random() * (35) + 5)};

    var randomColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
    styleSettings = {
      border: `10px solid ${randomColor}`,
    };
    this.$node.css(styleSettings);
    var rand = Math.random();
    var x = $("body").width() * Math.random();
    var y = $("body").height() * Math.random();

    this.$node.animate({left: x, top: y});
  } else {
    this.$node.stop(true, true);
  }
  // if (this.rand > .5) {
  //   this.$node.animate({left: randomLeft()});
  //  } else {
  //   this.$node.animate({top: randomTop()});
  //  }
}
