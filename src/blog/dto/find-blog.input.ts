import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class FindBlogInput {
  @Field(() => Int, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  slug?: string
}
