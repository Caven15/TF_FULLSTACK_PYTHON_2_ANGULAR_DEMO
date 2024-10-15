import { Component } from '@angular/core';
import { ContatApiService } from '../../../tools/services/contat-api.service';
import { Post } from '../../../models/post.model';

@Component({
    selector: 'app-conso-api',
    templateUrl: './conso-api.component.html',
    styleUrl: './conso-api.component.scss'
})
export class ConsoApiComponent {
    posts: Post[] = []
    error: string = ''

    constructor(private _contactApi: ContatApiService) { }

    ngOnInit(): void {
        this._contactApi.recupererPosts().subscribe({
            next: (donnee) => {
                this.posts = donnee
            },
            error: (error) => {
                this.error = error.message
            },
            complete: () => {
                console.log("Terminés !!!!");
            }
        })
    }
}
