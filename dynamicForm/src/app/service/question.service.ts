import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../components/dropdown'
import { QuestionBase }     from '../components/harmonyBase';
import { TextboxQuestion }  from '../components/textbox';
import { RadioQuestion }    from '../components/radioButton';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new RadioQuestion({
        key: 'type',
        label: 'Job Type',
        order: 4,
        options: [
          {key: 'hero', value: 'Hero'},
          {key: 'sidekick', value: 'Sidekick'}
        ]
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}