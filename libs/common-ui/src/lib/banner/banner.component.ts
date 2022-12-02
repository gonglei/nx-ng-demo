import { Component, Input } from '@angular/core';

@Component({
  selector: 'myorg-banner',
  template: `<header>{{ text }}</header>`,
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() text = '';
}
