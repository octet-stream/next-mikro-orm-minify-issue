import type {GenerateMetadata} from "../../../../lib/utils/types/GenerateMetadata"
import type {AFC} from "../../../../lib/utils/types/AsyncServerComponent"

import {patchStaticParams} from "../../../../lib/utils/patchStaticParams"
import {getPost, type GetPostParams} from "../../../../loaders/getPost"
import {getORM} from "../../../../server/lib/db/orm"
import {Post} from "../../../../server/db/entities"

interface Props {
  params: GetPostParams
}

export const generateStaticParams = patchStaticParams<GetPostParams>(
  async () => {
    const orm = await getORM()

    const posts = await orm.em.find(Post, {}, {
      disableIdentityMap: true,
      fields: ["slug"]
    })

    return posts.map(({slug}) => {
      const [date, name] = slug.split("/")

      return {date, name}
    })
  }
)

export const generateMetadata: GenerateMetadata<Props> = async ({params}) => {
  const {title} = await getPost(params)

  return {title}
}

const PostPage: AFC<Props> = async ({params}) => {
  const post = await getPost(params)

  return (
    <article>
      <h1>{post.title}</h1>

      <div>{post.content}</div>
    </article>
  )
}

export default PostPage
