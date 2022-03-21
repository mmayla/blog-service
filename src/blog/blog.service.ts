import { Inject, Injectable } from '@nestjs/common'

import { PrismaService } from 'src/prisma.service'
import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { FindBlogInput } from './dto/find-blog.input'

@Injectable()
export class BlogService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createBlogInput: CreateBlogInput) {
    return this.prismaService.blog.create({
      data: {
        name: createBlogInput.name,
        slug: createBlogInput.slug,
        posts: {
          create: createBlogInput.posts,
        },
      },
      include: {
        posts: true,
      },
    })
  }

  findAll(paginationArgs: PaginationArgs, findAllBlogInput?: FindBlogInput) {
    return this.prismaService.blog.findMany({
      where: {
        id: findAllBlogInput?.id,
        slug: findAllBlogInput?.slug,
      },
      take: paginationArgs.limit,
      skip: paginationArgs.skip,
      include: {
        posts: true,
      },
    })
  }

  findOne(id: number) {
    return this.prismaService.blog.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    })
  }

  update(id: number, updateBlogInput: UpdateBlogInput) {
    return this.prismaService.blog.update({
      where: { id },
      data: {
        name: updateBlogInput.name,
        slug: updateBlogInput.slug,
      },
      include: {
        posts: true,
      },
    })
  }

  remove(id: number) {
    return this.prismaService.blog.delete({
      where: { id },
      include: {
        posts: true,
      },
    })
  }
}
