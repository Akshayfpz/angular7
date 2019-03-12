import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  searchText:any;
  constructor() { }

  ngOnInit() {
  }
  characters=[{Name:"Akshay",Location:"Trivandrum"},
              {Name:"dhgh",Location:"Kochi"},
              {Name:"gkghhg",Location:"technopark"},
              {Name:"Akshfjghay",Location:"Trivandrum"},
              {Name:"ghjy",Location:"Trivandrum"},
              {Name:"ertytr",Location:"ernakulam"},
              {Name:"cvbcvb",Location:"Trivandrum"},
              {Name:"ioli",Location:"Trivandrum"}]
}
