# Jamstacky Micro-Frontend 🚇

Proof-of-Concept of how **micro-frontend** would work within a Jamstack Architecture. It provides all performance benefits of a Jamstack applicaiton, together with the granularity of a micro-frontend for larger teams and apps.

## Limitations and pre-requistites 🧐

- All pages should be unique across zones. For example, the main app should not have a `pages/login.tsx` page.
- The main app includes the `rewrites` within its `next.config.json` which maps to all other apps
- The secondary zones set `basePath` to their own main route (login sets to `/login`) so that generated pages and assets are within the respective subfolder.

🌍 [Check it live](https://atila.io/jamstacky-microfrontend)

## Ship them yourself 🐑

To successfully deploy this project, you will need to click this button twice.

1. Set one of the apps as the root (`app/login` or `app/main`)
2. Set all the [environment variables](#environment-variables) for your deploy on that app
3. Repeat step for the other app

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatilafassina%2Fnextjs-multi-zone)

## Running it locally 🛖

1. Clone this repository
2. Add an `.env.local` to each of the apps according to docs below
3. At the root of the repo, run `yarn install`
4. Run `yarn dev`

Both apps will be served, now you can navigate to the main app's server.
Default is [localhost:3001](http://localhost:3001)

## Environment Variables 🔌

You can add `.env` files as described in the [Next.js docs](https://nextjs.org/docs/basic-features/environment-variables)

### app/Main

| dependency     | description                                      |
| -------------- | ------------------------------------------------ |
| `LOGIN_URL`    | the redirect to your login page on the other app |
| `NEXTAUTH_URL` | route to your login page                         |

### app/Login

| dependency             | description                     |
| ---------------------- | ------------------------------- |
| `GITHUB_CLIENT_ID`     | your Github Oauth client id     |
| `GITHUB_CLIENT_SECRET` | your Github Oauth client secret |
| `NEXTAUTH_URL`         | route to your login page        |
| `JWT_SECRET`           | any `string`                    |

## What’s inside? 🧰

| dependency | version |
| ---------- | ------- |
| Next.js    | 11+     |
| React      | 17+     |
| TypeScript | 4+      |
| Next-Auth  | 3+      |
