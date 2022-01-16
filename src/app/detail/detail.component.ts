import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { HeartBeatService } from '../services/heart-beat.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public restInterval: dayjs.Dayjs;
  constructor(private heartBeatService: HeartBeatService) {
    heartBeatService.restIntervalSubject.subscribe(result => {
      this.restInterval = result;
    });
   }

  ngOnInit(): void {
    //this.heartBeatService.start();
  }

  onStop() {
    this.heartBeatService.stop();
  }

  onStart() {
    this.heartBeatService.start();
  }

}
