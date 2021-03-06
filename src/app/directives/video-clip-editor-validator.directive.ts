import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[videoClipEditorValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: VideoClipEditorValidatorDirective, multi: true }]
})
export class VideoClipEditorValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    
    const start = control.get('start');
    const end = control.get('end');
    const duration = control.get('duration');
   
    if(start&&end&&end.value<start.value){
     return { 'startMajorThanEnd': true }
    }
    if(start&&start.value<0){
      return { 'startLessThanZero': true }
    }
    if(end&&duration&&end.value>duration.value){
      return { 'endMajorThanDuration': true }
    }
    return null;
  }
}