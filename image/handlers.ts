import { CheckPermissions } from "../../uac/permission/util";
import { pipeTo } from "ts-functional";
import { Image } from "./services";
import { getBody, getFile, getParam, getUserPermissions } from "../../core/express/extractors";
import { HandlerArgs } from "../../core/express/types";
import { Query } from "../../core-shared/express/types";
import { IGalleryImage, NewGalleryImage } from "src/gallery-shared/image/types";

class ImageHandlerClass {
    @CheckPermissions("galleryImage.create")
    public upload(...args: HandlerArgs<NewGalleryImage>): Promise<IGalleryImage> {
        return pipeTo(Image.upload(false), getFile)(args);
    }

    @CheckPermissions("galleryImage.create")
    public replace(...args: HandlerArgs<IGalleryImage>): Promise<IGalleryImage> {
        return pipeTo(Image.upload(true), getFile)(args);
    }

    @CheckPermissions("galleryImage.view")
    public search(...args: HandlerArgs<Query>): Promise<IGalleryImage[]> {
        return pipeTo(Image.search, getBody<Query>)(args);
    }

    @CheckPermissions("galleryImage.view")
    public get(...args: HandlerArgs<undefined>): Promise<IGalleryImage> {
        return pipeTo(Image.loadById, getParam("imageId"))(args);
    }

    @CheckPermissions("galleryImage.update")
    public update(...args: HandlerArgs<Partial<IGalleryImage>>): Promise<IGalleryImage> {
        return pipeTo(Image.update, getParam("imageId"), getBody<Partial<IGalleryImage>>)(args);
    }

    @CheckPermissions("galleryImage.update")
    public replaceImage(...args: HandlerArgs<Partial<IGalleryImage>>): Promise<IGalleryImage> {
        return pipeTo(Image.replace, getParam("imageId"), getFile)(args);
    }

    @CheckPermissions("galleryImage.delete")
    public remove(...args: HandlerArgs<undefined>): Promise<null> {
        return pipeTo(Image.remove, getParam("imageId"))(args);
    }
}

export const ImageHandlers = new ImageHandlerClass();
