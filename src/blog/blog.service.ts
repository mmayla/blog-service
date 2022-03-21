import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { FindAllBlogInput } from './dto/find-all-blog.input'
import { PaginationArgs } from './dto/pagination.args'

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

  findAll(paginationArgs: PaginationArgs, findAllBlogInput?: FindAllBlogInput) {
    return this.prismaService.blog.findMany({
      where: {
        id: findAllBlogInput?.id,
        slug: findAllBlogInput?.slug,
      },
      take: paginationArgs.limit,
      skip: paginationArgs.skip,
    })
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
