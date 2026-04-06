import { database } from "../../core/database";
import { IMigration } from "../../core/dbMigrations";

const db = database();

export const init: IMigration = {
    name: "gallery-00-init",
    module: "gallery",
    description: "Initial data for gallery module",
    version: "1.0.0",
    order: 3,
    up: async () => {},
    down: async () => {},
    initData: async () => {}
};
