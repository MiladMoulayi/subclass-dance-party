var MakeMJ = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img src="images/mj.gif">');
  this.$node.css({border: '0px'})
  MakeDancer.prototype.setPosition.call(this);
  MakeDancer.prototype.step.call(this);
}


MakeMJ.prototype = Object.create(MakeDancer.prototype);
MakeMJ.prototype.constructor = MakeMJ;

MakeMJ.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  var rand = Math.random();

  if (rand > .5) {
    this.$node.animate({left: $("body").width() * Math.random()});
  } else {
    this.$node.animate({top: $("body").height() * Math.random()});
  }
}
