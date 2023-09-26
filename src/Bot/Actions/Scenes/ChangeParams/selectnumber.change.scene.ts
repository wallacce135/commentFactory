import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE, BOT_PREBUILD_SCENE, session } from "src/Bot/bot.constants";
import { deunionize } from "telegraf";




@Scene(BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE)
export class BotChangeSelectNumberScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {
        await context.reply('Введите новое количество комментариев')
    }

    @On('text')
    async onTextMessage(context: Context): Promise<void> {
        session.current_comment_number = deunionize(context.message).text;

        context.scene.enter(BOT_PREBUILD_SCENE);
    }

}