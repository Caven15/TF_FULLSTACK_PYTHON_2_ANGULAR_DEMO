import { Injectable } from '@angular/core';
import { Fan } from '../../models/fan.model';

@Injectable({
    providedIn: 'root'
})
export class FanSerieService {

    // Liste de fan
    private _fans: Fan[] = [
        {
            id: 1,
            nom: 'Alex',
            dateNaissance: new Date('1991-05-15'),
            series: ['One punch Man', 'One Piece']
        }
    ]

    // Get All
    recupererTouLesFans(): Fan[] {
        return this._fans;
    }

    // Get One
    recupererFan(id: number): Fan | undefined {
        const fan = this._fans.find(fan => fan.id === id);
        return fan
    }

    // Create
    ajouterFan(fan: Fan): void {
        fan.id = this._fans.length + 1;
        this._fans.push(fan);
    }

    // Update
    mettreAjourFan(fan: Fan): void {
        const index = this._fans.findIndex(f => f.id === fan.id)
        this._fans[index] = fan
    }

    // Delete
    supprimerFan(fan: Fan | undefined): void {
        if (fan) {
            const index = this._fans.findIndex(f => f.id === fan.id)
            this._fans.splice(index, 1);
        }
    }

    // fanExiste => booleen
    fanExiste(nom: string): boolean {
        return this._fans.some(fan => fan.nom.toLowerCase() === nom.toLowerCase())
    }

}
