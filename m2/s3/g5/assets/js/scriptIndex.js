class Prodotto {
    constructor(name, description, brand, price, imageUrl, userId) {
      this.name = name;
      this.description = description;
      this.brand = brand;
      this.price = price;
      this.imageUrl = imageUrl;
      this.userId = userId;
    }
  }
  
  let arrayDiOggetti = [
    new Prodotto("X", "4X4", "BMW", 83770, "https:www.bmw.it/content/dam/bmw/common/all-models/x-series/x6/2023/navigation/bmw-x-series-x6-m60i-modelfinder.png.asset.1675183272938.png", "0"),
    new Prodotto("Q7", "SUV", "Audi", 74000, "https://hips.hearstapps.com/hmg-prod/images/2024-audi-q7-102-6495edad98657.jpg?crop=0.642xw:0.543xh;0.300xw,0.369xh&resize=1200:*", "1"),
    new Prodotto("Z", "Crossover", "Mercedes", 95000, "https://example.com/image2.png", "2"),
    new Prodotto("X", "4X4", "BMW", 83770, "https:www.bmw.it/content/dam/bmw/common/all-models/x-series/x6/2023/navigation/bmw-x-series-x6-m60i-modelfinder.png.asset.1675183272938.png", "3"),
    new Prodotto("Y", "SUV", "Audi", 90000, "https://example.com/image1.png", "4"),
    new Prodotto("Z", "Crossover", "Mercedes", 95000, "https://example.com/image2.png", "5"),
    new Prodotto("X", "4X4", "BMW", 83770, "https:www.bmw.it/content/dam/bmw/common/all-models/x-series/x6/2023/navigation/bmw-x-series-x6-m60i-modelfinder.png.asset.1675183272938.png", "6"),
    new Prodotto("Y", "SUV", "Audi", 90000, "https://example.com/image1.png", "7"),
    new Prodotto("Z", "Crossover", "Mercedes", 95000, "https://example.com/image2.png", "8"),
    new Prodotto("Y", "SUV", "Audi", 90000, "https://example.com/image1.png", "9"),
    new Prodotto("Z", "Crossover", "Mercedes", 95000, "https://example.com/image2.png", "10")
  ];
  
  let endpointURL = "https://striveschool-api.herokuapp.com/api/product/";
  
  fetch("https://striveschool-api.herokuapp.com/api/product/",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(arrayDiOggetti),
  }).then(res => res.json())

//-------------------------------------------------------------------------------------------------------------\\

fetch("https://striveschool-api.herokuapp.com/api/product/",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
  }).then(res => res.json())
    .then(autos => {
      let target = document.querySelector("#target");

      autos.forEach(auto => {
        let clone = getCardClone();

        let img = clone.querySelector(".card-img-top");
        let brand = clone.querySelector(".card-brand");
        let title = clone.querySelector(".card-title");
        let price = clone.querySelector(".card-price");

        brand.innerText = auto.brand;
        img.src = auto.imageUrl;
        title.innerText = auto.name;
        price.innerText = `Prezzo: ${auto.price}€`;
        target.append(clone);
});
    });

function getCardClone(){
    let temp = document.getElementsByTagName("template")[0];
    return temp.content.cloneNode(true);
}
      
//-------------------------------------------------------------------------------------------------------------\\

let nuoviDati = {
  name: "Vitara",
  description: "4x4",
  brand: "Suzuki",
  price: 30000,
  imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2015/03/suzuki_vitara_ant_1.png?itok=e8SZEap7"
};

fetch("https://striveschool-api.herokuapp.com/api/product/654f89b12bcd3b0019517b24", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
  },
  body: JSON.stringify(nuoviDati),
}).then(res => res.json())

let nuoviDati2 = {
    name: "Golf",
    description: "City-car",
    brand: "Wolkswagen",
    price: 20000,
    imageUrl: "https://cdn.motor1.com/images/mgl/Z3kMz/s3/nuova-volkswagen-golf-8.webp"
  };

fetch("https://striveschool-api.herokuapp.com/api/product/654f89752bcd3b0019517b1f", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
  },
  body: JSON.stringify(nuoviDati2),
}).then(res => res.json())

let nuoviDati3 = {
    name: "A4",
    description: "4X4",
    brand: "Audi",
    price: 40000,
    imageUrl: "https://cdn.motor1.com/images/mgl/pqPrV/s3/audi-a4-avant-40-g-tron-2020.webp"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f7a2b2bcd3b0019517af1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
  },
  body: JSON.stringify(nuoviDati3),
}).then(res => res.json())

let nuoviDati4 = {
    name: "360 Modena",
    description: "GT",
    brand: "Ferrari",
    price: 100000,
    imageUrl: "https://cdn.ferrari.com/cms/network/media/img/resize/5dde934084077c3b24345e12-ferrari-360-modena-1999-intro-share?width=1080"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f7aa82bcd3b0019517af9", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati4),
  }).then(res => res.json())

  let nuoviDati5 = {
    name: "Skyline",
    description: "GT",
    brand: "Nissan",
    price: 90000,
    imageUrl: "https://cdn.motor1.com/images/mgl/lByNJ/s3/copertina-nissan-skyline-gt-r-dove-nasce-godzilla.webp"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b48", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati5),
  }).then(res => res.json())

  let nuoviDati6 = {
    name: "M3",
    description: "GT",
    brand: "BMW",
    price: 200000,
    imageUrl: "https://cdn-img.automoto.it/images/31187998/HOR_WIDE/3000x/arton126102.jpeg"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b49", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati6),
  }).then(res => res.json())

  let nuoviDati7 = {
    name: "SLK",
    description: "GT",
    brand: "Mercedes",
    price: 200000,
    imageUrl: "https://immagini.alvolante.it/sites/default/files/styles/anteprima_640/public/prossima_uscita_anteprima/2010/08/mercedes_slk_2011_01_32.jpg?itok=itH4Ml2B"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b4a", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati7),
  }).then(res => res.json())

  let nuoviDati8 = {
    name: "V40",
    description: "Station-wagon",
    brand: "Volvo",
    price: 40000,
    imageUrl: "https://cdn.auto.it/img/960/540/2017/01/25/093149360-03bb8077-419b-4c09-85af-a2330a8b6dd8.jpg"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b4b", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati8),
  }).then(res => res.json())

  let nuoviDati9 = {
    name: "Giulietta",
    description: "GT",
    brand: "Alfa Romeo",
    price: 25000,
    imageUrl: "https://www.media.stellantis.com/cache/d/9/f/0/b/d9f0b5caf52eeae43659f5283b047bcbe71761a0.jpeg"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b4c", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati9),
  }).then(res => res.json())

  let nuoviDati10 = {
    name: "Mustang",
    description: "GT",
    brand: "Ford",
    price: 120000,
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=1.00xw:0.891xh;0,0.0759xh&resize=1200:*"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8d1f2bcd3b0019517b4d", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati10),
  }).then(res => res.json())

  let nuoviDati11 = {
    name: "Stilo",
    description: "City-car",
    brand: "Fiat",
    price: 10000,
    imageUrl: "https://cdn3.focus.bg/autodata/i/fiat/stilo/stilo-192/large/b544bbd76d53703f419c25d366a963f0.jpg"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f8f632bcd3b0019517b51", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati11),
  }).then(res => res.json())

  let nuoviDati12 = {
    name: "Delta Integrale",
    description: "Rally",
    brand: "Lancia",
    price: 100000,
    imageUrl: "https://ruotedasogno-live.fra1.cdn.digitaloceanspaces.com/catalog/product/cache/2/small_image/1920x1280/e9c3970ab036de70892d86c6d221abfe/r/d/rds00490-3.jpg"
  };

  fetch("https://striveschool-api.herokuapp.com/api/product/654f9c81d6abfa0018b7e247", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRmNzQ4MjJiY2QzYjAwMTk1MTdhYzYiLCJpYXQiOjE2OTk3MDU5ODYsImV4cCI6MTcwMDkxNTU4Nn0.EgYsOhFXDiXrKAbgpqClNwD1r4jfrRVn-v0cG2skfRk"
    },
    body: JSON.stringify(nuoviDati12),
  }).then(res => res.json())