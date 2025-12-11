This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# Application using PostGre SQL with prisma so need to run prisma init and
npx prisma generate
npx prisma migrate dev name --init || npx prisma migrate reset --force
npx tsx ./db/seed.ts

#for new environment
npm install -g vercel

#PostGreSQL with vercel via Neon could be found on
https://vercel.com/rattanakungs-projects/~/integrations/neon/icfg_pR6dACqmKZwLv1Jek28yhB1i/resources/storage/store_SNECGExQh9ezVV9H/guides

#Or simply starting with:
npm i @neondatabase/serverless @prisma/adapter-neon ws
npm i -D @types/ws bufferutil

#then rerun 
npx prisma generate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
