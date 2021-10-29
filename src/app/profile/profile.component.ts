import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data=[

    {
      id            : '1',
      username      : 'Leo_Gary',
      name          : 'Muhammad Reza Anggawirya',
      jenis_kelamin : 'Laki-Laki',
      kota          : 'Pontianak'
    },
    {
      id            : '2',
      username      : 'Davinci_Leonardo',
      name          : 'Desvan Leonardo',
      jenis_kelamin : 'Laki-Laki',
      kota          : 'Sintang'
    },
    {
      id            : '3',
      username      : 'Habisin..!!',
      name          : 'Samsul Arifin',
      jenis_kelamin : 'Laki-Laki',
      kota          : 'Singkawang'
    },
    {
      id            : '4',
      username      : 'CalmDown..',
      name          : 'Syarif',
      jenis_kelamin : 'Laki-Laki',
      kota          : 'Tebas'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
