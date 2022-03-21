import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class FindAllPostInput {
  @Field(() => Int, { nullable: true })
  id?: number
}
