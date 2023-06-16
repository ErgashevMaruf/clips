import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventPrevent]'
})
export class EventPreventDirective {

  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public prevent(event: Event) {
    event.preventDefault()
  }
}
