import { IGalleryImage, NewGalleryImage } from "src/gallery-shared/image/types";
import { basicCrudService } from "../../core/express/service/common";

const ImageBasic = basicCrudService<IGalleryImage>("galleryImages");

export const Image = {
    ...ImageBasic,
};
