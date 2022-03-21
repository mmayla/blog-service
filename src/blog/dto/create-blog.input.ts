import { InputType, Field } from '@nestjs/graphql'

import { CreatePostInput } from '../../post/dto/create-post.input'

@InputType()
export class CreateBlogInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  slug: string

  @Field(() => [CreatePostInput], { nullable: true })
  posts?: CreatePostInput[]
}
