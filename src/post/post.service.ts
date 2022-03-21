import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { FindAllPostInput } from './dto/find-all-post.input'

@Injectable()
export class PostService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    return this.prismaService.post.create({
      data: {
        title: createPostInput.title,
        content: createPostInput.content,
      },
    })
  }

  findAll(paginationArgs: PaginationArgs, findAllPostInput?: FindAllPostInput) {
    return this.prismaService.post.findMany({
      where: {
        id: findAllPostInput?.id,
      },
      take: paginationArgs.limit,
      skip: paginationArgs.skip,
    })
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
    })
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prismaService.post.update({
      where: { id },
      data: {
        title: updatePostInput.title,
        content: updatePostInput.content,
      },
    })
  }

  remove(id: number) {
    return this.prismaService.post.delete({
      where: { id },
    })
  }
}
