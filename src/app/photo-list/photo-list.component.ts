import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Services */
import { IPhoto, getPhotos, getPhotoById } from '../services/photos-services';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  selectedPhoto: IPhoto | null = null;

  /**
   * Inicializa o componente e carrega as fotos.
   */
  async ngOnInit() {
    try {
      this.photos = await getPhotos();
    } catch (error) {
      console.error('Erro ao carregar fotos:', error);
    }
  }

  /**
   * Exibe os detalhes de uma foto específica.
   *
   * @param id - O ID da foto para visualizar os detalhes.
   */
  viewPhotoDetails(id: number) {
    const photo = getPhotoById(id);
    if (photo) {
      this.selectedPhoto = photo;
    } else {
      console.error('Foto não encontrada.');
    }
  }

  /**
   * Fecha o modal de detalhes da foto.
   */
  closeModal() {
    this.selectedPhoto = null;
  }
}
