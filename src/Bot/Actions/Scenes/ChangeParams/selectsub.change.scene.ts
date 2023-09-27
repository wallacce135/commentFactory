import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CHANGE_CREATETASK_SCENE, BOT_PREBUILD_SCENE, session } from "src/Bot/bot.constants";
import { deunionize } from "telegraf";



@Scene(BOT_CHANGE_CREATETASK_SCENE)
export class BotChangeCreateTaskScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {
        await context.reply('Введите новый SUB')
    }  
    @On('text')
    async onTextMessage(context: Context): Promise<void> {
        session.sub_id = deunionize(context.message).text;

        context.scene.enter(BOT_PREBUILD_SCENE);
    }

}