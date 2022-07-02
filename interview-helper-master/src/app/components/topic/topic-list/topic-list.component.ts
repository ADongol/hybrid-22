import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { TopicService } from '../../../services/topic.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector:'topic-list',
    templateUrl: './topic-list.component.html',
    styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
    public topics: any;
    public topicDefinition: any; 

    showContent: boolean = false;

    hideme = {};

    @BlockUI() blockUI: NgBlockUI;

    // @ViewChild('addIcon') addIcon: ElementRef;
    // @ViewChild('removeIcon') removeIcon: ElementRef;

    constructor(private topicSvc: TopicService) {
        this.hideme = {};
    }

    ngOnInit() {        

        this.getAllTopics();
        this.topicDefinition = [];
        this.topics = [];
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'none';
    }

    showDefinition(topic) {

        this.hideme[topic.termId] = !this.hideme[topic.termId]       

        //this.addIcon.nativeElement._elementRef.nativeElement.style.display = 'none';  
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'inline';
    }

    testDefinition() {
        console.log("a");
        this.showContent = true;
    }

    hideDefinition(topic) {
        
        
        //this.addIcon.nativeElement._elementRef.nativeElement.style.display = 'inline'; 
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'none';
    }

    public getAllTopics() {
        this.blockUI.start('Loading...'); 

        this.topicSvc.getAllTopics().subscribe(
            data => {
                this.topics = data;        
                this.topics = this.topics.sort((a, b) => a.termName !== b.termName ? a.termName < b.termName ? -1 : 1 : 0);
            }
            , err => console.error(err)
            , () => console.log('done loading topics')
        );

        this.blockUI.stop();

        //this.topicDefinition = this.topics.forEach((value, index) => { return value.definition });
    }

}