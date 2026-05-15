import { PrismaClient, Role } from '../generated';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create demo shop
  const shop = await prisma.shop.upsert({
    where: { id: 'demo-shop-001' },
    update: {},
    create: {
      id: 'demo-shop-001',
      name: 'Oxilo Tailor Shop',
      phone: '+91-9876543210',
      address: '123 Main Street, Kozhikode, Kerala',
      timezone: 'Asia/Kolkata',
      currency: 'INR',
      googleReviewLink: 'https://g.page/r/your-review-link',
    },
  });

  // Create owner user
  const passwordHash = await bcrypt.hash('admin123', 12);
  const owner = await prisma.user.upsert({
    where: { email: 'owner@oxilo.in' },
    update: {},
    create: {
      shopId: shop.id,
      name: 'Shop Owner',
      email: 'owner@oxilo.in',
      passwordHash,
      role: Role.OWNER,
    },
  });

  // Create reception staff
  await prisma.user.upsert({
    where: { email: 'reception@oxilo.in' },
    update: {},
    create: {
      shopId: shop.id,
      name: 'Receptionist',
      email: 'reception@oxilo.in',
      passwordHash: await bcrypt.hash('reception123', 12),
      role: Role.RECEPTION,
    },
  });

  // Seed garment types with base prices
  const garmentTypes = [
    { name: 'Shirt', basePrice: 500 },
    { name: 'Pant', basePrice: 400 },
    { name: 'Blazer', basePrice: 2000 },
    { name: 'Sherwani', basePrice: 3500 },
    { name: 'Suit', basePrice: 4000 },
    { name: 'Blouse', basePrice: 350 },
    { name: 'Churidar', basePrice: 600 },
    { name: 'Frock', basePrice: 700 },
    { name: 'Gown', basePrice: 2500 },
    { name: 'School Uniform', basePrice: 400 },
    { name: 'Alteration', basePrice: 100 },
  ];

  for (const gt of garmentTypes) {
    await prisma.garmentType.create({
      data: { shopId: shop.id, name: gt.name, basePrice: gt.basePrice },
    });
  }

  // Seed global pricing add-ons
  const addOns = [
    { name: 'Embroidery', extraCost: 200 },
    { name: 'Lining', extraCost: 150 },
    { name: 'Hidden Pocket', extraCost: 50 },
    { name: 'Rush Delivery', extraCost: 300 },
    { name: 'Custom Buttons', extraCost: 80 },
  ];

  for (const addon of addOns) {
    await prisma.pricingRule.create({
      data: { shopId: shop.id, ...addon },
    });
  }

  console.log('✅ Seed complete!');
  console.log(`   Shop: ${shop.name}`);
  console.log(`   Owner login: owner@oxilo.in / admin123`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
