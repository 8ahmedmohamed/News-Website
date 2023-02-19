import { NewsapiservicesService } from './../service/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // display data
  businessnewsDisplay:any = []

  ngOnInit(): void {

    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay = result.articles;

    })
  }

}
