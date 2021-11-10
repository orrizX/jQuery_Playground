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