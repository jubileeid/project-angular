import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  // templateUrl: './about.component.html',
  template: `
  <h1>
    {{ about }}
  </h1>
  <ul>
    <li *ngFor="let infoalamat of alamat">
      {{ infoalamat }}
    </li>
  </ul>
  `,

  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  about = 'Tentang Kami (Dibuat menggunakan properti template dan variabel)';
  alamat = ["Yogyakarta", "No Telp: 0274123456"];
}
