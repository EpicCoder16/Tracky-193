# Tracky

Tracky is a web app for keeping track of internship applications and the next steps that are easy to forget.

## Project Goal

When I apply to several internships, I end up with job links, application dates, and follow-up notes in different places. I want one place where I can see what I’ve applied to, where each application stands, and what I need to do next.

## MVP

- Sign in and view my own applications.
- Add, edit, and delete applications with a company, role, job link, status, and optional date applied. The date added is recorded automatically.
- Add a next-step note and reminder date to an application.
- See upcoming and overdue reminders when I open the app.
- Save applications in Cloud Firestore so they’re available when I sign in again.

## Tech Stack

- **Frontend:** HTML, CSS, and JavaScript
- **Sign-in:** Firebase Authentication
- **Data storage:** Cloud Firestore
- **Dates and reminders:** HTML date inputs and JavaScript date handling

## Future Plans

- Sort and filter applications by status or date, and show summary counts
- Add browser notifications for reminders
- Export applications to a CSV file
- Use AI to suggest application details from a pasted job posting