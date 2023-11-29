import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Services */
import { IPhoto, getPhotos } from '../services/photos-services';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  currentPhotoIndex: number = 0;

  /**
   * Inicializa o componente e carrega as fotos.
   */
  async ngOnInit() {
    this.photos = await getPhotos();
  }

  /**
   * Navega para a próxima foto.
   */
  navigateForward() {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    }
  }

  /**
   * Navega para a foto anterior.
   */
  navigateBackward() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }
  }
}
