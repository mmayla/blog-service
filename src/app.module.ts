import { join } from 'path'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'

import { PrismaService } from './prisma.service'
import { BlogModule } from './blog/blog.module'
import { PostModule } from './post/post.module'

@Module({
  imports: [
    BlogModule,
    PostModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
