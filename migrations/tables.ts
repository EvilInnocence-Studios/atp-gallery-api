import { Knex } from "knex";

export const galleryImagesTable = (t:Knex.CreateTableBuilder) => {
    t.bigIncrements();
    // Add table fields here
}
