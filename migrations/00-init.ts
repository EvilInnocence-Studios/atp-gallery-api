import { insertPermissions, insertRolePermissions } from "@uac/migrations/util";
import { database } from "../../core/database";
import { IMigration } from "../../core/dbMigrations";
import { galleryImagesTable } from "./tables";

const db = database();

const permissions = [
    { name: "galleryImage.create", description: "Can create gallery image" },
    { name: "galleryImage.view", description: "Can view gallery image" },
    { name: "galleryImage.update", description: "Can edit gallery image" },
    { name: "galleryImage.delete", description: "Can delete gallery image" },
];

const rolePermissions = [
    ...permissions.map(p => ({ roleName: "SuperUser", permissionName: p.name })),
    ...permissions.filter(p => p.name.endsWith(".view")).map(p => ({ roleName: "Public", permissionName: p.name })),
];

export const init: IMigration = {
    name: "gallery-init",
    module: "gallery",
    description: "Initial data for gallery module",
    version: "1.0.0",
    order: 3,
    up: async () => {
        await db.schema.createTable("galleryImages", galleryImagesTable);
    },
    down: async () => {
        await db.schema.dropTableIfExists("galleryImages");
    },
    initData: async () => {
        await insertPermissions(db, permissions);
        await insertRolePermissions(db, rolePermissions);
    }
};
