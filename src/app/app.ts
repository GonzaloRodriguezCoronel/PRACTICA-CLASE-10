
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener
} from '@angular/core';

import 'aframe';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Posicion inicial del nombre
  x = 0;
  y = 0;
  z = -4;

  velocidad = 0.25;

  @HostListener('window:keydown', ['$event'])
  moverNombre(event: KeyboardEvent): void {

    const nombre = document.getElementById('nombre3d');

    if (!nombre) return;

    switch (event.key) {

      case 'ArrowUp':
        this.z -= this.velocidad;
        break;

      case 'ArrowDown':
        this.z += this.velocidad;
        break;

      case 'ArrowLeft':
        this.x -= this.velocidad;
        break;

      case 'ArrowRight':
        this.x += this.velocidad;
        break;

      case 'q':
      case 'Q':
        this.y += this.velocidad;
        break;

      case 'e':
      case 'E':
        this.y -= this.velocidad;
        break;

      default:
        return;
    }

    event.preventDefault();

    nombre.setAttribute(
      'position',
      `${this.x} ${this.y} ${this.z}`
    );
  }
}
