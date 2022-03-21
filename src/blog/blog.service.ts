import { Inject, Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { PaginationArgs } from '../shared/pagination/pagination.args'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'

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

  findAll(paginationArgs: PaginationArgs, search?: string) {
    const q = search
      ? {
          name: {
            contains: search,
          },
        }
      : {}
    return this.prismaService.blog.findMany({
      where: {
        ...q,
      },
      take: paginationArgs.limit,
      skip: paginationArgs.skip,
      include: {
        posts: true,
      },
    })
  }

  findOneById(id: number) {
    return this.prismaService.blog.findUnique({
      where: { id },
      include: {
        posts: true,
      },
    })
  }

  findOneBySlug(slug: string) {
    return this.prismaService.blog.findUnique({
      where: { slug },
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
