import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { BlogService } from './blog.service'
import { Blog } from './entities/blog.entity'
import { CreateBlogInput } from './dto/create-blog.input'
import { UpdateBlogInput } from './dto/update-blog.input'
import { FindAllBlogInput } from './dto/find-all-blog.input'
import { PaginationArgs } from './dto/pagination.args'

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
    findAllBlogInput?: FindAllBlogInput,
  ) {
    return this.blogService.findAll(paginationArgs, findAllBlogInput)
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
