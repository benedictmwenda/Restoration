$(document).ready(function() {
    // Handle form submission
    $('#contact_form').on('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
  
      // Clear any previous messages
      $('.returnmessage').hide();
      $('.empty_notice').hide();
  
      // Get form field values
      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var phone = $('#phone').val().trim();
      var message = $('#message').val().trim();
  
      // Validation
      if (name === "" || email === "" || message === "") {
        // If required fields are empty, show an error message
        $('.empty_notice').fadeIn();
        return false;
      }
  
      // Perform AJAX request
      var formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };
  
      $.ajax({
        url: 'https://formspree.io/f/xqaegrzw', // PHP file to handle form submission
        type: 'POST',
        data: formData,
        success: function(response) {
          // Display success message
          $('.returnmessage').text('Your message has been received, We will contact you soon.').fadeIn();
          $('#contact_form')[0].reset(); // Reset form after successful submission
        },
        error: function() {
          // Display error message
          $('.returnmessage').text('Something went wrong. Please try again later.').fadeIn();
        }
      });
    });
  });
  