import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private certificados: Certificado[] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado) {
    this.certificados.push(certificado);
  }

  getCertificados() {
    return this.certificados;
  }
}
