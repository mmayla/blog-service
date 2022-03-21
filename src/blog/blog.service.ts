import { Inject, Injectable } from '@nestjs/common'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { PrismaService } from '../prisma.service'
import { Blog } from './entities/blog.entity'

@Injectable()
export class BlogService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createBlogInput: CreateBlogInput) {
    return 'This action adds a new blog'
  }

  findAll() {
    return this.prismaService.blog.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return `This action updates a #${id} blog`
  }

  remove(id: number) {
    return `This action removes a #${id} blog`
  }
}
