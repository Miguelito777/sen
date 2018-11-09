import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }/*,
    {
      title: 'Donantes',
      url: '/donantes',
      icon: 'list'
    },
    {
      title: 'Cantidad Sangre Tipo',
      url: '/CantidadesSangreTipo',
      icon: 'list'
    },
    {
      title: 'Ingreso de Sangre',
      url: '/IngresoSangre',
      icon: 'list'
    },
    {
      title: 'Donantes por Nivel de Reserva Bajo',
      url: '/DonantesNivelReservaBajo',
      icon: 'list'
    },
    {
      title: 'Retirar Unidades Caducadas',
      url: '/RetirarUnidadesCaducadas',
      icon: 'list'
    },
    {
      title: 'Salida de Sangre',
      url: '/SalidaSangre',
      icon: 'list'
    },
    {
      title: 'Catalogos',
      url: '/Catalogos',
      icon: 'list'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
