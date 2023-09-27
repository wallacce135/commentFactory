import { Hears, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CREATETASK_SCENE, BOT_PRESELECTFORMATBUILD_SCENE, session } from "src/Bot/bot.constants";
import { Markup } from "telegraf";




@Scene(BOT_PRESELECTFORMATBUILD_SCENE)
export class BotPreSelectFormatScene {


    @SceneEnter()
    async onSceneEnter(context: Context) {

        session.sub_id = null;
        session.sub_id2 = null;
        session.current_link = null,
        session.current_language = null,
        session.current_comment_number = null,
        session.current_comment_string = null,
        session.current_type = null

        await context.reply(`Привет, ${context.message?.from?.first_name || context.message?.from?.username}!\nВыберите формат заполнения комментариев`, Markup.keyboard(['Ручное заполнение', 'Выбрать из таблицы']).oneTime())


    }

    @Hears('Ручное заполнение')
    async ManualSelect(context: Context) {
        session.current_type = 'manual';
        context.scene.enter(BOT_CREATETASK_SCENE);
    }

    @Hears('Выбрать из таблицы')
    async AutomticSelect(context: Context) {
        session.current_type = 'automatic';
        context.scene.enter(BOT_CREATETASK_SCENE);
    }



}