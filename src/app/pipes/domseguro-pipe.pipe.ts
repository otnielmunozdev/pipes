import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguroPipe'
})
export class DomseguroPipePipe implements PipeTransform {

  constructor(private domsanitazer:DomSanitizer){

  }

  transform(value:string, url: string): any {
    return this.domsanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
