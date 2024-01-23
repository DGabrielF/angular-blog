import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/database';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string="";
  @Input()
  contentTitle:string="";
  @Input()
  contentDescription:string="";
  @Input()
  externalLink:string="";

  private id:string|null = "0";

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("index");
    })
    this.setValuesToContent(this.id)
  }

  setValuesToContent(id:string|null) {
    const result = data.applications.filter(application => application.index.toString() === id)[0];

    if (result) {
      this.photoCover = result.image;
      this.contentTitle = result.name;
      this.contentDescription = result.description;
      this.externalLink = result.link;
    }
  }

}
