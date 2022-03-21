import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const blogData: Prisma.BlogCreateInput[] = [
  {
    name: 'blog1',
    slug: 'blog1',
  },
  {
    name: 'blog2',
    slug: 'blog2',
  },
  {
    name: 'blog3',
    slug: 'blog3',
  },
]

async function main() {
  console.log('Start seeding ...')
  for (const b of blogData) {
    const blog = await prisma.blog.create({
      data: b,
    })
    console.log(`create blog with id: ${blog.id}`)
  }
  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
