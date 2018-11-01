import { Component, ViewChild, } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from "../pages/inicio/inicio";
import { En2Page } from "../pages/en2/en2";
import { En5Page } from "../pages/en5/en5";
import { EnmPage } from "../pages/enm/enm";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav:Nav;
  public rootPage: any;
  public pages: Array<{titulo: string, Component:any, icon: String}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = InicioPage;
        this.pages = [
      { titulo: 'Inicio',  Component: InicioPage, icon: 'home'},
      { titulo: 'Niño(a)<2 años',  Component: En2Page, icon: 'happy'},
      { titulo: 'Niño(a)<5 años',  Component: En5Page, icon: 'happy'},
      { titulo: 'Madre',  Component: EnmPage, icon: 'woman'},

    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
goToPage(page){
  this.nav.setRoot(page);
  }
}



