import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { QuestionService }  from '../service/question.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    console.log("ques: ",this.questions)
  }

  ngOnInit(): void {
  }
}