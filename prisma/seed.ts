// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.busType.createMany({
    data: [
      { busTypeName: 'Open Air Party Bus', capacity: 30, description: 'Great for outdoor fun and city tours' },
      { busTypeName: '28 Passenger Party Bus', capacity: 28, description: 'Ideal for medium-sized parties' },
      { busTypeName: '55 Passenger Party Bus', capacity: 55, description: 'Perfect for big groups and events' },
    ],
    skipDuplicates: true,
  })

  console.log('✅ Bus types seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })