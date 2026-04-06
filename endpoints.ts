import { IApiConfig } from "../core/endpoints";

import { ImageEndpoints } from "./image/endpoints";

export const apiConfig: IApiConfig = {
    gallery: {
        ...ImageEndpoints,
    },
};
