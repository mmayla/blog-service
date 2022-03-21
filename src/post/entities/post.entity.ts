import { ObjectType, Field, Int } from '@nestjs/graphql'

import { Blog } from 'src/blog/entities/blog.entity'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  title?: string | null

  @Field()
  content: string

  @Field(() => Int, { defaultValue: 0 })
  viewCount: number

  @Field(() => Blog)
  blog: Blog
}
