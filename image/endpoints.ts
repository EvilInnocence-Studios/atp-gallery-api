import { del, get, patch, post, upload } from "../../core/express/wrappers";
import { ImageHandlers } from "./handlers";

export const ImageEndpoints = {
    image: {
        GET: get(ImageHandlers.search),
        POST: upload(ImageHandlers.upload),
        replace: {
            POST: upload(ImageHandlers.replace),
        },
        ":imageId": {
            replace: {
                POST: upload(ImageHandlers.replaceImage),
            },
            GET: get(ImageHandlers.get),
            PATCH: patch(ImageHandlers.update),
            DELETE: del(ImageHandlers.remove),
        }
    }
};
