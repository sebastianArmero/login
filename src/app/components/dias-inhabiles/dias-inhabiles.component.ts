import { Component, OnInit } from '@angular/core';
import { DiaInhabil, DiasInhabilesService } from '../../services/dias-inhabiles.service';

@Component({
  selector: 'app-dias-inhabiles',
  templateUrl: './dias-inhabiles.component.html',
  styleUrls: ['./dias-inhabiles.component.css']
})
export class DiasInhabilesComponent implements OnInit {
  diasInhabiles: DiaInhabil[] = [];
  errorMessage: string = '';

  constructor(private diasService: DiasInhabilesService) {}

  ngOnInit(): void {
    this.cargarDias();
  }

  cargarDias(): void {
    this.diasService.listarDias().subscribe({
      next: (data) => {
        this.diasInhabiles = data;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los días inhábiles';
        console.error(err);
      }
    });
  }

  cambiarEstado(dia: DiaInhabil): void {
    const nuevoEstado = !dia.diinEstado;
    this.diasService.actualizarEstado(dia.diinId, nuevoEstado).subscribe({
      next: (updatedDia) => {
        dia.diinEstado = updatedDia.diinEstado;
        alert('Estado actualizado correctamente');
      },
      error: (err) => {
        this.errorMessage = 'Error al actualizar el estado';
        console.error(err);
        alert('Error al actualizar el estado');
      }
    });
  }
}
