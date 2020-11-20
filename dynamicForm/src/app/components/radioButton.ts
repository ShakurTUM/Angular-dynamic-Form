import { QuestionBase } from './harmonyBase';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}