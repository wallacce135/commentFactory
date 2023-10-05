import { IConstants } from "./Interfaces/constants.interface";

export const BOT_NAME: string = "COMMENT_FACTORY_BOT";
export const BOT_START_SCENE: string = "BOT_START_SCENE";

export const BOT_CREATETASK_SCENE: string = "BOT_CREATETASK_SCENE";
export const BOT_SELECTGEO_SCENE: string = "BOT_SELECTGEO_SCENE";
export const BOT_SELECTCOMMENTNUMBER_SCENE: string = "BOT_SELECTCOMMENTNUMBER_SCENE";
export const BOT_SELECTLINK_SCENE: string = "BOT_SELECTLINK_SCENE";
export const BOT_SELECTLANG_SCENE: string = "BOT_SELECTLANG_SCENE";

export const BOT_CHANGE_SELECTGEO_SCENE: string = "BOT_CHANGE_SELECTGEO_SCENE";
export const BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE: string = "BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE";
export const BOT_CHANGE_SELECTLINK_SCENE: string = "BOT_CHANGE_SELECTLINK_SCENE";
export const BOT_CHANGE_CREATETASK_SCENE: string = "BOT_CHANGE_CREATETASK_SCENE";
export const BOT_CHANGE_SELECTLANG_SCENE: string = "BOT_CHANGE_SELECTLANG_SCENE";

export const BOT_PREBUILD_SCENE: string = "BOT_PREBUILD_SCENE";
export const BOT_PRESELECTFORMATBUILD_SCENE: string = "BOT_PRESELECTFORMATBUILD_SCENE";

export const BOT_SELECTMANUALCOMMENTS_SCENE: string = "BOT_SELECTMANUALCOMMENTS_SCENE";
export const BOT_SELECTAUTOMATICCOMMENTS_SCENE: string = "BOT_SELECTAUTOMATICCOMMENTS_SCENE";
export const BOT_CHANGE_SELECTMANUALCOMMENTS_SCENE: string = "BOT_CHANGE_SELECTMANUALCOMMENTS_SCENE";

export let session: IConstants = { 
    sub_id: '',
    sub_id2: '',
    current_link: '',
    current_language: '',
    current_comment_number: '',
    current_comment_string: '',
    current_type: '',
};