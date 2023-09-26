export const BOT_NAME: string = "COMMENT_FACTORY_BOT";
export const BOT_START_SCENE: string = "BOT_START_SCENE";
export const BOT_CREATETASK_SCENE: string = "BOT_CREATETASK_SCENE";
export const BOT_SELECTGEO_SCENE: string = "BOT_SELECTGEO_SCENE";
export const BOT_SELECTCOMMENTNUMBER_SCENE: string = "BOT_SELECTCOMMENTNUMBER_SCENE";
export const BOT_SELECTLINK_SCENE: string = "BOT_SELECTLINK_SCENE";
export const BOT_PREBUILD_SCENE: string = "BOT_PREBUILD_SCENE";

export const BOT_CHANGE_SELECTGEO_SCENE: string = "BOT_CHANGE_SELECTGEO_SCENE";
export const BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE: string = "BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE";
export const BOT_CHANGE_SELECTLINK_SCENE: string = "BOT_CHANGE_SELECTLINK_SCENE";
export const BOT_CHANGE_CREATETASK_SCENE: string = "BOT_CHANGE_CREATETASK_SCENE";

export let session = { 
    sub_id: null, 
    current_scene: null, 
    current_geo: null, 
    current_link: null,
    current_comment_number: null
};