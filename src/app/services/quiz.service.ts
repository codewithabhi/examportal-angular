import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from '../user/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  public quizes()
  {
    return this.http.get(baseurl+"/quiz/");
  }
  public AddQuiz(quiz:any)
  {
    return this.http.post(baseurl+"/quiz/add",quiz);
  }
  public deleteQuiz(qid:any)
  {
    return this.http.delete(baseurl+"/quiz/"+qid);
  }
  public getQuiz(qid:any)
  {
    return this.http.get(baseurl+"/quiz/"+qid);
  }
  public updateQuiz(quiz:any)
  {
    return this.http.put(baseurl+"/quiz/update",quiz);
  }
  public getQuizByCat(cid:any)
  {
    return this.http.get(baseurl+"/quiz/category"+cid);
  }
  public getQuizByActive()
  {
    return this.http.get(baseurl+"/quiz/active");
  }
  public getQuizByActiveCategory(cid:any)
  {
    return this.http.get(baseurl+"/quiz/active"+cid);
  }
  public getQuizEval(questions:any)
  {
    return this.http.post(baseurl+"/quiz/quiz-eval",questions);
  }
}
