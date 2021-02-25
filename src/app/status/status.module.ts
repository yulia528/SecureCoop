import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StatusPageRoutingModule } from './status-routing.module';
import { StatusPage } from './status.page';
import { ComponentsModule } from '../components/components.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  declarations: [StatusPage]
})
export class StatusPageModule { }
