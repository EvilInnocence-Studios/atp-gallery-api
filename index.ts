import { init } from "./migrations/00-init";
import { migration as createImageTable } from "./migrations/00-createImageTable";

export { apiConfig } from "./endpoints";

export const migrations = [
    init,
    createImageTable,
];

export const setupMigrations = [init];
