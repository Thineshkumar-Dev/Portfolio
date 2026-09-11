package com.thinesh.portfolio;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {

    private final MailService mailService;

    public ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> sendMessage(
            @Valid @RequestBody ContactRequest request) {

        mailService.sendContactMail(request);

        return ResponseEntity.ok(
                Collections.<String, Object>singletonMap("success", true)
        );
    }
}