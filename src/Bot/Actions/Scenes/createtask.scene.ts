import { Hears, On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CREATETASK_SCENE, BOT_SELECTGEO_SCENE, BOT_SELECTLANG_SCENE, session } from "src/Bot/bot.constants";
import { Markup, deunionize } from "telegraf";





@Scene(BOT_CREATETASK_SCENE)
export class BotCreateTaskScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {

        await context.reply('Введите свой SUB ниже 🔽');
        
    }


    @On("message")
    async onTextMessage(context: Context): Promise<void> {

        session.sub_id = await deunionize(context.message).text;

        context.scene.enter(BOT_SELECTLANG_SCENE);

    }


}