import { Module } from "@nestjs/common";
import { ActionsService } from "./actions.service";
import { BotStartScene } from "./Scenes/botstart.scene";
import { BotCreateTaskScene } from "./Scenes/createtask.scene";

import { BotSelectCommentNumberScene } from "./Scenes/selectnumber.scene";
import { BotSelectLinkScene } from "./Scenes/selectlink.scene";
import { BotPreBuildScene } from "./Scenes/botPreBuild.scene";

import { BotChangeSelectLinkScene } from "./Scenes/ChangeParams/selectlink.change.scene";
import { BotChangeSelectNumberScene } from "./Scenes/ChangeParams/selectnumber.change.scene";
import { BotChangeCreateTaskScene } from "./Scenes/ChangeParams/selectsub.change.scene";
import { BotChangeSelectLangScene } from "./Scenes/ChangeParams/selectlang.change.scene";
import { BotSelectLangScene } from "./Scenes/selectlang.scene";
import { BotPreSelectFormatScene } from "./Scenes/botPreSelectFormat.scene";
import { BotSelectManualCommentsScene } from "./Scenes/SelectFormat/selectManual.scene";
import { BotSelectAutomaticCommentsScene } from "./Scenes/SelectFormat/selectAutomatic.scene";



@Module({
    imports: [],
    providers: [
        ActionsService,

        BotStartScene,
        BotCreateTaskScene,
        BotSelectCommentNumberScene,
        BotSelectLinkScene,
        BotSelectLangScene,

        BotChangeSelectNumberScene,
        BotChangeSelectLinkScene,
        BotChangeCreateTaskScene,
        BotChangeSelectLangScene,
        
        BotPreBuildScene,
        BotPreSelectFormatScene,

        BotSelectManualCommentsScene,
        BotSelectAutomaticCommentsScene
        
        
    ],
})


export class ActionsModule { }