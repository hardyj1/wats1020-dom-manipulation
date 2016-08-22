//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
      
      
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.

    // TODO: Create a function to listen for clicks on the "login" button.

  $('#login-form .btn').on('click', function(event){
    //      1. When a user clicks the "login" button, hide the login
    //          form elements on the page.
      $('#login-form').hide();
    //      2. Fill the user's first and last name into `div.user-info`.
    //      (NOTE: You do not have to perform any validation on the data as
    //          a base requirement.)
      $('.user-info').show(); 
    });

    
  $('.view-details').on('click', function(event){
    console.log(event);
    var targetElement = event.target;
    var container = targetElement.parentElement.parentElement;
    $(container).find('.details').each(function(index, el) {
        if ($(el).is(':visible')){
            $(el).fadeOut();
            targetElement.innerText = "View Details";

        } else {
            $(el).fadeIn();
            targetElement.innerText = "Hide Details";
        }
    });
});


// Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    $('.vote').on('click', function(event){
      console.log(event);
      voteCounts.total++;
      var targetElement = event.target;
      //      2. When a button is clicked, look at the `data-vote` attribute to determine
      //          what the user is voting for ("great" or "greatest").

      if ($(targetElement).data('vote') === 'great'){
      //      3. Increment the counter for whichever vote talley is affected.
      voteCounts.great++;
      }

      else {
      //      3. Increment the counter for whichever vote talley is affected.
        voteCounts.greatest++;
      }

      //      4. Determine the respective percentages (out of 100) for each progress bar.
      var greatPercent = (voteCounts.great/voteCounts.total*100);
      var greatestPercent = (voteCounts.greatest/voteCounts.total*100);

      //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
      $('.great-progress').css('width', greatPercent + '%');
      $('.greatest-progress').css('width', greatestPercent + '%');
      console.log(voteCounts.great, voteCounts.greatest, voteCounts.total, greatPercent, greatestPercent);
    })
});