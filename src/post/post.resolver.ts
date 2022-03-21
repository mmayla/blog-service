import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { PaginationArgs } from 'src/shared/pagination/pagination.args'
import { PostService } from './post.service'
import { Post } from './entities/post.entity'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { FindAllPostInput } from './dto/find-all-post.input'

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @Args('blogId', { type: () => Int }) blogId: number,
  ) {
    return this.postService.create(createPostInput, blogId)
  }

  @Query(() => [Post], { name: 'posts' })
  findAll(
    @Args()
    paginationArgs: PaginationArgs,
    @Args('filter', { nullable: true })
    findAllPostInput: FindAllPostInput,
  ) {
    return this.postService.findAll(paginationArgs, findAllPostInput)
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id)
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput)
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id)
  }
}
