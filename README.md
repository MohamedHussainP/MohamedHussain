# Mohamed Hussain P — Portfolio Website

A responsive personal portfolio built with React, TypeScript and Vite. The design uses a dark, near-black theme with a teal accent and responsive layouts for mobile, tablet and desktop.

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

Update the profile, contact details, experience and skills there. Keep career claims grounded in verified work history.

### Add your resume

1. Export your resume as a PDF.
2. Copy it to `public/resume.pdf`.
3. In `src/data/portfolio.ts`, set `resumePath: '/resume.pdf'`.
4. Add a Resume link/button in the header or hero if you want visitors to download it. The current design intentionally does not show a resume link until a real file is supplied.

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

- Add a PDF resume if you want to offer one for download.
- Verify public contact details and career/project descriptions before publishing.
- Replace the default site URL/metadata if you connect a custom domain.
- Test the navigation and layout on a phone and desktop.

## Project structure

```text
mohamed-hussain-portfolio/
├── public/
│   └── favicon.svg
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
