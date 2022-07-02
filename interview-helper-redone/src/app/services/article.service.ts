import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleService {

    constructor(private httpClient: HttpClient) {
    }

    getAllArticles() {
        return this.httpClient.get('http://localhost:3000/articles');
    }

    getSpecificArticle(id: string) {
        return this.httpClient.get('http://localhost:3000/articles/' + id)
    }

    getAllSpecificArticles(date: any) {
        return this.httpClient.get('http://localhost:3000/articles');
    }
}