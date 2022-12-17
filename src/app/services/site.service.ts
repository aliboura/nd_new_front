import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SiteDto} from "../models/SiteDto";
import {API_URLs} from "../shared/api-url";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private _http:HttpClient) { }

  public getDataExample() {
    let url="https://jsonplaceholder.typicode.com/todos";
    return this._http.get<any>(url)

   // return this.http.get<any>(API_URLs.APPS_URL+"/plan/allusers");

  }
  public addSite(site:SiteDto) {
   // let url="http://localhost:8099/site/new";
    return this._http.post<any>(API_URLs.APPS_URL+'/site/new',site);
    // return this.http.get<any>(API_URLs.APPS_URL+"/plan/allusers");
  }


  public getListCandidate(codesite:string|null) {
    return this._http.get<any>(API_URLs.APPS_URL+'/site/candlist/'+codesite);
  }
  public getSite(codesite: string | null) {
      return this._http.get<any>(API_URLs.APPS_URL+'/site/'+codesite);
  }

  public getCandidateSite(codesite: string | null, idcand: number) {
   // if (idcand!=undefined) {
      if (idcand) {

        return this._http.get<any>(API_URLs.APPS_URL+'/site/cand/'+codesite
    ,{ params: {
          idcandidate: idcand
        },
      });

  }else {
      return this._http.get<any>(API_URLs.APPS_URL+'/site/cand/'+codesite);
    }

  }


  public getSingleCandidateSite(codesite:string|null) {

      return this._http.get<any>(API_URLs.APPS_URL+'/site/cand/'+codesite);

  }



}
