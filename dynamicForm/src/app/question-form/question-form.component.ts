import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../components/harmonyBase';
import { QuestionControllerService } from '../service/question-controller.service'

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() isDialog: boolean = false;

  @Output() close = new EventEmitter<any>();
  @Output() submit = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControllerService,
    private _snackBar: MatSnackBar) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this._snackBar.open(`Saved Successfully`, '', {
      duration: 2000,
      panelClass: 'snackbar-success',
      verticalPosition: 'top',
      horizontalPosition: 'center'
    }).afterOpened().subscribe(() => {
      this.submit.emit(this.form.value);
      this.payLoad = JSON.stringify(this.form.value);
      console.log('Saved the following values', this.payLoad);
    });
  }

  onCancel() {
    this.close.emit(null);
  }
}