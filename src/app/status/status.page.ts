import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core';

// FIXME Angular is running in the development mode. Call enableProdMode() to enable the production mode.

const { PushNotifications } = Plugins;

export interface DoorCommand {
  command: string;
}

export interface DoorStatus {
  status: string;
}

export interface Serial {
  serial: string;
}

export interface FriendlyName {
  serial: string;
  name: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})

export class StatusPage implements OnInit {
 /* friendly_names: Array<any>;
  selectedSerial: string;
  serialSelector = new FormControl();
  door_status: string;
  door_command_Doc: AngularFirestoreDocument<DoorCommand>;*/

  constructor() {
    // FIXME Username variable
   /* afs.doc<Serial>('users/cdevidal').collection<Serial>('serials', ref => ref.orderBy('name'))
      .valueChanges({ idField: 'serial' })
      .subscribe(friendly_names => {
        this.friendly_names = friendly_names;
        this.serialSelector.setValue(friendly_names[0].serial);
        cdr.detectChanges();
      });
    this.serialSelector.valueChanges.subscribe(selected_serial => {
      this.door_command_Doc = afs.doc<DoorCommand>('door_command/' + selected_serial);
      afs.doc<DoorStatus>('door_status/' + selected_serial).valueChanges()
        .subscribe(door_status_record => this.door_status = door_status_record.status);
      this.selectedSerial = selected_serial;
    });*/
  }

  ngOnInit() {
    // FIXME push the device ID to the user's profile so PyFCM can talk
    //  https://javebratt.com/ionic-push-notification/
    //  https://howto.lintel.in/push-notifications-using-python-via-fcm/
    //  https://vincentcwblog.wordpress.com/2018/03/10/projectfirebase-cloud-message-by-using-python-and-android/
    // Register with Apple / Google to receive push via APNS/FCM
    // FIXME ERROR Error: Uncaught (in promise): PushNotifications does not have web implementation.
    /*PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        // alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        // alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        // alert('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    // ERROR Error: Uncaught (in promise): PushNotifications does not have web implementation.
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        // alert('Push action performed: ' + JSON.stringify(notification));
      }
    );*/
  }

  /*doorCommand(command: string) {
    this.door_command_Doc.update({ command: command });
  }*/
}
