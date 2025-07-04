import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css'
})
export class PrimaryButton {
  @Input() textoBotao: string = '';
}