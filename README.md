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
npx prisma migrate dev --name add_user_based_tables
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

## Commond Code Snippets

```bash
#Refresh all data set.
npx tsx ./db/seed

```
