import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Blog {
  @Field(() => Int, { description: 'Blog id' })
  id: number

  @Field(() => String, { description: 'Blog name' })
  name: string

  @Field(() => String, { description: 'Blog slug' })
  slug: string
}
