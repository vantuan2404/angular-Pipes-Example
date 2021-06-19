
import { Pipe } from '@angular/core';
import { ModelAPP } from '../model.model';



interface PipeTransform {
  transform(value:ModelAPP[], ...args: ModelAPP[]):any;
}

@Pipe({
  name:'isPipeAdult',
  pure: false 
  /// set impure trigger when have value change.However, it will down performance 
})

export class PipeAdult implements PipeTransform{
  transform(array:ModelAPP[]):ModelAPP[] {
     return array.filter(x=> x.age > 18);
  }
}