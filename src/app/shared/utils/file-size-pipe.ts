import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import { LocaleService } from '../../core/locale/locale.service';
import { fileSize } from 'filesize';

/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
 */

@Pipe({
  name: 'dsFileSize',
})
export class FileSizePipe implements PipeTransform {

  constructor(private localeService: LocaleService) {}

  transform(bytes: number = 0, precision: number = 2): string {
    return fileSize(bytes, {
      standard: 'jedec',
      round: precision,
      locale: this.localeService.getCurrentLanguageCode(),
    });
  }
}
