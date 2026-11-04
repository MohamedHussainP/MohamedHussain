# Mohamed Hussain P — Portfolio Website

A responsive personal portfolio built with React, TypeScript and Vite. The design uses a dark navy theme with cyan-blue accents and responsive layouts for mobile, tablet and desktop.

## 1. Requirements

- Node.js 20.19+ or 22.12+
- npm (included with Node.js)

## 2. Run locally

Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## 3. Personalize your content

Portfolio content is kept in one file:

`src/data/portfolio.ts`

Update the profile, contact details and experience there. Keep career claims grounded in verified work history.

### Resume download

The hero's **Download Resume** button downloads the PDF at `public/resume.pdf`. Replace that file when you update your resume.

## 4. Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## 5. Publish on Vercel

### Option A — Deploy using GitHub (recommended)

1. Create a new repository on GitHub.
2. Upload/push the contents of this project folder to the repository.
3. Sign in to [Vercel](https://vercel.com/) and choose **Add New → Project**.
4. Import your GitHub repository.
5. Keep the detected Vite settings, or use:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Select **Deploy**. Vercel will provide a public URL.

### Option B — Deploy with Vercel CLI

Install and run the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Follow the prompts. For a production deployment, run:

```bash
vercel --prod
```

## 6. Before publishing

- Verify public contact details and career descriptions before publishing.
- Replace the default site URL/metadata if you connect a custom domain.
- Test the navigation and layout on a phone and desktop.

## Project structure

```text
mohamed-hussain-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── data/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```
