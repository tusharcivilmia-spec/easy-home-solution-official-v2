# Easy Home Solution — React + Vite

This is the complete source project. Upload the CONTENTS of this folder to the ROOT of a new GitHub repository (do not upload the ZIP itself and do not place the files inside an extra nested folder).

## Project structure
- `package.json` — dependencies and build scripts
- `index.html` — website entry page
- `src/main.jsx` — React entry point
- `src/App.jsx` — website content and components
- `src/styles.css` — responsive design and styling
- `public/easy-home-logo.jpeg` — supplied Easy Home logo

## Deploy with Cloudflare Pages
1. Create a new GitHub repository and upload all project files/folders so `package.json` is visible on the repository's first page.
2. In Cloudflare Dashboard open Workers & Pages → Create application → Pages → Import an existing Git repository.
3. Select the repository and use:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click Save and Deploy.

Cloudflare installs the dependencies from `package.json` and runs the build. Do not upload `node_modules` or `dist`.

## Before collecting real enquiries
The requirements form is currently a front-end demo: it shows a confirmation but does not send or store submissions. Connect a secure backend/form service before using it with customers. Replace placeholder phone, email and address details in `src/App.jsx`. Replace sample architectural photos with photos you own or have permission to use.
