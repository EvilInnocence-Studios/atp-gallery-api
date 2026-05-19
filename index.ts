import { FieldRegistry } from "@core/express/util";
import { init } from "../gallery/migrations/00-init";
import { addTags } from "../gallery/migrations/01-addTags";

export { apiConfig } from "./endpoints";

export const migrations = [
    init,
    addTags,
];

export const setupMigrations = [init];

FieldRegistry.register("galleryImages", {
    create: ["title", "url", "description", "enabled", "sortOrder", "postDate"],
    update: ["title", "url", "description", "enabled", "sortOrder", "postDate"],
});
FieldRegistry.register("galleryImageTags", {
    create: ["imageId", "tagId"],
    update: [],
});
