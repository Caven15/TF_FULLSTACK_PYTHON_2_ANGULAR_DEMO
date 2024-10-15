import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Fan } from '../../../../models/fan.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    idFan! : number
    fan : Fan | undefined;

    constructor(
        private _ar : ActivatedRoute,
        private _fanService : FanSerieService,
        private _router : Router
    ) {}


    ngOnInit(): void {

        this.idFan = parseInt(this._ar.snapshot.params["id"]);
        // const idFan = +this._ar.snapshot.paramMap.get('id')!;

        this.fan = this._fanService.recupererFan(this.idFan)
    }

    updateFan() : void{
        if (this._fanService.fanExiste(this.fan!.nom)) {
            this._router.navigate(['/exos/update-fan', this.fan!.id])
        }
    }

    suppressionFan() :void{
        if (this._fanService.fanExiste(this.fan!.nom)) {
            this._fanService.supprimerFan(this.fan)
            alert('Fan supprimé avec succès !')
            this._router.navigate(['/exos/liste-fan'])
        }
    }
}
