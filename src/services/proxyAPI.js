import EnumEnv from '@/constants/EnumEnv';
const apiPrefix = EnumEnv.apiPrefix || '/';

export const proxyAPI = (api, version = "v1") => {
    return apiPrefix.replace(/\/$/, "") + `/api/${version}/` + api.replace(/^\//, "");
}


