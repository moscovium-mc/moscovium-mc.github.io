# moscovium-mc.github.io

My GitHub page, security blog and insights — built with [Next.js](https://nextjs.org), [MDX](https://mdxjs.com), and [Tailwind CSS](https://tailwindcss.com), deployed to [GitHub Pages](https://pages.github.com).

## Pages

- **Home** — bio, latest posts, and links
- **Blog** (`/n`) — security research and write-ups
- **Books** — bookshelf and reviews
- **Publications** — security research publications
- **Repositories** — open-source projects
- **Events** — conferences and security events
- **Donate** — support the work

## Running Locally

Requires Node.js v18.17+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

This site is statically exported (`output: 'export'`) and deployed to GitHub Pages via the [GitHub Actions workflow](.github/workflows/deploy.yml) on every push to `main`.
