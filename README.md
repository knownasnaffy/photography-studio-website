<img width="1920" height="1080" alt="Screenshot-20260511-190242" src="https://github.com/user-attachments/assets/214edfc6-c258-4680-9aaa-2491892c73d8" />


# Photography Studio Website

A modern photography portfolio and studio website built with React, TypeScript, Vite, and Tailwind CSS.  
It includes a cinematic landing page, gallery and project pages, contact flow, and legal pages.

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+ (10+ recommended)

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
The image ships Bun, so you can use either Bun (`bun install`, `bun run dev`) or npm (`npm install`, `npm run dev`) inside the container:

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

  <img width="1920" height="4222" alt="Homepage" src="https://github.com/user-attachments/assets/88f4d0d0-318f-4b07-a1fc-76119ab8a37c" />
  <br/>
  <img width="1920" height="2048" alt="Gallery" src="https://github.com/user-attachments/assets/dbce4c82-a695-4071-ab7e-35d35bf7d250" />
  <br/>
  <img width="1920" height="4005" alt="image" src="https://github.com/user-attachments/assets/a02f1879-ce26-4f72-be88-d2ddc6801779" />
  <br/>
  <img width="1920" height="1364" alt="Contact" src="https://github.com/user-attachments/assets/91d54cbd-ba12-42ca-b045-26570b1e97b1" />
</details>
