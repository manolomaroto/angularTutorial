import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manolo\'s application';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
