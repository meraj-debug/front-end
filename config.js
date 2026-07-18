/* =============================================================================
   Inframantra CRM — frontend runtime configuration
   -----------------------------------------------------------------------------
   This is the frontend's ".env". It is plain JS (not a bundler .env) because the
   app ships as a static HTML file with no build step. Loaded before the app, so
   whatever is set here wins over the <meta> defaults in index.html.

   Netlify: edit this file per environment, or generate it in a build command:
     echo "window.CRM_API_BASE='$API_URL';" > config.js
========================================================================== */

// Base URL of the API. No trailing slash.
window.CRM_API_BASE = 'https://infra-crm.onrender.com';

// Tenant bucket for the stored snapshot. Leave as 'default' for a single CRM.
window.CRM_WORKSPACE = 'default';

// Shared key sent as `x-workspace-key`. MUST match WORKSPACE_KEY on the server.
// NOTE: anything here is visible to anyone who opens the page — it keeps random
// internet traffic out of your data, it is not a substitute for per-user auth.
window.CRM_WORKSPACE_KEY = '';

/* Local development:
   window.CRM_API_BASE = 'http://localhost:4000';
*/
