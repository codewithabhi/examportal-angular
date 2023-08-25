import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import swal from 'sweetalert2';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private service:CategoryServiceService,private _snackBar: MatSnackBar){}
public Category={
  "title":"",
  "description":""
}
public addCategory()
{
    this.service.AddCategories(this.Category).subscribe(
      (data:any)=>{
        swal.fire('Category',' Added Successfully','success');
        console.log(data);
      },
      (error:any)=>
      {
        console.log(error);
      }
    )
  }

}
