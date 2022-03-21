import { Inject, Injectable } from '@nestjs/common'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { PrismaService } from '../prisma.service'

@Injectable()
export class BlogService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createBlogInput: CreateBlogInput) {
    return this.prismaService.blog.create({
      data: {
        name: createBlogInput.name,
        slug: createBlogInput.slug,
      },
    })
  }

  findAll() {
    return this.prismaService.blog.findMany()
  }

  findOne(id: number) {
    return this.prismaService.blog.findUnique({
      where: { id },
    })
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return this.prismaService.blog.update({
      where: { id },
      data: {
        name: updateBlogInput.name,
        slug: updateBlogInput.slug,
      },
    })
  }

  remove(id: number) {
    return this.prismaService.blog.delete({
      where: { id },
    })
  }
}
