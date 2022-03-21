import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PostService } from './post.service'
import { PostResolver } from './post.resolver'

@Module({
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
