import { Ctx, Start, Update } from "nestjs-telegraf";
import { Context } from "../Interfaces/context.interface";
import { BOT_PRESELECTFORMATBUILD_SCENE } from "../bot.constants";




@Update()
export class ActionsService {

    @Start()
    async onBotStart(@Ctx() ctx: Context): Promise<void> {

        await ctx.scene.enter(BOT_PRESELECTFORMATBUILD_SCENE)

    }


}