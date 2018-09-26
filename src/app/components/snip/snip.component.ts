import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-snip',
  templateUrl: './snip.component.html',
  styleUrls: ['./snip.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SnipComponent implements OnInit {

  content: string;

  constructor() { }

  ngOnInit() {
    this.content = 'ANIMAL LIST: ';
  }

  addAnimal(s: string) {
    this.content += s + ' ';
  }
}
