import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../../components/components.module';
import { FirebaseUserDetailsPage } from './details/firebase-user-details.page';
import { FirebaseUserDetailsResolver } from './firebase-user-details.resolver';
import { FirebaseUpdateUserModal } from './update/firebase-update-user.modal';
import { FirebaseCrudService } from '../firebase-crud.service';
import { FirebaseCrudModule } from '../firebase-crud.module';
import { SelectUserImageModal } from './select-image/select-user-image.modal';

const routes: Routes = [
  {
    path: '',
    component: FirebaseUserDetailsPage,
    resolve: {
      data: FirebaseUserDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FirebaseCrudModule
  ],
  declarations: [
    FirebaseUserDetailsPage,
    FirebaseUpdateUserModal
  ],
  entryComponents: [
    FirebaseUpdateUserModal,
    SelectUserImageModal
  ],
  providers: [
    FirebaseCrudService,
    FirebaseUserDetailsResolver
  ]
})
export class FirebaseUserDetailsPageModule {}
