import { Component } from '@angular/core';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Router } from '@angular/router';
import { Fan } from '../../../../models/fan.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
    fans : Fan[] = []

    constructor(
        private _fanService : FanSerieService,
        private _router : Router
    ){}

    ngOnInit(): void {
        this.fans = this._fanService.recupererTouLesFans()
        console.log(this.fans);
    }

    voirDetails(id : number | undefined) : void{
        this._router.navigate(['/exos/details-fan', id])
    }
}
