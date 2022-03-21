import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
  @Field(() => String, { nullable: true })
  title?: string

  @Field()
  content: string
}
