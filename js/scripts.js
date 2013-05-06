    $(document).ready(function() { // when the page has been rendered...

      $(location.hash).addClass('target'); //add the class of 'target' to the newly selected product

      $('section').on('click', 'article', function() { //when an article is clicked...
        $('.target').removeClass('target'); //remove the class of 'target' from the previously selected product
        $(this).addClass('target'); //add the class of 'target' to the newly selected product
      });
    });