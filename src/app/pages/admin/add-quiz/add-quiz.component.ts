import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quiz={
    title:"",
  description:"",
  maxMarks:"",
  noOfQuestions:"",
  active:false,
  category:{
    cid:'',
  }
  };
  categories=[];
  constructor(private service:QuizService, private catservice:CategoryServiceService){
  };
  ngOnInit(): void {
    this.catservice.categories().subscribe(
      (data:any)=>
      {
        this.categories=data;
      },
      (error)=>
      {
        console.log(error);
        swal.fire('Error',' In Loadnind data','error');
      }
    )
  }
;
 

  public addQuiz()
  {
    this.service.AddQuiz(this.quiz).subscribe(
      (data)=>
      {
        swal.fire('Quiz',' Added Successfully','success');
        console.log(data);
      },
      (error)=>{
        console.log(error);
        swal.fire('Error',' In Saving Quiz','error');
      }
      );
  }

}
