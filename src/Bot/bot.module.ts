import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { sessionMiddleware } from './middleware/bot.session.middleware';
import { BOT_NAME } from './bot.constants';
import { ConfigService } from '@nestjs/config';
import { ActionsModule } from './Actions/actions.module';

@Module({
    imports: [

        TelegrafModule.forRootAsync({
            botName: BOT_NAME,
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                token: configService.get<string>("TELEGRAM_BOT_TOKEN"),
                middlewares: [sessionMiddleware],
                include: [ActionsModule],
            })
        }),

        ActionsModule

    ],
    controllers: [],

})

export class BotMainModule { }