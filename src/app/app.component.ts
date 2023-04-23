import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Step {
  label: string;
  subtext: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'ngrxdemo';
  steps = [
    { label: 'Step 1', subtext: 'Step 1 subtext', content: 'Content for Step 1', completed: false, skipped: false, optional: false,active:false },
    { label: 'Step 2', subtext: 'Step 2 subtext', content: 'Content for Step 2', completed: false, skipped: false, optional: false,active:true },
    { label: 'Step 3', subtext: 'Step 3 subtext', content: 'Content for Step 3', completed: false, skipped: true, optional: true,active:false },
    { label: 'Step 4', subtext: 'Step 4 subtext', content: 'Content for Step 4', completed: false, skipped: false, optional: false,active:false },
  ];

  isLastStep(step: any): boolean {
    return this.steps.indexOf(step) === this.steps.length - 1;
  }

  nextStep(): void {
    const activeStep:any = this.steps.find(step => step.active);
    const index = this.steps.indexOf(activeStep);
    if (index < this.steps.length - 1) {
      this.steps[index].completed = true;
      this.steps[index + 1].active = true;
    }
  }

  changetext(index:any,text:string)
  {
    this.steps[index].content = text;
  }

  skipStep( ): void {
    // step.skipped = true;
    // const activeStep:any = this.steps.find(step => step.active);
    // const index = this.steps.indexOf(activeStep);
    // if (index < this.steps.length - 1) {
    //   this.steps[index].completed = true;
    //   this.steps[index + 1].active = true;
    // }
  }
}
