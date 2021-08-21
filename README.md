# Next.js Multi-Zones

- All pages should be unique across zones. For example, the main app should not have a `pages/login.tsx` page.
- The main app includes the `rewrites` within its `next.config.json` which maps to all other apps
- The secondary zones set `basePath` to their own main route (login sets to `/login`) so that generated pages and assets are within the respective subfolder.
