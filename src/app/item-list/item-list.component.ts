import { Item } from './../model/item.model';

import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../services/items.service';
import { Init } from '../init-items';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemsService: ItemsService) { }


  ngOnInit(): void {
    this.items = this.itemsService.onGet();
  }

  onDelete(id: Number) {
    this.itemsService.onDelete(id);
  }
}
