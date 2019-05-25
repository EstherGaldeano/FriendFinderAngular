import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animals/animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../servicios/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  @Input() animal: Animal;

  private sub: any;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.animal = this.animalService.getAnimal(+params['id']);
    });

    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}



