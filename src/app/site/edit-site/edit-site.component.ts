import {Component, Inject, OnInit} from '@angular/core';
import {SiteDto} from "../../models/SiteDto";
import {WilayaDto} from "../../models/WilayaDto";
import {SiteService} from "../../services/site.service";
import {HelperService} from "../../services/helper.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {StoreInterface} from "../../models/StoreInterface";
import {SiteStoreInterface} from "../../store/siteState/siteStateStore";
import {NOTYF} from "../../shared/tools/notyf.token";
import {Notyf} from "notyf";

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent implements OnInit {
  // public siteDto :SiteDto =new SiteDto("","","","","","","cell1");
  public siteDto :SiteDto =new SiteDto();
  public idwilaya:number;
  private data: any;
  listWilaya:Array<WilayaDto>;
  listSiteTypes:Array<String>;


  // this._planingService.checkVacation(plan).subscribe(
  //
  //   res => {
  // console.log( "check vacation");
  // console.log(res)
  count:number;
  public sitecode: string;


  constructor(private siteService:SiteService,
              private helperService:HelperService,
              private router: Router,
              private store:Store<StoreInterface>,
              private siteStrore:Store<SiteStoreInterface>,
              @Inject(NOTYF) private notyf: Notyf
  ) {

    this.siteStrore.subscribe(
      data=>{
        this.sitecode=data.siteState.currentSiteCode
        this.siteDto=data.siteState.siteCurrent
      }
    );

  }

  ngOnInit(): void {
    this.helperService.getWilaya().subscribe(
      data=> {
        this.listWilaya = data;
      }
    )

    this.listSiteTypes= this.helperService.getSiteTypes();
  }

  onChangeWilaya (newValue:string) {

    let result = this.listWilaya.find((obj) => {
      this.siteDto.region=obj.region;
      this.idwilaya=obj.id;
      return obj.name === newValue;
    });

  }

  onChangeType (newValue:string) {

    let result = this.listWilaya.find((obj) => {
      this.siteDto.region=obj.region;
      this.generateSiteCode();
      return obj.name === newValue;
    });
  }
  generateSiteCode () {
    // if (this.siteDto.type!="SCE1")
    //   this.siteDto.code= this.siteDto.region+this.idwilaya+this.siteDto.type+this.siteDto.numero
    // else
    //   this.siteDto.code= this.siteDto.region+this.idwilaya+this.siteDto.type
    //     +this.siteDto.numero+this.siteDto.nom
    //
    // return this.siteDto.code;


  }





  submit(f: any) {

    // this.siteService.addSite(this.siteDto).subscribe(
    //   res1 => {
    //     localStorage.setItem('localSiteCode', this.siteDto.code)
    //
    //     this.notyf.success( 'site '+this.siteDto.code+' a été inséré ');
    //     //   console.log( "very nice");
    //     //  this.router.navigate(['/site/cand/'+this.siteDto.code])
    //     //  cand/:codesite
    //
    //     this.siteService.getSite(localStorage.getItem('localSiteCode')).subscribe(
    //       res=>{
    //         console.log("res",res);
    //         this.siteStrore.dispatch({type:"getSiteCode",payload:res.code});
    //         this.siteStrore.dispatch({type:"currentsiteObj",payload:res})
    //
    //         localStorage.setItem('localSiteCode', res.code)
    //         this.router.navigate(['/site/cand/'+this.siteDto.code])
    //
    //       },
    //       err=>console.log("err:",err)
    //     )
    //
    //
    //
    //   },
    //   err => {
    //     console.warn("errrrrrrr")
    //   }
    // )


  }


}
