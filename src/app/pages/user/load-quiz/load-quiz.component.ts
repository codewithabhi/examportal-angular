import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit{
  constructor(private route:ActivatedRoute, private service:QuizService){};
  quiz=[];
  qId;
  ngOnInit(): void {
      this.route.params.subscribe(
        (param)=>{
          this.qId=param['qid'];
          if(this.qId==0)
        {
          this.service.getQuizByActive().subscribe(
            (data:any)=>
            {
              this.quiz=data;
            },
            (error)=>
            {

            }
          );
        }
        else{
          this.quiz=[];
          this.service.getQuizByActiveCategory(this.qId).subscribe(
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
        
          );
       
        }

  }

