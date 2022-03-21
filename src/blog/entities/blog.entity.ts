import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Blog {
  @Field(() => Int, { description: 'Blog id' })
  id: number

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
