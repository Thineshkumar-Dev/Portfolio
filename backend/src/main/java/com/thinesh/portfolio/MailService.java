package com.thinesh.portfolio;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.mail.to}")
    private String destination;

    @Value("${spring.mail.username}")
    private String sender;

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMail(ContactRequest request) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(sender);
        message.setTo(destination);
        message.setReplyTo(request.getEmail());
        message.setSubject("Portfolio Contact — " + request.getName());

        message.setText(
                "New message from your portfolio\n\n" +
                "Name: " + request.getName() + "\n" +
                "Email: " + request.getEmail() + "\n\n" +
                "Message:\n" +
                request.getMessage()
        );

        mailSender.send(message);
    }
}