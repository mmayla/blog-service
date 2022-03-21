import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { PostService } from './post.service'
import { PostResolver } from './post.resolver'

@Module({
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
