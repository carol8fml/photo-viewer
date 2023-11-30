import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Services */
import { IPhoto, getPhotos, getPhotoById } from '../services/photos-services';

/** Libs */
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css',
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  selectedPhoto: IPhoto | null = null;

  /**
   * Initializes the component and loads the photos.
   */
  async ngOnInit() {
    try {
      this.photos = await getPhotos();
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  }

  /**
   * Displays the details of a specific photo.
   *
   * @param id - The ID of the photo to view the details.
   */
  viewPhotoDetails(id: number) {
    const photo = getPhotoById(id);
    if (photo) {
      this.selectedPhoto = photo;
    } else {
      console.error('Photo not found.');
    }
  }

  /**
   * Closes the photo details modal.
   */
  closeModal() {
    this.selectedPhoto = null;
  }

  /**
   * Event listener for the "Esc" key press.
   */
  @HostListener('document:keydown.escape')
  onEscKeyHandler() {
    if (this.selectedPhoto) {
      this.closeModal();
    }
  }
}
