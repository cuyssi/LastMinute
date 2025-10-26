import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateInteligente'
})
export class TruncateInteligentePipe implements PipeTransform {

    transform(value: string, maxLength: number, suffix: string = '… (seguir leyendo)'): string {
        if (!value) return '';
        if (value.length <= maxLength) return value;

        let truncated = value.slice(0, maxLength);
        const lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > 0) {
            truncated = truncated.slice(0, lastSpace);
        }

        return truncated + suffix;
    }
}
