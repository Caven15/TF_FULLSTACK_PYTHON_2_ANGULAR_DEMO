import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FanSerieService } from '../../../../tools/services/fan-serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from '../../../../models/fan.model';
import { ageFanSerie } from '../../../../tools/validators/age-minimum-fan.validator';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrl: './update.component.scss'
})
export class UpdateComponent {
    updateFanForm! : FormGroup
    idFan! : number
    error : string = ''

    constructor(
        private _fanService: FanSerieService,
        private _fb: FormBuilder,
        private _router: Router,
        private _ar : ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.idFan = parseInt(this._ar.snapshot.params["id"]);

        const fan : Fan | undefined = this._fanService.recupererFan(this.idFan);

        if (fan) {
            const series = this._fb.array([]);

            fan.series.forEach(serie => {
                series.push(this._fb.control(serie, Validators.required));
            });

            this.updateFanForm = this._fb.group({
                nom : [fan.nom, Validators.required],
                dateNaissance : [fan.dateNaissance.toISOString().split('T')[0], [Validators.required, ageFanSerie(13)]],
                series : series
            })
        } else{
            this.error = 'Fan introuvable...';
        }

    }

    get series(): FormArray {
        return this.updateFanForm.get('series') as FormArray;
    }

    ajouterSerie(): void {
        this.series.push(this._fb.control('', Validators.required))
    }

    supprimerSerie(index: number): void {
        if (this.series.length > 1) {
            this.series.removeAt(index)
        }
    }

    sauvegardeModif() : void {
        if (this.updateFanForm.invalid){
            this.error = 'Veuillez remplir tout les champs correctement.';
            return;
        }

        const fanUpdated : Fan = {
            id : this.idFan,
            nom : this.updateFanForm.value.nom,
            dateNaissance : new Date(this.updateFanForm.value.dateNaissance),
            series : this.updateFanForm.value.series
        }

        this._fanService.mettreAjourFan(fanUpdated);
        this._router.navigate(['/exos/liste-fan'])
    }
}
