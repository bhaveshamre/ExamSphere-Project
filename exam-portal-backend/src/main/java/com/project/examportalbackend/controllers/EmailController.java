package com.project.examportalbackend.controllers;
import com.project.examportalbackend.models.EmailForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
public class EmailController {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailForm emailForm) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("ruchikasgaidhani@gmail.com"); // Change to your recipient email address
        message.setSubject("New Contact Form Submission");
        message.setText("Name: " + emailForm.getName() + "\nEmail: " + emailForm.getEmail() + "\nMessage: " + emailForm.getMessage());

        mailSender.send(message);

        return "Email sent successfully!";
    }
}
