import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Feriado } from 'src/app/models/feriado';
import { FilterService } from 'src/app/services/filter.service';
import { FeriadoService } from 'src/app/services/feriado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  feriados: Feriado[] = [];
  dataInvalida: string;
  filter: string;
  modalRef: BsModalRef;
  oneAtATime = true;

  constructor(
    private modalService: BsModalService,
    private feriadoService: FeriadoService,
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.listarFeriados();
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm modal-dialog-centered' });
  }

  confirmar(): void {
    this.modalRef.hide();
  }

  recusar(): void {
    this.modalRef.hide();
  }

  pegarFeriados(ano: string) {
    this.feriados = [];
    this.feriadoService.getFeriados(ano).subscribe(feriados => {
      this.feriados = feriados;
    },
      erro => {
        if (erro.error.type === 'feriados_range_error') {
          this.dataInvalida = erro.error.message;
        } else if (erro.error.type === 'feriados_error') {
          this.dataInvalida = erro.error.message;
        }
      }
    );
  }

  listarFeriados(): void {
    this.filterService.getFilter().subscribe(filter => {
      this.pegarFeriados(filter);
    });
  }

}
