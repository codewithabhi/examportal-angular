import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterModule } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { QuizService } from 'src/app/services/quiz.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{
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
  constructor(private route:ActivatedRoute, private service:QuizService, private catservice:CategoryServiceService){};
  qId=0;
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
    this.qId=this.route.snapshot.params['qId'];
    this.service.getQuiz(this.qId).subscribe(
      (data:any)=>{
          this.quiz=data;
      },
      (error)=>
      {

      }
    )
  }
;
public updateQuiz()
{
  this.service.updateQuiz(this.quiz).subscribe(
    (data)=>
    {
      swal.fire('Quiz',' Updated Successfully','success');
      console.log(data);
      window.location.href="/admin/quiz"
    },
    (error)=>{
      console.log(error);
      swal.fire('Error',' In Saving Quiz','error');
    }
    );
}

}
