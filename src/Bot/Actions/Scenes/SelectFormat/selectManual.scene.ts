import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_PREBUILD_SCENE, BOT_PRESELECTFORMATBUILD_SCENE, BOT_SELECTMANUALCOMMENTS_SCENE, session } from "src/Bot/bot.constants";
import { deunionize } from "telegraf";





@Scene(BOT_SELECTMANUALCOMMENTS_SCENE)
export class BotSelectManualCommentsScene {


    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {
        await context.reply('Введите комментарии в формате "комментарий1&комментарий2&комментарий3"');
    }


    @On('text')
    async onTextMessage(context: Context): Promise<void> {

        session.current_comment_string = await deunionize(context.message).text;


        context.scene.enter(BOT_PREBUILD_SCENE);

    }

}