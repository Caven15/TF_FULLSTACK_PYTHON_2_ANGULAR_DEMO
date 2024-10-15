import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

    // Déclaration du behaviorsubject => Possède un état lor de notre initialisation
    private _subject : BehaviorSubject<string> = new BehaviorSubject<string>('invité')

    // Déclaration de ma variable comme étant obesrvable
    etat$ = this._subject.asObservable()

    // Méthode qui va me permettre de mettre à jour l'état de mon observable
    update(newEtat : string) : void{
        this._subject.next(newEtat)
    }
}
