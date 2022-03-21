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

const postData: Prisma.PostCreateInput[] = [
  {
    title: 'post1',
    content: 'post1 content',
  },
  {
    title: 'post2',
    content: 'post2 content',
  },
  {
    title: 'post3',
    content: 'post3 content',
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

  for (const p of postData) {
    const blog = await prisma.post.create({
      data: p,
    })
    console.log(`create post with id: ${blog.id}`)
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
