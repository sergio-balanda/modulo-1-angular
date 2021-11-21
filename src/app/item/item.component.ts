import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @HostBinding('class') classes = 'text-center';

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
