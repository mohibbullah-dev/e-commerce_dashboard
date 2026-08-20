# CRA &rarr vite adaptation.

used vite instead of cra (create react app) because cra is now deprecated and in the other hand vite is faster dev server startup (vai esbuild) and instant HMR (hot module replacemnt) even as project scales.

## 1. Project Initialization.

- `npx create-react-app my-app` &rarr `npm create vite@latest my-app`.

## 2. File Extensions

- `.js` &rarr `.jsx` is required (vite build error).
- `public/index.html` &rarr `index.html` in root folder (vite convention).

## 4. Environment Variables

- `REACT_API_URL` access `process.env.REACT_API_URL` &rarr `VITE_API_URL` access `import.meta.env.VITE_API_URL`.

## 5. Dev server command.

- `npm start` &rarr `npm run dev`.
