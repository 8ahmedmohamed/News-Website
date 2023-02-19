import { NewsapiservicesService } from './../service/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // display data
  technewsDisplay:any = []

  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;

    })
  }

}
