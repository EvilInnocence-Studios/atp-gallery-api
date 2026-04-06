import { del, get, patch, post } from "../../core/express/wrappers";
import { ImageHandlers } from "./handlers";

export const ImageEndpoints = {
    image: {
        GET: get(ImageHandlers.search),
        POST: post(ImageHandlers.create),
        ":imageId": {
            GET: get(ImageHandlers.get),
            PATCH: patch(ImageHandlers.update),
            DELETE: del(ImageHandlers.remove),
        }
    }
};
