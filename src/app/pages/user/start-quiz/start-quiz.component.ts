import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
constructor(private locStrat:LocationStrategy,private route:ActivatedRoute,private service:QuestionService,private quizservice:QuizService){}
question=[];  
attempted=0;
result='Not Clear';
marks=0;
correctans=0;
MM=0;
NOQ:any;
isSubmit=false;
timer:any;
submitted:string;
ngOnInit(): void {

    this.preventBackButton();
    this.service.getQuestion(this.route.snapshot.params['qId']).subscribe(
      (data:any)=>{
       this. question=data;
      
       this.MM=this.question[0].quiz.maxMarks;
       this.NOQ=this.question[0].quiz.noOfQuestions;
       this.timer=this.question.length*2*60;
       
       this.question.forEach((q)=>{
        q['answervalue']=''
       });
       this.startTimer();
      },
      (error)=>{

      }
    )
  }
  // this.NOQ*120;
   preventBackButton()
  {
    history.pushState(null,null,location.href);
    this.locStrat.onPopState(()=>{
      alert("You don't go back until submit the quiz");
      history.pushState(null,null,location.href);
    
    })
  }

  submit()
  {
    if(this.submitted!="auto"){
    Swal.fire({
      icon:'warning',  
      title: 'Do you want to submit the quiz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't save`,
    }).then((result) => {
      this.isSubmit=true;
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.eval();
    // Swal.fire("attempted "+this.attempted+"coorrectAns"+this.correctans+"marks"+this.marks+"result "+this.result);
  

        Swal.fire('Submitted Successfullly!', 'See result further', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  else{
    Swal.fire("Quiz","Submitted Successfully",'success');
    this.eval();
    this.isSubmit=true;
   
    // Swal.fire("attempted "+this.attempted+"coorrectAns"+this.correctans+"marks"+this.marks+"result "+this.result);

  }
  }
  public startTimer()
  {
  let t =  window.setInterval(()=>{
      if(this.timer<=0)
      {
        this.submitted="auto";
        this.submit();
        window.clearInterval(t);
      }
      else
      {
        this.timer--;
      }

    },1000);
  }
  public getformattedTimer()
  {
     let mm = Math.floor(this.timer/60);
     let ss= this.timer-(mm*60);
     return `${mm} mm: ${ss} ss`;
  }

  private eval()
  {
       /* Read more about isConfirmed, isDenied below */
        this.quizservice.getQuizEval(this.question).subscribe((data:any)=>
        {
          console.log(data);
          this.attempted=data.Attempted;
          this.correctans=data.Correctans;
          this.marks=data.Marks;
          this.result=data.Result;
          // "Attempted",attempted,"Correctans",correctans,"Marks",marks,"Result",result
        },
        (error)=>
        {
          console.log(error);
        });

      //  this.question.forEach((q)=>
      //  {
      //    if(q.answer==q.answervalue)
      //    {
      //      this.attempted++;
      //      this.correctans++;
      //      this.marks+=this.MM/this.NOQ;
           
      //    }
      //    else if(q.answervalue.trim()!='')
      //    {
      //      this.attempted++;
      //    }
      //  });
      //  this.marks= Math. round(this.marks);    
      //  if(this.marks<(0.6*this.MM)){
      //    this.result="Not Clear";
      //  }
      //  else{
      //    this.result="Clear";
      //  }
  }

  public printpage()
  {
    window.print();
  }
}
// Marks Got: 0
// Correct Answers: 0
// Qurestions Attempted: 0
// Result: Not Clear