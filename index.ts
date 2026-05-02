import { init } from "../gallery/migrations/00-init";
import { addTags } from "../gallery/migrations/01-addTags";

export { apiConfig } from "./endpoints";

export const migrations = [
    init,
    addTags,
];

export const setupMigrations = [init];
