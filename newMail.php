<?php
    // $postdata = file_get_contents("php://input");

    // $request = json_decode($postdata);
    // $dept = $request->name;
    // $status= $request->status;


    $fromEmail = "info@alumrah.co.in"; // replace with my domain
    $toEmail = "nafeesbinaslam005@gmail.com";      // replace with my domain
    
    // $name = $_POST["name"];
    // $email = $_POST["email"];
    // $phone = $_POST["phone"];
    $name = 'Nafees';
    $email = 'pronafees.dev@gmail.com';
    $phone = '7001214053' 
    $subject = 'Delivery Details';
    $message = 'Please find Contact Details';
 
    $emailMessage = array(
        "Hello I'm testing this email service because it doesn't seem to be working right now. Date: ".date(DATE_RFC2822),
        "Name: ".$name,
        "Email: ".$email,
        "Phone: ".$phone,
        "Subject: ".$subject,
        "Message: ".$message
    );
    $emailMessage = implode("\r\n", $emailMessage);
 
    $headers = array("From: ".$fromEmail,
        "Reply-To: ".$fromEmail,
        "X-Mailer: PHP/" . PHP_VERSION
    );
    $headers = implode("\r\n", $headers);
 
    $output = mail($toEmail, "Contact Form test message from website", $emailMessage, $headers, "-f".$fromEmail);
 
    var_dump($output);

?>