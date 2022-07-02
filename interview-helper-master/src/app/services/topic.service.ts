import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TopicService {

    constructor(private httpClient: HttpClient) {
    }

    getAllTopics() {
        return this.httpClient.get('http://localhost:3000/topics');
    }

    getSpecificTopic(id: string) {
       return this.httpClient.get('http://localhost:3000/topics/' + id)
   }
}