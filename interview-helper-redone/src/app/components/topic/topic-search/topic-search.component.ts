import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { TopicService } from '../../../services/topic.service'; 
import { PagerService } from '../../../services/pager.service';
import { Topic } from '../topic';

@Component({
    selector: 'topic-search',
    templateUrl: './topic-search.component.html',
    styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent implements OnInit {

    public searchTerm: FormControl = new FormControl();

    public searchResult: Observable<any[]>;
    public topics: any = [];
    protected searchStr: string;
    public hasSelectedTerm: boolean = false;
   
    public selectedTerm: Topic = new Topic();    
    public selectedTermDefinition: string[];

    constructor(private topicSvc: TopicService,
        private pagerService: PagerService)
    { 
        this.getTopics();    
        this.searchResult = this.searchTerm.valueChanges
            .pipe(
                startWith(''),
                map(topic => topic ? this.filterTopics(topic) : this.topics.slice())
            );
    }  
         
    ngOnInit() {      
    }

    public getTopics() {
        this.topicSvc.getAllTopics().subscribe(response => {
        this.topics = response;
        })
    }  
    
    public filterTopics(val: string) {
        return this.topics.filter(obj =>
            obj.termName.toLowerCase().indexOf(val.toLowerCase()) === 0);
        
    }   
    
    public onTermSelect(id: string) {
        this.topicSvc.getSpecificTopic(id).subscribe(response => {
            //console.log(response);
            this.selectedTerm = <Topic>response;
            this.selectedTermDefinition = this.selectedTerm.definition;

            if (this.selectedTerm != null)
                this.hasSelectedTerm = true;            
        })
    } 

    public clearInputBox() {
    
        this.searchTerm.setValue(''); 
        this.hasSelectedTerm = false;
    }
}