import { On, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_PRESELECTFORMATBUILD_SCENE, BOT_SELECTMANUALCOMMENTS_SCENE, session } from "src/Bot/bot.constants";
import { deunionize } from "telegraf";
import { GoogleSpreadSheetService } from "./google.service";




@Scene(BOT_SELECTMANUALCOMMENTS_SCENE)
export class BotSelectManualCommentsScene {


    constructor(private readonly googleSpreadSheetService: GoogleSpreadSheetService) { }

    @SceneEnter()
    async onSceneEnter(context: Context): Promise<void> {
        await context.reply('Введите комментарии в формате "комментарий1&комментарий2&комментарий3"');
    }


    @On('text')
    async onTextMessage(context: Context): Promise<void> {

        session.current_comment_string = await deunionize(context.message).text;

        const finalString = `bot_start|${session.sub_id2}|${session.current_link}|${session.sub_id}|${session.current_comment_string}`

        this.googleSpreadSheetService.googleTableProcess(finalString, new Date(), String(context.message.chat.id));

        await context.reply(`finalString(ручное заполнение) -> ${finalString}`)
        context.scene.enter(BOT_PRESELECTFORMATBUILD_SCENE);

    }

}