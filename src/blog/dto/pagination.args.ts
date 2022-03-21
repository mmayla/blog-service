import { Int, Field, ArgsType } from '@nestjs/graphql'

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 0 })
  skip: number

  @Field(() => Int, { defaultValue: 10 })
  limit: number
}
