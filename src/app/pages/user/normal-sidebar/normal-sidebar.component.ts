import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-normal-sidebar',
  templateUrl: './normal-sidebar.component.html',
  styleUrls: ['./normal-sidebar.component.css']
})
export class NormalSidebarComponent implements OnInit{
  category=[];
  constructor(private service:CategoryServiceService){};
  ngOnInit(): void {
    this.service.categories().subscribe(
      (data:any)=>
      {
        this.category=data;
      },
      (error)=>
      {

      }
    )
  }

}
