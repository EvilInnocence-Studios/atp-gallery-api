import { init } from "./migrations/00-init";
import { addTags } from "./migrations/01-addTags";

export { apiConfig } from "./endpoints";

export const migrations = [
    init,
    addTags,
];

export const setupMigrations = [init];
