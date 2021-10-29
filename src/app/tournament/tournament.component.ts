import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  data=[

    {
      id            : '1',
      username      : 'Leo_Gary',
      kota          : 'Pontianak',
      detail        : 'Real Madrid'
    },
    {
      id            : '2',
      username      : 'Davinci_Leonardo',
      kota          : 'Sintang',
      detail        : 'Chelsea'
    },
    {
      id            : '3',
      username      : 'Habisin..!!',
      kota          : 'Singkawang',
      detail        : 'Juventus'
    },
    {
      id            : '4',
      username      : 'CalmDown..',
      kota          : 'Tebas',
      detail        : 'Arsenal'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
