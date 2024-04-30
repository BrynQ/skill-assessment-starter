import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core"

export const users = mysqlTable("users", {
  id: bigint("id", { mode: "number", unsigned: true })
    .primaryKey()
    .autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
})

// export const images = mysqlTable("images", {
//   // The rest of your columns here
//   userId: bigint("user_id", { mode: "number", unsigned: true }).references(
//     () => users.id
//   ),
// })
