import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

import { CreateBlogInput } from './create-blog.input'

@InputType()
export class UpdateBlogInput extends PartialType(CreateBlogInput) {
  @Field(() => Int)
  id: number
}
