import { Test, TestingModule } from '@nestjs/testing'
import { BlogService } from './blog.service'
import { PrismaService } from '../prisma.service'

describe('BlogService', () => {
  let service: BlogService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService, PrismaService],
    }).compile()

    service = module.get<BlogService>(BlogService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
