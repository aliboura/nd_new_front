import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreInterface} from "../../models/StoreInterface";
import {SiteStoreInterface} from "../../store/siteState/siteStateStore";

@Component({
  selector: 'app-list-sites',
  templateUrl: './list-sites.component.html',
  styleUrls: ['./list-sites.component.css']
})
export class ListSitesComponent implements OnInit {
count:number
  public sitecode: string;
  constructor(private store:Store<StoreInterface>,private siteStrore:Store<SiteStoreInterface>) {
    // this.store.subscribe(
    //   data=>this.count=data.counter.n
    //       );

  //  this.siteStrore.dispatch({type:"getSiteCode",payload:"CODEALLALA"});
    this.siteStrore.subscribe(
      data=>this.sitecode=data.siteState.currentSiteCode
    );
  }

  ngOnInit(): void {
  }

}
