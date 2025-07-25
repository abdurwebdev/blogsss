# MERNBlog: Deploying to Vercel

This guide will help you deploy your MERN (MongoDB, Express, React, Node.js) app to Vercel so everyone can use your app online.

---

## Project Structure

```
MERNBlog/
  client/   # React frontend (Vite)
  server/   # Express backend (API)
```

---

## 1. Prerequisites

- [Vercel account](https://vercel.com/signup)
- [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas) or any MongoDB URI
- [GitHub account](https://github.com/) (recommended for Vercel integration)

---

## 2. Environment Variables

### Backend (`server`)

Create a `.env` file in the `server/` directory with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend (`client`)

Create a `.env` file in the `client/` directory with:

```
VITE_BACKEND_URL=https://your-backend-url.vercel.app/api
```

Replace with your actual backend deployment URL after deploying the backend.

---

## 3. Local Development

### Backend

```bash
cd server
npm install
npm start # or: node server.js
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 4. Deploying to Vercel

### Step 1: Push to GitHub

Push your project to a GitHub repository if you haven't already.

### Step 2: Deploy Backend (Express API)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and import your repo.
2. Set the **Root Directory** to `server`.
3. Set the **Build Command** to `npm install` (or leave blank for Node.js projects).
4. Set the **Output Directory** to `.`
5. Add the environment variables (`MONGO_URI`, `JWT_SECRET`) in the Vercel dashboard under Project Settings > Environment Variables.
6. Deploy.

> **Note:** Vercel is optimized for serverless functions. For persistent Express servers, consider [Vercel's Node.js Serverless Functions](https://vercel.com/docs/functions/serverless-functions/introduction) or use [Render](https://render.com/) / [Railway](https://railway.app/) for traditional Node.js hosting. If you use Vercel, you may need to adapt your Express app to export as a handler (see Vercel docs).

### Step 3: Deploy Frontend (React)

1. In the same Vercel project, add a new deployment for the `client` directory.
2. Set the **Root Directory** to `client`.
3. Set the **Build Command** to `npm run build`.
4. Set the **Output Directory** to `dist`.
5. Add the environment variable `VITE_BACKEND_URL` pointing to your deployed backend API URL.
6. Deploy.

---

## 5. Post-Deployment

- Update your frontend `.env` with the deployed backend URL and redeploy if needed.
- Test your app at the provided Vercel URLs.

---

## 6. Troubleshooting

- **CORS Issues:** Make sure your backend CORS config allows requests from your frontend domain.
- **Environment Variables:** Double-check spelling and values in Vercel dashboard.
- **MongoDB Connection:** Ensure your MongoDB URI is correct and accessible from Vercel.

---

## 7. Useful Links

- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev/guide/deploy.html)
- [Express Docs](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 8. License

MIT
