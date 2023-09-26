import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { BOT_SELECTCOMMENTNUMBER_SCENE, BOT_SELECTLINK_SCENE, session } from "src/Bot/bot.constants";
import { Context } from "src/Bot/Interfaces/context.interface";
import { deunionize } from "telegraf";



@Scene(BOT_SELECTCOMMENTNUMBER_SCENE)
export class BotSelectCommentNumberScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {
        await context.reply('Введите необходимое количество комментариев')
    }

    @On('text')
    async onTextMessage(context: Context): Promise<void> {

        session.current_comment_number = deunionize(context.message).text;
        
        context.scene.enter(BOT_SELECTLINK_SCENE);

    }


}