$(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 150);
    setTimeout(function() {
      $('.cursor')
        .eq(2)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
    setTimeout(function() {
      $('.cursor')
        .eq(3)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 50);
  })
  // cursor

  $(document).ready(function(){
    $("#runner").click(function(){
      var div = $("#runner");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '800px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "fast");
      div.animate({width: '100px', opacity: '0.8'}, "fast");
    });
  });
  // animation