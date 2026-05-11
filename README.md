# Photography Studio Website

A modern photography portfolio and studio website built with React, TypeScript, Vite, and Tailwind CSS.  
It includes a cinematic landing page, gallery and project pages, contact flow, and legal pages.

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm 10+ (recommended)

## Usage Guidelines

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy the example file and set your values:

```bash
cp .env.example .env.local
```

At minimum, set:

- `GEMINI_API_KEY`
- `APP_URL`

### 3) Run locally

```bash
npm run dev
```

The app runs on `http://localhost:3000` (configured via the `dev` script).

### 4) Optional: run in a preconfigured Podman container

You can start a safe containerized shell and then run the project commands from inside it.
The image ships Bun, but you can still run the same npm workflow (`npm install`, `npm run dev`) inside the container:

```bash
podman run -it --rm --network host -v $(pwd):/app:Z -v bun_cache:/root/.bun -w /app oven/bun:latest bash
```

Then continue normally (for example `npm install` and `npm run dev`).
If your shell does not support `$(pwd)`, replace it with your shell equivalent path expression.

### 5) Build for production

```bash
npm run build
```

## Screenshots

<details>
  <summary>Click to expand screenshots</summary>

  <br />
  Replace these placeholders with your final screenshots when available.

  ![Homepage Screenshot Placeholder](docs/screenshots/homepage-placeholder.png)
  ![Gallery Screenshot Placeholder](docs/screenshots/gallery-placeholder.png)
  ![Project Details Screenshot Placeholder](docs/screenshots/project-details-placeholder.png)

</details>
