const { PrismaClient } = require('../../packages/database/generated');
const prisma = new PrismaClient();

async function test() {
  try {
    const res = await prisma.garmentType.findMany();
    console.log("Success:", JSON.stringify(res));
  } catch (e) {
    console.error('ERROR:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}
test();
