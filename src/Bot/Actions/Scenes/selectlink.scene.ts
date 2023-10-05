import { Scene, SceneEnter, On } from "nestjs-telegraf";
import { BOT_PREBUILD_SCENE, BOT_SELECTLINK_SCENE, BOT_SELECTMANUALCOMMENTS_SCENE, session } from "src/Bot/bot.constants";
import { Context } from "src/Bot/Interfaces/context.interface";
import { deunionize } from "telegraf";


@Scene(BOT_SELECTLINK_SCENE)
export class BotSelectLinkScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {

        await context.reply("Введите ссылку");

    } 


    @On('text')
    async onTextMessage(context: Context): Promise<void> {
        session.current_link = deunionize(context.message).text;


        if(session.current_type === 'automatic') {
            context.scene.enter(BOT_PREBUILD_SCENE);
        }

        if(session.current_type === 'manual') {
            context.scene.enter(BOT_SELECTMANUALCOMMENTS_SCENE);
        }

    }

}