import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNav: boolean = true;
}
