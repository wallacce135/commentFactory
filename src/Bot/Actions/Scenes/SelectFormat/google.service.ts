import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { google } from 'googleapis';

@Injectable()
export class GoogleSpreadSheetService {

    constructor(private readonly configService: ConfigService) {}


    async googleTableProcess(finalString: string, time: Date, chat: string) {


        let objectForWriting = {

            command: finalString,
            time: new Date(),
            status: "WAIT",
            chat
            
        }

        let sendingArr = [objectForWriting]

        const authClient = new google.auth.JWT({
            email: this.configService.get<string>('GOOGLE_SERVICE_ACCOUT'),
            key: this.configService.get<string>('GOOGLE_PRIVATE_KEY').split(String.raw`\n`).join('\n'),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            subject: this.configService.get<string>('GOOGLE_SERVICE_ACCOUT')
        })


        const sheets = google.sheets({version: 'v4', auth: authClient});
        const doc = new GoogleSpreadsheet('1kG-gEE9EGKSVzRmBa9rdFNef5mKhN0JQ6PzieCCZnnU', authClient);

        await doc.loadInfo();
    
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRows(sendingArr);




    }



}