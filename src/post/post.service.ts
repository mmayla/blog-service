import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { FindPostInput } from './dto/find-post.input'

@Injectable()
export class PostService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createPostInput: CreatePostInput, blogId: number) {
    return this.prismaService.post.create({
      data: {
        title: createPostInput.title,
        content: createPostInput.content,
        blog: {
          connect: {
            id: blogId,
          },
        },
      },
      include: {
        blog: true,
      },
    })
  }

  findAll(paginationArgs: PaginationArgs, findAllPostInput?: FindPostInput) {
    return this.prismaService.post.findMany({
      where: {
        id: findAllPostInput?.id,
      },
      take: paginationArgs.limit,
      skip: paginationArgs.skip,
      include: {
        blog: true,
      },
    })
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
      include: {
        blog: true,
      },
    })
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prismaService.post.update({
      where: { id },
      data: {
        title: updatePostInput.title,
        content: updatePostInput.content,
      },
      include: {
        blog: true,
      },
    })
  }

  remove(id: number) {
    return this.prismaService.post.delete({
      where: { id },
      include: {
        blog: true,
      },
    })
  }

  incrementViewCount(id: number) {
    return this.prismaService.post.update({
      where: { id },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    })
  }
}
