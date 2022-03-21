import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Blog {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field(() => String)
  slug: string
}
