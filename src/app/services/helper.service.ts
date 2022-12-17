import { Injectable } from '@angular/core';
import {API_URLs} from '../shared/api-url';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
   //animals = ["dog", "cat", "horse", "cow"];

  siteTypes = ["BM", "MSC", "MT", "R","S","SCE1","SM","T","X"];

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
    }),
  };
  constructor(private _http:HttpClient) { }

  getWilaya() {
    return this._http.get<any>(API_URLs.APPS_URL+'/helper/getwilaya');
  }

  getSiteTypes() {
    return this.siteTypes;
  }
}
