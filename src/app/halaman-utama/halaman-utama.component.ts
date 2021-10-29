import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halaman-utama',
  templateUrl: './halaman-utama.component.html',
  styleUrls: ['./halaman-utama.component.css']
})
export class HalamanUtamaComponent implements OnInit {
  data=[

    {
      id                 : '1',
      username           : 'Leo_Gary',
      vs                 : 'vs',
      laga1              : 'Habisin..!!',
      laga2              : 'Davinci_Leonardo',
      laga3              : 'CalmDown..'
    },
    {
      id                 : '2',
      username           : 'Davinci_Leonardo',
      vs                 : 'vs',
      laga1              : 'Leo_Gary',
      laga2              : 'CalmDown..',
      laga3              : 'Habisin..!!'
    },
    {
      id                 : '3',
      username           : 'Habisin..!!',
      vs                 : 'vs',
      laga1              : 'Davinci_Leonardo',
      laga2              : 'CalmDown..',
      laga3              : 'Leo_Gary'
    },
    {
      id                 : '4',
      username           : 'CalmDown..',
      vs                 : 'vs',
      laga1              : 'Habisin..!!',
      laga2              : 'Davinci_Leonardo',
      laga3              : 'Leo_Gary'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
