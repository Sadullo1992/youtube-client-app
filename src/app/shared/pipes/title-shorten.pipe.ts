import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleShorten',
})
export class TitleShortenPipe implements PipeTransform {
  transform(value: string | undefined, index: number): string | undefined {
    if (typeof value === 'string' && value?.length > index) {
      return value.slice(0, index).concat('...');
    }
    return value;
  }
}
