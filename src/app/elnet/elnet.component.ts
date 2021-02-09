import { Component, OnInit } from '@angular/core';
import { ElService } from '../el.service';

@Component({
  selector: 'app-elnet',
  templateUrl: './elnet.component.html',
  styleUrls: ['./elnet.component.css']
})
export class ElnetComponent implements OnInit {

  showForm: boolean = true;

  constructor(public service: ElService) { }

  ngOnInit() {
  }

  onReset() {
    /* let $key = this.service.form.get('$key')?.value; */
    this.showForm = false;
    setTimeout(() => {
      this.service.form.reset()
        this.showForm = true;
      });
    /* this.service.initializeFormGroup(); */
    /* this.service.form.patchValue({ $key }); */
  }

  onSubmit() {
    if (this.service.form.valid) {
      /* console.log("Form Submitted!", this.service.form.value); */
      this.service.Submit(this.service.form.value).subscribe((result) => {
        console.warn("Result is here", result);
      })
    }
  }
}
