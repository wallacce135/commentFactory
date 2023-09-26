import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotMainModule } from './Bot/bot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BotMainModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
