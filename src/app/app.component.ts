import { Component, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log('complete'),
    });

    /**8_3_2022 Exercise: Define an observable that emits 2 strings and subscribe with methods next, error, complete */
    of('nectarine0', 'nectarine1', 'nectarine2').subscribe({
      next: (fruit) => console.log(`I just ate ${fruit}`),
      error: (err) => console.error(`An ${err} occurred`),
      complete: () => console.log('Exercise 1a Complete.'),
    });

    from(['nectarine3', 'nectarine4', 'nectarine5']).subscribe({
      next: (fruit) => console.log(`I just ate ${fruit}`),
      error: (err) => console.error(`An ${err} occurred`),
      complete: () => console.log('Exercise 1b Complete.'),
    });
  }
}
