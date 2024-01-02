import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="min-h-screen w-full flex flex-col justify-center items-center">
      <h1
        id="appTitle"
        class="!font-heading !text-5xl sm:!text-6xl md:!text-7xl xl:!text-8xl !font-semibold leading-none !mb-8 text-third"
      >
        Introducing Lazyless
      </h1>
      <p class="text-2xl text-gray-400 mb-8">
        A tool to help you improve your work efficiency for a specific duration,
        from one day to up to a month.
      </p>
      <div class="my-4">
        <button
          class="group inline-flex w-full md:w-auto h-14 mb-4 md:mr-3 px-7 items-center justify-center text-base font-medium text-third hover:text-white bg-fifth hover:bg-primary  transition duration-200 rounded-full"
          routerLink="/dailyTable"
        >
          Start with daily table
        </button>
        <button
          class="group inline-flex w-full md:w-auto h-14 mb-4 md:mr-3 px-7 items-center justify-center text-base font-medium text-third hover:text-white bg-fifth hover:bg-primary transition duration-200 rounded-full"
          routerLink="/dailyLog"
        >
          Start with daily log
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  buttonHandler() {
    console.log('Button clicked');
  }
}
