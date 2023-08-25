import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  public getQuestion(qId:any){
    return this.http.get(baseurl+"/question/quiz"+qId);
  }
  public getQuest(qId:any){
    return this.http.get(baseurl+"/question/"+qId);
  }
  public addQuestion(question:any){
    return this.http.post(baseurl+"/question/add",question);
  }
  public deleteQues(quesId:any)
  {
    return this.http.delete(baseurl+"/question/"+quesId);
  }
  public updateQuestion(question:any){
    return this.http.put(baseurl+"/question/update",question);
  }
}
