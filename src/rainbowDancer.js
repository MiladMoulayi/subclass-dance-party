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
      border: `${randomSize()}px solid ${randomColor}`,
    };
    this.$node.css(styleSettings);
    var rand = Math.random();

      if (rand > .5) {
        var posX = $("body").width() * Math.random()
        this.$node.animate({left: posX});
        console.log('posX: ', posX);
      } else {
        var posY = $("body").height() * Math.random()
        this.$node.animate({top: posY});
        console.log('posY: ', posY);
      }
  } else {
    this.$node.stop(true, true);
  }
  // if (this.rand > .5) {
  //   this.$node.animate({left: randomLeft()});
  //  } else {
  //   this.$node.animate({top: randomTop()});
  //  }
}
