import { Hears, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_CHANGE_CREATETASK_SCENE, BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE, BOT_CHANGE_SELECTGEO_SCENE, BOT_CHANGE_SELECTLANG_SCENE, BOT_CHANGE_SELECTLINK_SCENE, BOT_CHANGE_SELECTMANUALCOMMENTS_SCENE, BOT_PREBUILD_SCENE, BOT_PRESELECTFORMATBUILD_SCENE, BOT_SELECTAUTOMATICCOMMENTS_SCENE, BOT_SELECTMANUALCOMMENTS_SCENE, session } from "src/Bot/bot.constants";
import { Markup } from "telegraf";
import { GoogleSpreadSheetService } from "./SelectFormat/google.service";




@Scene(BOT_PREBUILD_SCENE)
export class BotPreBuildScene {

    constructor(private readonly googleSpreadSheetService: GoogleSpreadSheetService) { }

    @SceneEnter()
    async onSceneEnter(context: Context) {
        await context.reply('❗️Внимательно проверьте информацию перед отправкой❗️')
        session.sub_id2 = await this.generateUniqueId(10);

        await context.reply(`SUB ---> ${session.sub_id}${session.current_type === 'automatic' ? `\nКол-во комментариев ---> ${session.current_comment_number}` : ''}\nСсылка ---> ${session.current_link}\nЯзык ---> ${session.current_language}\nsub_id2 --->  ${session.sub_id2}${session.current_type === 'manual' ? `\nСтрока комментариев ---> ${session.current_comment_string}`: ''}`, 
        Markup.keyboard(['Изменить SUB', 'Изменить ссылку', 'Изменить кол-во комментариев', 'Изменить язык', session.current_type  === 'manual' ?  'Изменить комментарии' : '',  'Продолжить']).oneTime()
        );
    }


    @Hears('Изменить SUB')
    async changeSubSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_CREATETASK_SCENE)

    }

    @Hears('Изменить ссылку')
    async changeLinkSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTLINK_SCENE);

    }

    @Hears('Изменить язык')
    async changeLangSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTLANG_SCENE);
    }

    @Hears('Изменить кол-во комментариев')
    async changeCommentCountSelect(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTCOMMENTNUMBER_SCENE);
    }

    @Hears('Изменить комментарии')
    async changeCommentsStrign(context: Context) {
        context.scene.enter(BOT_CHANGE_SELECTMANUALCOMMENTS_SCENE);
    }

    @Hears('Продолжить')
    async selectContinue(context: Context): Promise<void> {

        if(session.current_type === 'automatic'){
            
            let finalString = `bot_start2|${session.sub_id2}|${session.current_link}|${session.sub_id}|${session.current_language}|${session.current_comment_number}`

            await context.reply(`finalString(выбор из таблицы) -> ${finalString}`)
    
            console.log('finalString -> ', finalString)

            this.googleSpreadSheetService.googleTableProcess(finalString, new Date(), String(context.message.chat.id));
            context.scene.enter(BOT_PRESELECTFORMATBUILD_SCENE);

        }

        if(session.current_type === 'manual'){


            let finalString = `bot_start|${session.sub_id2}|${session.current_link}|${session.sub_id}|${session.current_comment_string}`

            finalString = finalString.replaceAll('\n', '{SHIFTDOWN}{ENTER}{SHIFTUP}');
            finalString = finalString.replaceAll('<br>', '{SHIFTDOWN}{ENTER}{SHIFTUP}');

            await context.reply(`finalString(ручное заполнение) -> ${finalString}`)
            
            console.log('finalString -> ', finalString)

            this.googleSpreadSheetService.googleTableProcess(finalString, new Date(), String(context.message.chat.id));

            context.scene.enter(BOT_PRESELECTFORMATBUILD_SCENE);
        }

        
    }


    async generateUniqueId(length: number): Promise<string> {
        let result: string = '';
        const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength: number = characters.length;
        let counter: number = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

}