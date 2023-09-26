import { Module } from "@nestjs/common";
import { ActionsService } from "./actions.service";
import { BotStartScene } from "./Scenes/botstart.scene";
import { BotCreateTaskScene } from "./Scenes/createtask.scene";
import { BotSelectGeoScene } from "./Scenes/selectgeo.scene";
import { BotSelectCommentNumberScene } from "./Scenes/selectnumber.scene";
import { BotSelectLinkScene } from "./Scenes/selectlink.scene";
import { BotPreBuildScene } from "./Scenes/botPreBuild.scene";

import { BotChangeSelectGeoScene } from "./Scenes/ChangeParams/selectgeo.change.scene";
import { BotChangeSelectLinkScene } from "./Scenes/ChangeParams/selectlink.change.scene";
import { BotChangeSelectNumberScene } from "./Scenes/ChangeParams/selectnumber.change.scene";



@Module({
    imports: [],
    providers: [
        ActionsService,

        BotStartScene,
        BotCreateTaskScene,
        BotSelectGeoScene,
        BotSelectCommentNumberScene,
        BotSelectLinkScene,
        BotPreBuildScene,

        BotChangeSelectGeoScene,
        BotChangeSelectNumberScene,
        BotChangeSelectLinkScene


    ],
})


export class ActionsModule { }