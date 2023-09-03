import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="h-screen w-full flex justify-center items-center">
      <div id="card" class="bg-secondary border-4 border-primary rounded-md px-10 py-5 text-center">
        <h1 id="appTitle">Lazyless</h1>
        <p class="text-lg mb-8">A tool to help you improve your work efficiency for a specific duration, from one day to up to a month.</p>
        <button routerLink="/dailyTask" class="bg-quinary text-majorText px-6 py-3 rounded-lg">Let's start</button>
      </div>

    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  buttonHandler() {
    console.log("Button clicked");
  }
}
