import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { BlogService } from './blog.service'
import { Blog } from './entities/blog.entity'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { FindBlogInput } from './dto/find-blog.input'

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput)
  }

  @Query(() => [Blog], { name: 'blogs' })
  findAll(
    @Args()
    paginationArgs: PaginationArgs,
    @Args('filter', { nullable: true })
    findBlogInput?: FindBlogInput,
  ) {
    return this.blogService.findAll(paginationArgs, findBlogInput)
  }

  @Query(() => Blog, { name: 'blog' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.blogService.findOne(id)
  }

  @Mutation(() => Blog)
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(updateBlogInput.id, updateBlogInput)
  }

  @Mutation(() => Blog)
  removeBlog(@Args('id', { type: () => Int }) id: number) {
    return this.blogService.remove(id)
  }
}
