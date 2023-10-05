import { Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "src/Bot/Interfaces/context.interface";
import { BOT_PRESELECTFORMATBUILD_SCENE, BOT_SELECTAUTOMATICCOMMENTS_SCENE, session } from "src/Bot/bot.constants";
import { GoogleSpreadSheetService } from "./google.service";




@Scene(BOT_SELECTAUTOMATICCOMMENTS_SCENE)
export class BotSelectAutomaticCommentsScene {

    constructor(private readonly googleSpreadSheetService: GoogleSpreadSheetService) { }

    @SceneEnter()
    async onSceneEnter(context:Context): Promise<void> {

        let finalString = `bot_start2|${session.sub_id2}|${session.current_link}|${session.sub_id}|${session.current_language}|${session.current_comment_number}`

        await context.reply(`finalString(выбор из таблицы) -> ${finalString}`)

        this.googleSpreadSheetService.googleTableProcess(finalString, new Date(), String(context.message.chat.id));
        context.scene.enter(BOT_PRESELECTFORMATBUILD_SCENE);

    }



}