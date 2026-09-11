# Spring Boot Portfolio Backend

Java 8 + Spring Boot 2.7 backend for the portfolio contact form.

## 1. Gmail setup

Use a Gmail App Password. Do not use your normal Gmail password.

Set environment variables.

### Windows CMD

```cmd
set PORTFOLIO_MAIL_USERNAME=your-gmail@gmail.com
set PORTFOLIO_MAIL_APP_PASSWORD=your-16-character-app-password
set PORTFOLIO_MAIL_TO=thineshkumar.dev@gmail.com
```

### PowerShell

```powershell
$env:PORTFOLIO_MAIL_USERNAME="your-gmail@gmail.com"
$env:PORTFOLIO_MAIL_APP_PASSWORD="your-16-character-app-password"
$env:PORTFOLIO_MAIL_TO="thineshkumar.dev@gmail.com"
```

## 2. Run

```bash
mvn spring-boot:run
```

Health check:

```text
GET http://localhost:8080/api/health
```

Contact endpoint:

```text
POST http://localhost:8080/api/contact
```

JSON:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello Thinesh"
}
```

The visitor email becomes `Reply-To`, so you can reply from your mailbox.

## 3. Production

For production, put SMTP credentials in your hosting provider's secret/environment-variable settings. Never commit them into `application.properties`.
