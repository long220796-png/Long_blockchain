# Copilot Instructions for charity-app

## Project Overview
- This is a Node.js/Express web application for managing charity donations.
- The main app is located in `charity-app/charity-app/`.
- Data models (e.g., `Donation.js`) are in `charity-app/charity-app/models/`.
- Views use EJS templates, found in `charity-app/charity-app/views/`.
- Static assets (CSS, images) are in `charity-app/charity-app/public/`.
- Database configuration is in `charity-app/charity-app/config/db.js`.

## Architecture & Data Flow
- Express routes are organized in `charity-app/charity-app/routes/`.
- Controllers (business logic) are in `charity-app/charity-app/controllers/`.
- Models define MongoDB schemas using Mongoose.
- Data flows: HTTP request → route → controller → model → database → view response.

## Developer Workflows
- **Start app:**
  - Run `npm start` from `charity-app/charity-app/`.
- **Install dependencies:**
  - Run `npm install` in both `charity-app/` and `charity-app/charity-app/` if needed.
- **Debugging:**
  - Use `console.log` in controllers/models for quick inspection.
- **Environment:**
  - Database config is in `config/db.js`. Update connection string as needed.

## Project-Specific Patterns
- Follows MVC: routes/controllers/models/views are separated.
- EJS is used for templating; pass data via controller to view.
- Mongoose is used for MongoDB integration.
- CSS is in a single file: `public/styles.css`.
- No custom test or build scripts detected; use standard npm workflows.

## Integration Points
- MongoDB via Mongoose (`models/Donation.js`).
- Express for routing and middleware.
- EJS for server-side rendering.

## Conventions
- Route files should only handle routing, not business logic.
- Controllers handle all business logic and data manipulation.
- Models only define data schemas and interact with the database.
- Views should not contain business logic.

## Key Files & Directories
- `charity-app/charity-app/index.js`: Main Express app entry point.
- `charity-app/charity-app/models/Donation.js`: Example data model.
- `charity-app/charity-app/config/db.js`: Database connection setup.
- `charity-app/charity-app/views/`: EJS templates.
- `charity-app/charity-app/public/styles.css`: Main stylesheet.

---

**If any section is unclear or missing, please provide feedback so this guide can be improved.**
