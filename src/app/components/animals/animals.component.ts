import { Component, OnInit } from '@angular/core';
import { Animal} from './animal';
import { AnimalService } from '../../servicios/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {

  selectedClass: string;

  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {

    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }


}
