class Vestito {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  
    constructor(
      id: number,
      codprod: number,
      collezione: string,
      capo: string,
      modello: number,
      quantita: number,
      colore: string,
      prezzoivaesclusa: number,
      prezzoivainclusa: number,
      disponibile: string,
      saldo: number
    ) {
      this.id = id;
      this.codprod = codprod;
      this.collezione = collezione;
      this.capo = capo;
      this.modello = modello;
      this.quantita = quantita;
      this.colore = colore;
      this.prezzoivaesclusa = prezzoivaesclusa;
      this.prezzoivainclusa = prezzoivainclusa;
      this.disponibile = disponibile;
      this.saldo = saldo;
    }

    getsaldocapo(): number {
      return this.saldo;
    }
  
    getacquistocapo(): number {
      return this.prezzoivainclusa - (this.prezzoivainclusa * (this.saldo / 100));
    }
  }
  
  let vestito1 = new Vestito(3, 1181, "inverno", "felpa", 1229, 1, "beige", 17.50, 21.35, "negozio", 50);
  
  console.log(vestito1.getsaldocapo());
  console.log(vestito1.getacquistocapo());
  
  let api = "Abbigliamento.json";
  
  fetch(api)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
  