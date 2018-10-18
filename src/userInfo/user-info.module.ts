import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserInfoComponent } from './user-info.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
    imports: [BrowserModule],
    declarations: [UserInfoComponent],
    bootstrap: [UserInfoComponent],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: window['base-href']
        }
    ],
})
export class UserInfoModule { }