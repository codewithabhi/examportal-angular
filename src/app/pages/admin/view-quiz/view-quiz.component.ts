import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit{
  quizes=[
  ]
  constructor(private service:QuizService,private snack:MatSnackBar){};
  ngOnInit(): void {
    this.service.quizes().subscribe(
      (data:any)=>{
        this.quizes=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

  public deleteQuiz(qid: any,active:any)
  {
    console.log(qid);
    if(!active){
    swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then(
      (result)=>{
        if(result.isConfirmed)
        {
          this.service.deleteQuiz(qid).subscribe(
            (data)=>
            {
              
              this.quizes=this.quizes.filter((quiz)=>quiz.qId!=qid);
              swal.fire('Success',' Deleted Successfully','success');
            },
            (error)=>
            {
      
            }
      
          )
        }
      }
    );
    
    }
    else{
      this.snack.open("Quiz Is Alredy live",'',{
        duration:3000,
      });
    }
  }

}
