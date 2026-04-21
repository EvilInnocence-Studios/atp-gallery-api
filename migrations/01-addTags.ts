import { database } from "../../core/database";
import { IMigration } from "../../core/dbMigrations";
import { galleryImageTagsTable } from "./tables";

const db = database();

export const addTags: IMigration = {
    name: "addTags",
    module: "gallery",
    description: "Add tags table to the gallery module",
    version: "1.1.0",
    order: 10,
    up: async () => {
        const hasTable = await db.schema.hasTable("galleryImageTags");
        if (!hasTable) {
            await db.schema.createTable("galleryImageTags", galleryImageTagsTable);
        }
    },
    down: async () => {
        await db.schema.dropTableIfExists("galleryImageTags");
    },
    initData: async () => {}
};
