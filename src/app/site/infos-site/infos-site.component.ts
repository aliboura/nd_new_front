import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {StoreInterface} from "../../models/StoreInterface";
import {SiteStoreInterface} from "../../store/siteState/siteStateStore";
import {SiteService} from "../../services/site.service";
import {candidateDto} from "../../models/candidateDto";
import {SiteDto} from "../../models/SiteDto";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-infos-site',
  templateUrl: './infos-site.component.html',
  styleUrls: ['./infos-site.component.css']
})
export class InfosSiteComponent implements OnInit {

  items: MenuItem[];
  home: MenuItem;

  public id:string | null ;
  private sub: any;
  public cand_id:number;
  public candid:number;
  public candidate: candidateDto;
  public currentSite: SiteDto;
  public listCand: Array<candidateDto>;

  constructor(private route: ActivatedRoute,
              private siteStrore:Store<SiteStoreInterface>,
              private siteService:SiteService) {

  }

  ngOnInit(): void {
   //

    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];

    this.siteStrore.subscribe(
      data=> {
        this.id = data.siteState.currentSiteCode

        console.log("*****************",data.siteState.currentSiteCode)

        this.cand_id=data.siteState.cand_id
        this.candidate=data.siteState.candCurrent
        this.currentSite=data.siteState.siteCurrent
      //  this.currentSite=data.siteState.
     //   console.log("cand_id  inside infos",this.candidate)
      })
    //
    const idroute = this.route.snapshot.paramMap.get('codesite');
    if (this.id=='NONE') {
      this.siteService.getSite(idroute).subscribe(
        data=>this.id=data.id
      )

      this.siteService.getSingleCandidateSite(idroute).subscribe(
        res=>this.candidate=res
      )

      this.siteService.getListCandidate(idroute).subscribe(
        res1=>{
          this.listCand=res1

        }
      )
    }
   //
    // this.siteService.getSingleCandidateSite(this.cand_id)


    // get quey params
    this.route.queryParams
      .subscribe(params => {
          this.candid = params['idcandidate'];
          //
          this.siteService.getCandidateSite(this.id, this.candid).subscribe(
            res => {
              this.candidate = res
            }
          )


        //
        }
      );



  }

}
