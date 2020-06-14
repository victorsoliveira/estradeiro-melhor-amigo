import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AssistantComponent } from './components/assistant/assistant.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StartComponent } from './components/start/start.component';
import { AdventuresComponent } from './components/adventures/adventures.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    AssistantComponent,
    StartComponent,
    MessagesComponent,
    AdventuresComponent
  ]
})
export class HomePageModule {}
