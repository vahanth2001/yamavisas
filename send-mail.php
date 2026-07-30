<?php

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);
    exit;
}

function clean($data) {
    return htmlspecialchars(trim($data));
}

$firstName = clean($_POST['firstName'] ?? '');
$lastName = clean($_POST['lastName'] ?? '');
$email = clean($_POST['email'] ?? '');
$phone = clean($_POST['phone'] ?? '');
$service = clean($_POST['service'] ?? '');
$nationality = clean($_POST['nationality'] ?? '');
$visaStatus = clean($_POST['visaStatus'] ?? '');
$expiryDate = clean($_POST['expiryDate'] ?? '');
$message = clean($_POST['message'] ?? '');

if (
    empty($firstName) ||
    empty($lastName) ||
    empty($email) ||
    empty($service) ||
    empty($message)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please complete all required fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit;
}

$to = "guna2001work@gmail.com";

$subject = "New Consultation Request - Yama Visas";

$emailBody = "
New consultation enquiry received.

-------------------------------------

First Name:
$firstName

Last Name:
$lastName

Email:
$email

Telephone:
$phone

Service Required:
$service

Nationality:
$nationality

Current Visa Status:
$visaStatus

Visa Expiry Date:
$expiryDate

Message:

$message

-------------------------------------
";

$headers = "From: Yama Visas Website <no-reply@yamavisas.co.uk>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $emailBody, $headers)) {

    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your consultation request has been sent."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Unable to send your enquiry. Please try again later."
    ]);

}