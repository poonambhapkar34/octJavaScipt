import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class CurrencyPipe1 implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * 100;
  }

}
