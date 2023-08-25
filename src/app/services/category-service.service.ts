import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }
  public categories()
  {
    return this.http.get(baseurl+"/category/");
  }
  public AddCategories(category:any)
  {
    return this.http.post(baseurl+"/category/add", category);
  }
  public deleteCategories(id:any)
  {
    return this.http.delete(baseurl+"/category/"+id);
  }
}
