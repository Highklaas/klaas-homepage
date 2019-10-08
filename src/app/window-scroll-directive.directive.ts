import { Directive } from '@angular/core';

@Directive({
  selector: '[appWindowScrollDirective]'
})
export class WindowScrollDirectiveDirective {

  constructor() { }

  ngOnInit() {
      window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll(event) {
    const number = event;
    console.log(number);
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };
}
