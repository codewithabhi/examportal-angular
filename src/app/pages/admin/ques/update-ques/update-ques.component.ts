import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-ques',
  templateUrl: './update-ques.component.html',
  styleUrls: ['./update-ques.component.css']
})
export class UpdateQuesComponent implements OnInit{
  public Editor = ClassicEditor;
  question={
    quesId:'',
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    quiz:{
      qId:'',
      title:'title'
    }
  };
  constructor( private route:ActivatedRoute,private service:QuestionService){};
  qId=0;
  ngOnInit(): void {
    this.qId=this.route.snapshot.params['quesId'];
    this.service.getQuest(this.qId).subscribe(
      (data:any)=>
      {
        swal.fire('Question',' Data Loaded Successfully','success');
        this.question=data;
      },
      (error)=>
      {
        swal.fire('Question',' Data Loaded Failure','error');
      }
      );


}
  

  public updateQues()
  {
    this.service.updateQuestion(this.question).subscribe(
      (data)=>
      {
        swal.fire('Question',' Updated Successfully','success');
      },
      (error)=>
      {

      }
    )
  }
}
