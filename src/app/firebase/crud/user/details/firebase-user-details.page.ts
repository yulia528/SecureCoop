import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseCombinedUserModel } from '../firebase-user.model';
import { FirebaseListingItemModel } from '../../listing/firebase-listing.model';
import { FirebaseUpdateUserModal } from '../update/firebase-update-user.modal';

import { DataStore, ShellModel } from '../../../../shell/data-store';
import { FirebaseCrudService } from '../../firebase-crud.service';

@Component({
  selector: 'app-firebase-user-details',
  templateUrl: './firebase-user-details.page.html',
  styleUrls: [
    './styles/firebase-user-details.page.scss',
    './styles/firebase-user-details.shell.scss'
  ],
})
export class FirebaseUserDetailsPage implements OnInit {
  user: FirebaseCombinedUserModel;
  // Use Typescript intersection types to enable docorating the Array of firebase models with a shell model
  // (ref: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
  relatedUsers: Array<FirebaseListingItemModel> & ShellModel;

  @HostBinding('class.is-shell') get isShell() {
    return ((this.user && this.user.isShell) || (this.relatedUsers && this.relatedUsers.isShell)) ? true : false;
  }

  constructor(
    public firebaseCrudService: FirebaseCrudService,
    public modalController: ModalController,
    public router: Router,
    private route: ActivatedRoute,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    this.route.data.subscribe((resolvedRouteData) => {
      const resolvedDataStores = resolvedRouteData['data'];
      const combinedDataStore: DataStore<FirebaseCombinedUserModel> = resolvedDataStores.user;
      const relatedUsersDataStore: DataStore<Array<FirebaseListingItemModel>> = resolvedDataStores.relatedUsers;

      combinedDataStore.state.subscribe(
        (state) => {
          this.user = state;
        }
      );
      relatedUsersDataStore.state.subscribe(
        (state) => {
          this.relatedUsers = state;
        }
      );
    });
  }

  async openFirebaseUpdateModal() {
    const modal = await this.modalController.create({
      component: FirebaseUpdateUserModal,
      componentProps: {
        'user': this.user
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();
  }
}
