import { Component } from '@angular/core';
import { SubjectServiceService } from '../../../tools/services/subject-service.service';

@Component({
    selector: 'app-behaviour-subject',
    templateUrl: './behaviour-subject.component.html',
    styleUrl: './behaviour-subject.component.scss'
})
export class BehaviourSubjectComponent {
    etatOriginal!: string
    nouvelEtat: string = ''


    constructor(private _subjectService : SubjectServiceService){
        this._subjectService.etat$.subscribe({
            next : (data) => {
                this.etatOriginal = data
            },
            error: (error) => {
                console.log(error);
                console.error(error);
            },
            complete: () => {
                console.log("C'est finis :-)");
            }
        })
    }


    updateEtat(): void {
        this._subjectService.update(this.nouvelEtat)
    }
}
