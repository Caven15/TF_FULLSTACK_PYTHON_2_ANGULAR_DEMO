import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class ContatApiService {
    private _apiUrl: string = "https://jsonplaceholder.typicode.com/posts"

    constructor(private _httpClient: HttpClient) { }

    recupererPosts(): Observable<Post[]>{
        return this._httpClient.get<Post[]>(`${this._apiUrl}`)
    }
}
