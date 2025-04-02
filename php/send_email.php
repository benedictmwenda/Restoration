<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from POST request
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email
    $to = "https://formspree.io/f/xqaegrzw";  // Replace with your email

    // Set the email subject
    $subject = "New Contact Form Submission";

    // Compose the email message
    $email_body = "You have received a new message from the contact form:\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Message:\n$message\n";

    // Set headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "success"; // Send success response to AJAX
    } else {
        echo "error"; // Send error response to AJAX
    }
} else {
    echo "error"; // In case the request method is not POST
}
?>
