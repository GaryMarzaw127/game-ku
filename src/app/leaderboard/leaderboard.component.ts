import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  data=[

    {
      rank                  : '1',
      username              : 'Leo_Gary',
      poin                  : '80',
      total_pertandingan    : '5',
      kemenangan            : '4',
      kekalahan             : '1'
    },
    {
      rank                  : '2',
      username              : 'Habisin..!!',
      poin                  : '70',
      total_pertandingan    : '5',
      kemenangan            : '3',
      kekalahan             : '2'
    },
    {
      rank                  : '3',
      username              : 'Davinci_Leonardo',
      poin                  : '50',
      total_pertandingan    : '5',
      kemenangan            : '2',
      kekalahan             : '3'
    },
    {
      rank                  : '4',
      username              : 'CalmDown..',
      poin                  : '40',
      total_pertandingan    : '5',
      kemenangan            : '1',
      kekalahan             : '4'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
