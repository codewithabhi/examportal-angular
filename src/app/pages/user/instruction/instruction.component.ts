import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit{
quiz={
  qId:'',
  title:'',
  description:'',
  noOfQuestions:'',
  maxMarks:''
};
  constructor(private route:ActivatedRoute,private service:QuizService){};
    ngOnInit(): void {
    this.service.getQuiz(this.route.snapshot.params['qid']).subscribe(
      (data:any)=>
      {
        this.quiz=data;
      },
      (error)=>
      {
  
      }
    );
  
  }

 
}
