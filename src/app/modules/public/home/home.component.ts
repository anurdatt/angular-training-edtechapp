import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CartService } from 'src/app/services/cart.service';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];
  constructor(private catalogService: CatalogService, private cartService: CartService) { }


  ngOnInit(): void {
    this.catalogService.GetAll().subscribe(response => {
      if (response.status == 200 && response.body != null)
        this.courses = response.body;
    });
  }

  AddToCart(course: Course): void {
    this.cartService.AddToCart(course.id, course.name, course.imageUrl, course.unitPrice, 1);
  }


}
