import { basicRelationHandlers } from "../../core/express/service/relationHandlers";
import { pipeTo } from "ts-functional";
import { Query } from "../../core-shared/express/types";
import { getBody, getFile, getParam } from "../../core/express/extractors";
import { HandlerArgs } from "../../core/express/types";
import { IGalleryImage, NewGalleryImage } from "../../gallery-shared/image/types";
import { CheckPermissions } from "../../uac/permission/util";
import { Image } from "./services";
import { ITag } from "@common-shared/tag/types";

const tagHandlers = basicRelationHandlers(Image.tags, "imageId", "tagId");

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

    @CheckPermissions("galleryImage.view")
    public getTags(...args: HandlerArgs<undefined>): Promise<ITag[]> {return tagHandlers.get(args);}

    @CheckPermissions("galleryImage.update")
    public addTag(...args: HandlerArgs<string>): Promise<any> {return tagHandlers.add(args);}

    @CheckPermissions("galleryImage.update")
    public removeTag(...args: HandlerArgs<undefined>): Promise<any> {return tagHandlers.remove(args);}
}

export const ImageHandlers = new ImageHandlerClass();
