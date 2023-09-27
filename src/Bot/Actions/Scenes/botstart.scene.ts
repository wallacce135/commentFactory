import { Hears, On, Scene, SceneEnter } from "nestjs-telegraf";
import { BOT_CREATETASK_SCENE, BOT_START_SCENE, session } from "src/Bot/bot.constants";
import { Context } from '../../Interfaces/context.interface';
import { Markup } from "telegraf";




@Scene(BOT_START_SCENE)
export class BotStartScene {

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {


       await context.reply(`Привет, ${context.message?.from?.first_name || context.message?.from?.username}!\nНажми кнопку ниже для продолжения`, Markup.keyboard(['Создать новую задачу']).oneTime());
    }

    @Hears('Создать новую задачу')
    async onCreateNewTask(context: Context): Promise<void> {

        await context.scene.enter(BOT_CREATETASK_SCENE)

    }

    @On('text')
    async OnMissclick(context:  Context): Promise<void> {
        await context.reply('Не знаю такой команды, нажмите кнопку ниже для продолжения', Markup.keyboard(['Создать новую задачу']).oneTime());
    }



}