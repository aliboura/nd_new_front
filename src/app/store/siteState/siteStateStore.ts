import {Action} from "@ngrx/store";
import {candidateDto} from "../../models/candidateDto";
import {SiteDto} from "../../models/SiteDto";

let initialeState ={
  currentSiteCode:"NONE",
  cand_id:0,
  candCurrent:0,
  siteCurrent:new SiteDto()
}
interface CustomAction {
  type:string,
  payload:any
}

export interface SiteStoreInterface {
  siteState :SiteState
}

interface SiteState {
  currentSiteCode:string,
  cand_id:number,
  candCurrent:candidateDto,
  siteCurrent:SiteDto
}
export function siteReducer (state=initialeState,action:any ) {

  switch (action.type) {
    case 'getSiteCode' : return {

      currentSiteCode:action.payload,
      cand_id:state.cand_id,
      candCurrent:state.candCurrent,
      siteCurrent: state.siteCurrent

    }

    case 'currentcandidate' : return {
      currentSiteCode:state.currentSiteCode,
      cand_id :action.payload,
      candCurrent:state.candCurrent,
      siteCurrent: state.siteCurrent

    }

    case 'currentcandidateObj' : return {
      currentSiteCode:state.currentSiteCode,
      cand_id :state.cand_id,
      candCurrent: action.payload,
      siteCurrent: state.siteCurrent



    }

    case 'currentsiteObj' : return {
      currentSiteCode:state.currentSiteCode,
      cand_id :state.cand_id,
      candCurrent: state.candCurrent,
      siteCurrent: action.payload,



    }
    default : return       state


  }

}
