import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_SELECTCOMMENTNUMBER_SCENE, BOT_SELECTGEO_SCENE, BOT_SELECTLANG_SCENE, BOT_SELECTLINK_SCENE, session } from "src/Bot/bot.constants";
import { deunionize } from "telegraf";


@Scene(BOT_SELECTGEO_SCENE)
export class BotSelectGeoScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> { 


        await context.reply("Введите необходимое ГЕО");


    }

    @On('text')
    async onTextMessage(context: Context): Promise<void> {


        session.current_geo = deunionize(context.message).text;


        if(session.current_type === 'automatic'){
            context.scene.enter(BOT_SELECTLANG_SCENE);
        }

        if(session.current_type === 'manual'){
            context.scene.enter(BOT_SELECTLINK_SCENE);
        }


    }

}