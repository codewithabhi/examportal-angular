import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
category=[
  {
    "cid":"",
  "title":"",
  "description":""
}
];

constructor(private service:CategoryServiceService){}

  ngOnInit(): void {
    this.service.categories().subscribe(
      (data:any)=>{
        this.category=data;
        console.log(data);
      },
      (error:any)=>
      {
        console.log(error);
      }
    )
  }
  public deleteCategory(cId: any)
  {
    console.log(cId);
    
          this.service.deleteCategories(cId).subscribe(
            (data)=>
            {
              
              this.category=this.category.filter((cate)=>cate.cid!=cId);
              // swal.fire('Success',' Deleted Successfully','success');
            },
            (error)=>
            {
      
            }
      
          );
        }
    
}
