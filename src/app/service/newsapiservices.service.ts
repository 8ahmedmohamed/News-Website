import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=0ee4333b224b487aacf963cb13cec2c3";

  //businessnewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=0ee4333b224b487aacf963cb13cec2c3";

  //technewsapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=0ee4333b224b487aacf963cb13cec2c3";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //businessnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
