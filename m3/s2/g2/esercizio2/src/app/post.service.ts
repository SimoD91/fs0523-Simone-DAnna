import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPost() {
    throw new Error('Method not implemented.');
  }
   postArray = [
    {
      "id": 0,
      "body": "Il mondo di sera",
      "title": "Buonasera mondo",
      "active": true
    },
    {
      "id": 1,
      "body": "Il mondo di giorno",
      "title": "Buongiorno mondo",
      "active": true
    },
    {
      "id": 2,
      "body": "Il mondo di pomeriggio",
      "title": "Buonpomeriggio mondo",
      "active": true
    }
  ];
  constructor() {

   }
}
