import { Test, TestingModule } from '@nestjs/testing'
import { BlogResolver } from './blog.resolver'
import { BlogService } from './blog.service'
import { PrismaService } from '../prisma.service'

describe('BlogResolver', () => {
  let resolver: BlogResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogResolver, BlogService, PrismaService],
    }).compile()

    resolver = module.get<BlogResolver>(BlogResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
