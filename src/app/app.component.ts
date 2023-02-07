import {Component, OnInit} from '@angular/core';
import { IProduct } from './models/product';
import {ProductsService} from "./service/products.service";
import {tap, Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular market';

  loading = false;
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() :void {
this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(()=>this.loading = false))
  }
}
