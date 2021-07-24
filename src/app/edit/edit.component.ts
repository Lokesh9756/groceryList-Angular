import { ItemsService } from './../services/items.service';
import { Item } from './../model/item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  header: string;
  item: Item = {
    id: 0,
    name: "",
    unit: 0,
    price: 0,
    total: 0,
    grandtotal: 0

  }
  constructor(private router: Router, private route: ActivatedRoute, private itemservice: ItemsService) {
    this.id = 1;
    this.header = 'dasjs'
  }

  ngOnInit(): void {
    this.id = +String(this.route.snapshot.paramMap.get("id"))
    this.header = this.id === 0 ? 'Add item' : 'Edit item';
    if (this.id != 0) {
      this.item = this.itemservice.onGetitem(this.id)!
    }
  }
  onSubmit(form: NgForm) {
    let item: Item = {
      id: form.value.id,
      name: form.value.name,
      unit: form.value.unit,
      price: form.value.price,
      total: form.value.price * form.value.unit,
      grandtotal: 0
    }

    if (this.id == 0) {
      this.itemservice.onAdd(item);
    }
    else {
      this.itemservice.onUpdate(item)
    }
    this.router.navigateByUrl("");
  }
}
