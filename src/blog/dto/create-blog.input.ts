import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateBlogInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  slug: string
}
