import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../service/search.service'
import { Options, options } from 'src/data/options';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

    public data: Options[] = [];
    public loading: boolean = false;
    public results: any;
    public subs: Subscription[] = []
    public term: any;
    
    constructor(private searchService: SearchService, private router: Router) { }

    ngOnDestroy(): void { 
        this.subs.map((s: Subscription) => s.unsubscribe());
    }

    ngOnInit(): void {
        this.loading = true;
        this.getOptionsData();
        const { term } = history.state;
        this.term = term;

        if(term) {
            this.subs.push(
                this.searchService.getFetchData(term).subscribe((data: any) => {
                    this.results = data;
                })
            );
            this.loading = false;
        }
    }

    getOptionsData() {
        this.loading = true;
        this.data = options;
        if(this.subs.length > 1) {
            this.loading = false;
        }
    }

    search(form: NgForm): void {
        this.loading = true;

        const { search_term } = form.value;
        this.term = search_term;
        this.subs.push(
            this.searchService.getFetchData(search_term).subscribe((data: any) => {
                this.results = data;
            })
        );
        
        this.loading = false;
    }
}
