import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateBlogInput {
  @Field(() => String, { description: 'Blog name' })
  name: string

  @Field(() => String, { description: 'Blog slug' })
  slug: string
}
