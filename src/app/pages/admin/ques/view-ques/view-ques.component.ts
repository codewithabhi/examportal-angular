import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-ques',
  templateUrl: './view-ques.component.html',
  styleUrls: ['./view-ques.component.css']
})
export class ViewQuesComponent implements OnInit{
  question=[
   
  ];
  qid;
  qtitle;
  constructor(private route:ActivatedRoute,private service:QuestionService){};
  ngOnInit(): void {
    this.qid=this.route.snapshot.params['qId'];
    this.qtitle=this.route.snapshot.params['title'];
    
    this.service.getQuestion(this.qid).subscribe(
      (data:any)=>
      {
        this.question=data;
      },
      (error)=>
      {

      }
      );


}
public deleteQues(quesId:any)
{
  this.service.deleteQues(quesId).subscribe(
    (data)=>
    {
      this.question=this.question.filter((ques)=>ques.quesId!=quesId);
      swal.fire('Question',' Deleted Successfully','success');
    },
    (error)=>
    {
      console.log(error);
      swal.fire('Question',' Deleted Successfully','error');
    }
  )
}
}
