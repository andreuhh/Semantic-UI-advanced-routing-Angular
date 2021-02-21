import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modshome',
  templateUrl: './modshome.component.html',
  styleUrls: ['./modshome.component.css']
})
export class ModshomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why the sky is blue',
      content: 'The sky is blue because...'
    },
    {
      title: 'The sky is the limit',
      content: 'The sky is the limit because...'
    },
    {
      title: 'Why the sky is blue',
      content: 'The sky is blue because...'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
