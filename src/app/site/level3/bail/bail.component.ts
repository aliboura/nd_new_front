import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {SiteDto} from "../../../models/SiteDto";
import {BailDto} from "../../../models/BailDto";
import {Store} from "@ngrx/store";
import {SiteStoreInterface} from "../../../store/siteState/siteStateStore";
import {SiteService} from "../../../services/site.service";
import {candidateDto} from "../../../models/candidateDto";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-bail',
  templateUrl: './bail.component.html',
  styleUrls: ['./bail.component.css']
})
export class BailComponent implements OnInit {

  frmreadonly:boolean=true

  items: MenuItem[];
  home: MenuItem;

  options: any;
  public bailDto :BailDto =new BailDto();
  countries: any[];
  cities: any[];
  value1: any;
 value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  valueIconLeft: any;

  valueIconRight: any;
  public cand_id: number;
  public id: string;
  private candidate: candidateDto;
  private currentSite: SiteDto;

  constructor(private siteStrore:Store<SiteStoreInterface>,
              private siteService:SiteService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {

    this.bailDto.gpsx="33";
    this.bailDto.commentaireAcquistion="tst test tets tyets"

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
    this.items = [
      {label: 'Computer'},
      {label: 'Notebook'},
      {label: 'Accessories'},
      {label: 'Backpacks'},
      {label: 'Item'}
    ];
  }



  submit(form: any) {
    console.log("----------------");

    console.log(this.bailDto);

    this.bailDto.stAcquistion=this.bailDto.stAcquistion.code;
    console.log("----------------");

    console.log(this.bailDto);

  }


  /************Google Map ****/




  /******end google Map *****/
}
