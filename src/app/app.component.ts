import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private network: Network,
    private alertController: AlertController,
    private platform: Platform) {
    
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkNetwork();
    });
  }
  async checkNetwork() {
    if (this.network.type === 'none') {
      console.log('we got a wifi connection, woohoo!');
      const alert = await this.alertController.create({
        header: 'Sorry!!',
        subHeader: 'No internet',
        message: 'You can not access app without internet',
        buttons: [
          {
            text: 'OK',
            handler: (() => {
              navigator['app'].exitApp();
            })
          }
        ]
      });
      alert.present();
    }
  }
}
