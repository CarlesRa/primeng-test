import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { showToast$ } from '../shared/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;
  checked = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  get check(): FormControl {
    return this.form.get('check') as FormControl;
  }
  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  initForm(): void {
    this.form = this.fb.group({
      check: [this.checked, Validators.required],
      name: ['bartolo', Validators.required]
    });
    this.loading = false;
  }

  checkUncheck(): void {
    this.checked = !this.checked;
    this.check.setValue(this.checked);
    this.name.setValue('Maria de la O')
  }

  save(): void {
    showToast$.next({
      type: 'success',
      message: 'Guardado correctamente'
    });
  }

}
