import { Component } from '@angular/core';
@Component({
  // Using systemjs sets module.id to the root directory
  // so to use templateUrl, must use absolute path
  // https://github.com/angular/angular/issues/6131
  // moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

    destroyMoon(): void {
        window.alert("You destroyed the Moon! You monster...");
      }

}
