import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  produkBuku: Array<string> = ['buku 1','buku 2','buku 3','buku 4','buku 5','buku 6'];

  objBuku: Array<any> = [
    { id:1, judul: 'Buku 1' },
    { id:2, judul: 'Buku 2' },
    { id:3, judul: 'Buku 3' },
    { id:4, judul: 'Buku 4' },
    { id:5, judul: 'Buku 5' },
  ]

  tambahJudul() {
    this.objBuku.push({ id:6, judul: 'Buku Baru'});
  }

  hapusJudul(buku) {
    let index= this.objBuku.indexOf(buku);
    this.objBuku.splice(index,1);

  }

}
