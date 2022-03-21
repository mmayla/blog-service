import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { BlogService } from './blog.service'
import { Blog } from './entities/blog.entity'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'

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
    @Args('search', { nullable: true })
    search?: string,
  ) {
    return this.blogService.findAll(paginationArgs, search)
  }

  @Query(() => Blog, { name: 'blogById' })
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.blogService.findOneById(id)
  }

  @Query(() => Blog, { name: 'blogBySlug' })
  findBySlug(@Args('slug', { type: () => String }) slug: string) {
    return this.blogService.findOneBySlug(slug)
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
