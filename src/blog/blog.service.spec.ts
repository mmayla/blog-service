import { Test, TestingModule } from '@nestjs/testing'

import { PrismaService } from '../prisma.service'
import { BlogService } from './blog.service'

describe('BlogService', () => {
  let service: BlogService
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService, PrismaService],
    }).compile()

    service = module.get<BlogService>(BlogService)
    prisma = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get nothing', async () => {
    prisma.blog.findMany = jest.fn().mockReturnValueOnce([
      {
        id: 2,
        name: 'blog2',
        slug: 'blog2',
        posts: [],
      },
    ])

    const blogs = await service.findAll({ limit: 10, skip: 0 })

    expect(blogs.length).toBe(1)
  })
})
