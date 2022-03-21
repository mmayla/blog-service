import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { FindAllBlogInput } from './dto/find-all-blog.input'
import { PaginationInput } from './dto/pagination.input'

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

  findAll(
    findAllBlogInput?: FindAllBlogInput,
    paginationInput: PaginationInput = {
      limit: 10,
      skip: 0,
    },
  ) {
    return this.prismaService.blog.findMany({
      where: {
        id: findAllBlogInput?.id,
        slug: findAllBlogInput?.slug,
      },
      take: paginationInput.limit,
      skip: paginationInput.skip,
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
