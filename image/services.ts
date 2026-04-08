import { Setting } from "../../common/setting/service";
import { mediaService } from "../../core/express/service/media";
import { IGalleryImage, NewGalleryImage } from "../../gallery-shared/image/types";
import { basicCrudService } from "../../core/express/service/common";

const ImageBasic = basicCrudService<IGalleryImage>("galleryImages", "title");

export const Image = {
    ...ImageBasic,
    ...mediaService({
        dbTable: "galleryImages",
        uniqueColumns: ["url"],
        newRecord: (file: File):NewGalleryImage => ({ url: file.name, title: file.name, description: "", enabled: false, sortOrder: 0, postDate: new Date()}),
        updateRecord: (file: File) => ({ url: file.name }),
        getFolder: () => Setting.get("gallery.imageFolder"),
        getEntity: ImageBasic.loadById,
        getFileName: (media: IGalleryImage) => media.url,
    })
};
