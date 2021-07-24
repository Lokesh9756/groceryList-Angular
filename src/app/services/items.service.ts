import { Init } from './../../../../../angular/Grocery/src/app/init-items';
import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends Init {

  total = 0;
  items: Item[] = JSON.parse(localStorage.getItem('items')!);;
  constructor() {
    super();
    this.load;
  }
  onGet() {
    this.total = 0;
    for (var it of this.items) {
      this.total += it.total
    }
    for (var it of this.items) {
      it.grandtotal = this.total
    }
    localStorage.setItem('items', JSON.stringify(this.items));
    return (this.items)
  }
  onGetitem(id: Number) {
    return this.items.find(x => x.id == id)

  }
  onAdd(item: Item) {
    let flag = 0;
    for (var it of this.items) {
      if (it.id == item.id)
        flag = 1;
    }
    if (flag == 0) {
      this.items.push(item)
    }
    else {
      alert("can't add another item with same id in list")
    }


  }
  onDelete(id: Number) {
    this.total = 0;

    let item = this.items.find(x => x.id == id);
    let index = this.items.indexOf(item!, 0);
    this.items.splice(index, 1);
    if (this.items) {
      for (var it of this.items) {
        this.total += it.total

      }
      console.log(this.total)
      if (this.total > 0) {
        for (var it of this.items) {
          it.grandtotal = this.total
        }
      }
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  onUpdate(item: Item) {
    let olditem = this.items.find(x => x.id == item.id)!
    olditem.unit = item.unit;
    olditem.name = item.name;
    olditem.price = item.price;
    olditem.total = item.unit * item.price
  }
}
