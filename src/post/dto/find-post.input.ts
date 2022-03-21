import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class FindPostInput {
  @Field(() => Int, { nullable: true })
  id?: number
}
