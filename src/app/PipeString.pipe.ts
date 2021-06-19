import { Pipe } from "@angular/core";

interface Pipetransform{
  transform(value: any, ...args: any[]): any;
}

@Pipe({
  name:'PipeContent'
})

export class PipeTitle implements Pipetransform{
  transform(title: String){
    return title.toUpperCase();
  }
}
