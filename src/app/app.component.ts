import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

interface stepinterface {
  label: string,
  subtext:string 
  completed: boolean, skipped: boolean, optional: boolean,active:boolean
  formgroup:FormGroup,
  icon:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})


export class AppComponent {
  title = 'ngrxdemo';
  public steps:stepinterface[]; 
  selectedIndex:number=0;

  constructor( public formbuilder:FormBuilder)
  {
    this.steps = [
      { label: 'Step 1', subtext: 'Step 1 subtext', completed: false, skipped: false, optional: false,active:true ,formgroup: this.formbuilder.group({firstctrl:['',Validators.required]}), icon:"donut_large"},
      { label: 'Step 2', subtext: 'Step 2 subtext', completed: false, skipped: false, optional: false,active:false,formgroup: this.formbuilder.group({secondctrl:['',Validators.required]}) , icon:"donut_large"},
      { label: 'Step 3', subtext: 'Step 3 subtext', completed: false, skipped: false, optional: true,active:false,formgroup: this.formbuilder.group({thirdctrl:['',Validators.required]}) , icon:"donut_large"},
      { label: 'Step 4', subtext: 'Step 4 subtext', completed: false, skipped: false, optional: false,active:false,formgroup: this.formbuilder.group({fourthctrl:['',Validators.required]}) , icon:"donut_large"},
    ];
  
  } 
  isLastStep(step: any): boolean {
    return this.steps.indexOf(step) === this.steps.length - 1;
  }

  nextStep(): void {
    const activeStep:any = this.steps.find(step => step.active);
    const index = this.steps.indexOf(activeStep);
    if (index < this.steps.length - 1) { 
      this.selectedIndex = this.selectedIndex+1;
      this.steps[index + 1].active = true;
    } 
  }
  completenext():void
  {
    const activeStep:any = this.steps.find(step => step.active);
    const index = this.steps.indexOf(activeStep);
    if (index < this.steps.length - 1) { 
      this.selectedIndex = this.selectedIndex+1;
      this.steps[index + 1].active = true;
      if(this.steps[index].completed)
      {
        this.steps[index].icon = "check_circle";
      } 
    }
    
  }

  changetext(index:any,text:string)
  {
    this.steps[index].subtext = text;
  }

  skipStep( ): void {
    
    const activeStep:any = this.steps.find(step => step.active);
    const index = this.steps.indexOf(activeStep);
    if (index < this.steps.length - 1) {
      this.selectedIndex = this.selectedIndex+1;
      this.steps[index].skipped = true;
      this.steps[index + 1].active = true;
      this.steps[index].icon = "remove_cricle";
    }
  }
}
