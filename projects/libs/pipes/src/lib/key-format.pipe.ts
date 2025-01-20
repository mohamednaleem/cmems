import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyFormat',
  standalone: true,
})
export class KeyFormatPipe implements PipeTransform {
  transform(value: string): string {
    return this.formatKey(value);
  }

  private formatKey(key: string): string {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
