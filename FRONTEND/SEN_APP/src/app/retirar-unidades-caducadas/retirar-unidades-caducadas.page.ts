import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-retirar-unidades-caducadas',
  templateUrl: './retirar-unidades-caducadas.page.html',
  styleUrls: ['./retirar-unidades-caducadas.page.scss'],
})
export class RetirarUnidadesCaducadasPage implements OnInit {

  unidadesCaducadas;
  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.searchSangre();
  }
  async searchSangre() {
    const loading = await this.loadingController.create({
      message: 'Buscando Sangre Vencida',
    });
    await loading.present();
    await this.api.getSangreVencida()
      .subscribe(res => {
        console.log(res);
        this.unidadesCaducadas = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async deleteInventario(unidad){
    const loading = await this.loadingController.create({
      message: 'Actualizando Inventario ',
    });
    await loading.present();
    await this.api.deleteInventario(unidad.id)
    .subscribe(res => {
      console.log(res);
      loading.dismiss();  
      //let id = res['id'];
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }
}
