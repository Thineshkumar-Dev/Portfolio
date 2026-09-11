# Thineshkumar R — Final Portfolio

## Final UX

Separate routes with animated page transitions:

- `/`
- `/about`
- `/skills`
- `/experience`
- `/projects`
- `/projects/trade-innovation-plus`
- `/projects/ezbuild`
- `/contact`

The route changes while the new page animates into the viewport, creating the effect of one page overriding the previous page.

## Design

- Warm cream / off-white base
- Clean Manrope typography
- DM Mono labels
- Minimal black UI
- Neon-green accent
- Large project-name background typography
- No separate academic page
- Experience page is a milestone timeline
- Timeline visually goes from CURRENT at the top down to SSLC at the bottom
- Home hero says `COMMIT / BUILD / DEPLOY`
- Desktop name stays on one line
- Project detail pages use cinematic dark backgrounds

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_BASE_URL` if the backend is not on localhost:8080.

## Backend

Java 8 + Spring Boot 2.7.

```bash
cd backend
mvn spring-boot:run
```

Set:

```text
PORTFOLIO_MAIL_USERNAME
PORTFOLIO_MAIL_APP_PASSWORD
PORTFOLIO_MAIL_TO
```

The contact form calls:

```text
POST /api/contact
```

Flow:

```text
Portfolio
   ↓
React contact form
   ↓
Spring Boot
   ↓
Gmail SMTP
   ↓
Configured mailbox
```

## Resume

The actual supplied resume is placed at:

```text
frontend/public/resume.pdf
```
