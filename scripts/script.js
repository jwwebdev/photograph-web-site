$('#btn').on('click', function() {
    const ourwork = $('#ourwork').position().top;
  
    $('html, body').animate(
      {
        scrollTop: ourwork
      },
      900
    );
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}