import {notFound} from "next/navigation"
import {cache} from "react"

import {getORM} from "../server/lib/db/orm"
import {Post} from "../server/db/entities"

export interface GetPostParams {
  date: string,
  name: string
}

export const getPost = cache(async (params: GetPostParams) => {
  const orm = await getORM()

  return orm.em.findOneOrFail(
    Post,

    {
      slug: [params.date, params.name].join("/")
    },

    {
      failHandler: notFound
    }
  )
})
