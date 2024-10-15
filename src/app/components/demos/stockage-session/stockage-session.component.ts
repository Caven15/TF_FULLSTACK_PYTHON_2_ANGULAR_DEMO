import { Component } from '@angular/core';
import { StockageSessionService } from '../../../tools/services/stockage-session.service';

@Component({
  selector: 'app-stockage-session',
  templateUrl: './stockage-session.component.html',
  styleUrl: './stockage-session.component.scss'
})
export class StockageSessionComponent {
    donneesLocale : any = null
    donneesSession : any = null

    constructor(private _stockageService : StockageSessionService){}

    enregistretDansLocalStorage() :void {
        const data = {nom : 'Angular', version : 18};
        this._stockageService.definirLocalStorage('framework', data)
    }

    recupererDepuisLocalStorage() :void {
        this.donneesLocale = this._stockageService.obetnirLocalStorage('framework');
    }

    supprimerLocalStorage() :void {
        this._stockageService.supprimerLocalStorage('framework');
        localStorage.clear();
    }

    //-----------------------------------------

    enregistretDansSessionStorage() :void {
        const data = {nom : 'Session', version : 'Session storage angular 18'};
        this._stockageService.definirsessionStorage('sessionInfo', data)
    }

    recupererDepuisSessionStorage() :void {
        this.donneesLocale = this._stockageService.obetnirsessionStorage('sessionInfo');
    }

    supprimerSessionStorage() :void {
        this._stockageService.supprimersessionStorage('sessionInfo');
        sessionStorage.clear();
    }
}
