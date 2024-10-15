import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { Router } from '@angular/router';
import { ageFanSerie } from '../../../../tools/validators/age-minimum-fan.validator';
import { Fan } from '../../../../models/fan.model';

@Component({
    selector: 'app-ajout-fan',
    templateUrl: './ajout-fan.component.html',
    styleUrl: './ajout-fan.component.scss'
})
export class AjoutFanComponent {
    creatFanForm: FormGroup
    error : string = ''

    constructor(
        private _fanService: FanSerieService,
        private _fb: FormBuilder,
        private _router: Router
    ) {
        this.creatFanForm = this._fb.group({
            nom: ['', Validators.required],
            dateNaissance: ['', [Validators.required, ageFanSerie(13)]],
            series: this._fb.array([this._fb.control('', Validators.required)])
        })
    }

    get series(): FormArray {
        return this.creatFanForm.get('series') as FormArray;
    }

    ajouterSerie(): void {
        this.series.push(this._fb.control('', Validators.required))
    }

    supprimerSerie(index: number): void {
        if (this.series.length > 1) {
            this.series.removeAt(index)
        }
    }

    // Sauvegarder un fan
    sauvegardeFan(): void {
        if (this.creatFanForm.invalid){
            this.error = 'Veuillez remplir tout les champs correctement.';
            return;
        }

        if (this._fanService.fanExiste(this.creatFanForm.value.nom)) {
            this.error = `Le fan ${this.creatFanForm.value.nom} existe dejà dans le système...`;
            return
        }

        const fan : Fan = {
            nom : this.creatFanForm.value.nom,
            dateNaissance : new Date(this.creatFanForm.value.dateNaissance),
            series : this.creatFanForm.value.series
        }

        this._fanService.ajouterFan(fan);
        this._router.navigate(['/exos/liste-fan'])
    }
}
