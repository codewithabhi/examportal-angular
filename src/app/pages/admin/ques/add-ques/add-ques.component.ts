import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-ques',
  templateUrl: './add-ques.component.html',
  styleUrls: ['./add-ques.component.css']
})
export class AddQuesComponent implements OnInit {
  public Editor = ClassicEditor;

  question={
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
  constructor(private route:ActivatedRoute, private service:QuestionService){};
  ngOnInit(): void {
    this.question.quiz['qId']=this.route.snapshot.params['qId'];
    this.question.quiz['title']=this.route.snapshot.params['qtitle'];
  }
  public addQues()
  {
    this.service.addQuestion(this.question).subscribe(
      (data)=>
      {
        swal.fire('Question',' Added Successfully','success');
      },
      (error)=>
      {

      }

    )
  }


}
