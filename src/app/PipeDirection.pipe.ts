import { Pipe } from "@angular/core";

interface Pipetransform{
  transform(value:boolean, ...args:any[]): any;
}

@Pipe({
  name:'PipeDirection'
})

export class PipeDirection implements Pipetransform{
  transform(
      nameButton: boolean,
      left: string = 'Left to Right',
      right: string = 'Right to Left'
      ){
    return nameButton?  left : right ;
  }
}