import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreInterface} from "../../models/StoreInterface";
import {SiteStoreInterface} from "../../store/siteState/siteStateStore";
import {SiteService} from "../../services/site.service";
import {ActivatedRoute, Router} from "@angular/router";
import {candidateDto} from "../../models/candidateDto";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {


  public sitecode: string ;
  @Input() public id:string|null;



 //  public id:string | null="";
  public listCand: Array<candidateDto>;

  constructor(private siteStrore:Store<SiteStoreInterface>,
              private siteService:SiteService,
               private route:ActivatedRoute) {


    // @ts-ignore
    this.sitecode=localStorage.getItem('localSiteCode');

    this.siteStrore.subscribe(
     data=>{
       if (data.siteState.currentSiteCode)
         this.sitecode=data.siteState.currentSiteCode;
       else
         // @ts-ignore
         this.sitecode=localStorage.getItem('localSiteCode')

       this.siteService.getListCandidate(this.sitecode).subscribe(
             res1=>{
             this.listCand=res1 ;

         }
       )

     }
  );


         // this.sitecode=localStorage.getItem('localSiteCode');
         //     this.siteService.getListCandidate(localStorage.getItem('localSiteCode')).subscribe(
         //       res1=>{
         //       this.listCand=res1
         //
         //   }
         // )




  }

  ngOnInit(): void {

  }

}
