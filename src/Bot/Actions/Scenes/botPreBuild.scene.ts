import { Hears, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE, BOT_CHANGE_SELECTGEO_SCENE, BOT_CHANGE_SELECTLINK_SCENE, BOT_PREBUILD_SCENE, session } from "src/Bot/bot.constants";
import { Markup } from "telegraf";




@Scene(BOT_PREBUILD_SCENE)
export class BotPreBuildScene {


    @SceneEnter()
    async onSceneEnter(context: Context) {
        await context.reply('❗️Внимательно проверьте информацию перед отправкой❗️')

        await context.reply(`SUB ---> ${session.sub_id}\nГЕО ---> ${session.current_geo}\nКол-во комментариев ---> ${session.current_comment_number}\nСсылка ---> ${session.current_link}`, 
        Markup.keyboard(['Изменить SUB', 'Изменить ГЕО', 'Изменить ссылку', 'Изменить кол-во комментариев'])
        );
    }


    @Hears('Изменить SUB')
    async changeSubSelect(context: Context) {
        context.reply('Сцена изменения SUB');

    }

    @Hears('Изменить ГЕО')
    async changeGeoSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTGEO_SCENE);

    }

    @Hears('Изменить ссылку')
    async changeLinkSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTLINK_SCENE);

    }

    @Hears('Изменить кол-во комментариев')
    async changeCommentCountSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE);

    }

}