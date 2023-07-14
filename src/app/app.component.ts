import { Component, ViewChild } from '@angular/core';

interface ShoppingItem {
  id: number,
  nombre: string,
  costo: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejercicio-angular-xacademy';
  showList = true;


  shoppingList: ShoppingItem[] = [
    { id: 1,nombre: 'Leche', costo: 20 },
    { id: 2,nombre: 'Pan', costo: 10 },
    { id: 3,nombre: 'Huevos', costo: 30 },
    { id: 4,nombre: 'Carne', costo: 100 },
    { id: 5,nombre: 'Pescado', costo: 90 },
  ]

  toggleList() {
    this.showList = !this.showList;
  }

}
