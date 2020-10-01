import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "hello"
  time;

  constructor() { }

  ngOnInit(): void {
    fetch("/api/current-time").then(async (res) => {
      return await res.json()
    }).then((res) => console.log(res))
  }


}
