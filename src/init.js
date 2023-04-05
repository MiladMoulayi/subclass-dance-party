$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('what did I click on? :', dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.centerLineUpButton').on('click', function(event) {
  // console.log($('.dancer').$node)
  // $('.dancer').$node.step = undefined;
    var styleSettings = {
      left: $("body").width() / 8,
      top: $("body").height() / 2
    }

    var reassign = function () {
      for (var j = 0; j < window.dancers.length; j++) {
        var aDancer = window.dancers[j];
        aDancer.$node.css({
          left: styleSettings.left + j * 100,
          top: styleSettings.top
        });
      }
    };

    for (var i = 0; i < window.dancers.length; i++) {
      var currDancer = window.dancers[i];
      currDancer.stopDancing = true;
    }

    setTimeout(reassign, 1000);

    // var changePosition = function () {
    //   for (var j = 0; j < window.dancers.length; j++) {
    //     var currDancer = window.dancers[j];
    //     currDancer.$node.css(styleSettings);
    //     console.log(currDancer);
    //   }
    // }

    // changePosition();
    // setTimeout(changePosition, 2000);

})
});



