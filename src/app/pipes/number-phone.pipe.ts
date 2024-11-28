import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPhone'
})
export class NumberPhonePipe implements PipeTransform {

  transform(value: string): string {
    let result = value;
    result = result.replace(result, (match: string) => {
      match = '+' + match.slice(0,3) + ' (' + match.slice(3,5) + ') ' + match.slice(5,8) + '-' + match.slice(8,10) + '-' + match.slice(10,12);
      return match;
    });
    return result;
  }
}
