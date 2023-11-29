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

  async ngOnInit() {
    this.photos = await getPhotos();
  }
}
