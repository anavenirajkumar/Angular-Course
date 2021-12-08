import { Component, OnInit } from '@angular/core';
import { IQuestions } from 'src/app/models/IQuestions';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public isCancer:boolean = false;
  public isStagging:boolean = false;
  public isDuration:boolean = false;
  public isIncition:boolean = false;
  public isClassofSurgery:boolean = false;
  public isAsa:boolean = false;

  public showCancer(Obj: string){
    console.log(Obj)
    this.isCancer = true
    if(Obj === 'Emergency'){
      this.isCancer = false;
      this.isStagging = false;
      this.isDuration = false;
      this.isIncition = false;
      this.isClassofSurgery = false;
      this.isAsa = false
    } 
  }
  public showStagging(Obj: string){
    console.log(Obj)
    if(Obj === 'Cancer'){
    this.isStagging = true;
    }else{
      this.isStagging = false;
      
    }
  }

  public showDuration(Obj:string){
    console.log(Obj)
    this.isDuration = true;
  }

  public showIncition(){
    this.isIncition = true;
  }
  
  public showClass(){
    this.isClassofSurgery = true;
  }

  public showASA(){
    this.isAsa = true;
  }

  public questions:any[] = [];
  public duration:any[] = [];
  public insition:any[]  = [];
  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.fetchAllQuestions();
    this.duration = this.questionService.fetchDuration();
    this.insition = this.questionService.fetchIncision();
  }
  
}
