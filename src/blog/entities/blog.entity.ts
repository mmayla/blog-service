import { ObjectType, Field, Int } from '@nestjs/graphql'

import { Post } from 'src/post/entities/post.entity'

@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field(() => String)
  slug: string

  @Field(() => [Post], { nullable: true })
  posts?: [Post]
}
