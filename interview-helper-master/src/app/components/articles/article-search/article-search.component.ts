import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ArticleService } from '../../../services/article.service';
import { PagerService } from '../../../services/pager.service';
import { Article } from './article';

@Component({
    selector: 'article-search',
    templateUrl: './article-search.component.html',
    styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

    searchTerm: FormControl = new FormControl(); 
    articles: any = [];   
 
    article: Article = new Article();
    hasArticle: boolean = false;
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    @ViewChild('datepicker') datepicker;
    public myDate = new Date();
    public datex = new Date();   

    constructor(private articleSvc: ArticleService,
        private pagerService: PagerService) {         
    }

    ngOnInit() {         
    }

    public searchArticles() {
        let val = this.searchTerm.value;
        val = this.article.title;

        if (val != "") {
            this.articleSvc.getAllArticles().subscribe(response => {
                this.articles = response;

                this.articles = this.articles.filter(obj => {
                    return obj.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });

                if (this.articles.length > 0) {
                    this.hasArticle = true;
                    this.setPage(1);
                }                    
            });
        }
        else {           
            this.hasArticle = false;        
        }       
    }     

    public setPage(page: number) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.articles.length, page);

        // get current page of items
        this.pagedItems = this.articles.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    public onDateSelect(event: any) {
        let date = event.getMonth() + event.getDate() + event.getYear();

        this.articleSvc.getAllSpecificArticles(date).subscribe(
            data => { this.articles = data }
            , err => console.error(err)
            , () => console.log('done loading articles')
        );
    }

    // public clearInputBox() {
    //     this.searchTerm.setValue('');
    //     this.hasSelectedTerm = false;
    // }
}