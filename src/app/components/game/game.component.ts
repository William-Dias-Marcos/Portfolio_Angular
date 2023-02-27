import { Component } from '@angular/core';

import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  technologies: string[] = [];
  gameService: GameService;

  card1: string = '';
  cardClass1: any;
  card2: string = '';
  cardClass2: any;

  constructor(_gameService: GameService) {
    this.gameService = _gameService;
  }
  ngOnInit() {
    this.technologies = this.gameService.technologies;
    this.shuffleCards();
  }

  // vira as cartas
  flipCard(event: any, technology: string) {
    if (this.card1 === '') {
      let card = event.target.closest('.card');
      card.classList.add('flip');
      this.cardClass1 = card;
      this.card1 = technology;
    } else if (this.card2 === '') {
      let card = event.target.closest('.card');
      card.classList.add('flip');
      this.cardClass2 = card;
      this.card2 = technology;

      this.checkMatchCards(
        this.card1,
        this.card2,
        this.cardClass1,
        this.cardClass2
      );
    }
  }

  // verifica se cards são iguais
  checkMatchCards(
    card1: string,
    card2: string,
    cardClass1: any,
    cardClass2: any
  ) {
    setTimeout(() => {
      if (card1 != card2) {
        cardClass1.classList.remove('flip');
        cardClass2.classList.remove('flip');
      }
      this.card1 = '';
      this.card2 = '';
    }, 1000);
  }

  // embaralhas as cartas
  shuffleCards() {
    let currentIndex = this.technologies.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.technologies[randomIndex], this.technologies[currentIndex]] = [
        this.technologies[currentIndex],
        this.technologies[randomIndex],
      ];
    }
  }
}
