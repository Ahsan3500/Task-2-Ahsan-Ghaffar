# API Design Notes — Getaway Travels API

This covers the planning behind the backend, following the REST principles taught in the course material (IPO model, RESTful naming, status codes).

## Goal

Build a simple backend API to handle the Getaway Travels application logic — specifically tour packages and contact/booking submissions.

## Endpoints Planned

Followed the rule: resources are nouns, methods are verbs.

- GET /api/packages
- GET /api/packages/:id
- GET /api/contacts
- POST /api/contacts

Avoided naming like `/getPackages` or `/createContact` — kept everything noun-based with HTTP methods doing the verb work.

## Data Flow (IPO Model)

- Input: JSON sent from frontend (or Postman during testing)
- Process: validation, then either filtering (GET) or pushing to in-memory array (POST)
- Output: JSON response with appropriate status code

## Validation ("Gatekeeper Rule")

Server never trusts incoming data:
- Checks all required fields are present
- Checks email contains "@"
- Returns 400 with a clear error message if validation fails

## Status Codes Used

- 200 — successful GET
- 201 — successful POST (resource created)
- 400 — bad request (missing/invalid fields)
- 404 — resource not found (e.g. invalid package id)

## What's Not Included Yet

- No database — using in-memory arrays, so data resets when the server restarts
- No authentication — not required for this project's scope
- Frontend isn't connected to this API yet — tested only through Postman so far

## Next Steps

- Connect the React contact form (Project 1) to actually call this API
- Add a real database (MongoDB) to persist data
- Add basic error-handling middleware
