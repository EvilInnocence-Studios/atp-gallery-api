import { Knex } from "knex";

export const galleryImagesTable = (t:Knex.CreateTableBuilder) => {
    t.bigIncrements();
    t.string("title", 255).nullable();
    t.string("url", 255).notNullable().unique();
    t.text("description").nullable();
    t.boolean("enabled").notNullable().defaultTo(false);
    t.smallint("sortOrder").notNullable().defaultTo(0);
    t.date("postDate").nullable();
}
