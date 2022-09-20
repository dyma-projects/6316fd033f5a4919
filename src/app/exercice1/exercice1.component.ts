import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  type: string = "date";
  title: string = "un petit tittre";

  constructor() {}

  ngOnInit(): void {}

  paragraphClick($event: Event) {
    console.log($event);
  }
}
