import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'
import { BlogService } from './blog.service'
import { BlogResolver } from './blog.resolver'

@Module({
  providers: [BlogResolver, BlogService, PrismaService],
})
export class BlogModule {}
