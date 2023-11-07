import {Entity, Property, Unique, ManyToOne} from "@mikro-orm/core"

import {Record} from "./Record"
import {User} from "./User"

@Entity({tableName: "post"})
export class Post extends Record {
  @Property({type: "varchar"})
  title!: string

  @Property({type: "varchar"})
  @Unique()
  slug!: string

  @Property({type: "varchar"})
  content!: string

  @ManyToOne({type: User, eager: true})
  author!: User
}
