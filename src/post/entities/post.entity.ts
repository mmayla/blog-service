import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field(() => String, { nullable: true })
  title?: string

  @Field()
  content: string

  @Field(() => Int, { defaultValue: 0 })
  viewCount: number
}
