# Getaway Travels API

Backend REST API built for the Getaway Travels website, developed as Project 2 for the DecodeLabs Full Stack Development internship.

## About

A simple Express backend that serves tour package data and handles contact/booking form submissions for the Getaway Travels frontend (Project 1).

## Tech Stack

- Node.js
- Express.js
- CORS
- nodemon (dev only)

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Health check |
| GET | /api/packages | Get all tour packages |
| GET | /api/packages/:id | Get a single package |
| GET | /api/contacts | Get all contact submissions |
| POST | /api/contacts | Submit a new booking/contact form |

## Example — POST /api/contacts

\`\`\`json
{
  "name": "Ali Ahmed",
  "email": "ali@gmail.com",
  "phone": "03001234567",
  "package": "Northern Areas Tour",
  "message": "I want to book for 2 people"
}
\`\`\`

## Validation

- All fields required (name, email, phone, package, message)
- Email must contain "@"
- Returns proper status codes (200, 201, 400, 404)

## Running Locally

\`\`\`bash
cd Project-Decode-API
npm install
npm run dev
\`\`\`

Runs on http://localhost:3001

## Project Structure

\`\`\`
Project-Decode-API/
├── routes/
│   ├── packages.js
│   └── contact.js
├── index.js
└── package.json
\`\`\`

## Notes

Data is stored in memory (arrays), not a database — this was intentional for Project 2 since the focus was on building and testing API endpoints, not data persistence. A database (likely MongoDB) would be the next step.
