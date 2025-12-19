import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";
import { hash } from "@/lib/encrypt";

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined in the environment");
  }

  console.log("Seeding with connection string length:", databaseUrl.length);

  const [{ Pool }, { PrismaPg }] = await Promise.all([
    import("pg"),
    import("@prisma/adapter-pg"),
  ]);

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    const users = [];
    for (let i = 0; i < sampleData.users.length; i++) {
      users.push({
        ...sampleData.users[i],
        password: await hash(sampleData.users[i].password),
      });
      console.log(
        sampleData.users[i].password,
        await hash(sampleData.users[i].password)
      );
    }

    await prisma.user.createMany({ data: users });
    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main().catch(console.error);
