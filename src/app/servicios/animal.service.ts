import { Injectable } from '@angular/core';
import { Animal, Dog, Cat } from '../components/animals/animal'

//propiedad que permite utilizar este servicio en otros módulos
@Injectable()

//Creamos los objetos dentro del service en lugar de en la clase
//Para ello importamos la clase Animal y las que heredan de ella en este caso
export class AnimalService {

  animals: Animal[] = [
    new Cat({
      id: 1,
      name: "Duna",
      age: 1,
      foto:"../../assets/img/duna.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 2,
      name: "Monin",
      age: 5,
      foto: "../../assets/img/monin.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 3,
      name: "Metis",
      age: 1,
      foto: "../../assets/img/metis.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 4,
      name: "Berto",
      age: 1,
      foto: "../../assets/img/berto.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 5,
      name: "Ray",
      age: 1,
      foto: "../../assets/img/flou.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 6,
      name: "Greta",
      age: 1,
      foto: "../../assets/img/greta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 7,
      name: "Flou",
      age: 1,
      foto: "../../assets/img/flou_.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Cat({
      id: 8,
      name: "Viggo",
      age: 1,
      foto: "../../assets/img/viggo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),


    new Dog({
      id: 9,
      name: "Nelson",
      age: 2,
      foto: "../../assets/img/nelson.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 10,
      name: "Tecnic",
      age: 2,
      foto: "../../assets/img/tecnic.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 11,
      name: "Gordo",
      age: 2,
      foto: "../../assets/img/gordo.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 12,
      name: "Rocky",
      age: 2,
      foto: "../../assets/img/rocky.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 13,
      name: "Gucci",
      age: 2,
      foto: "../../assets/img/gucci.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 14,
      name: "Puzzle",
      age: 2,
      foto: "../../assets/img/puzzle.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 15,
      name: "Duque",
      age: 2,
      foto: "../../assets/img/duque.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),

    new Dog({
      id: 16,
      name: "Red",
      age: 2,
      foto: "../../assets/img/red.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla tellus, viverra vitae mattis non, facilisis vitae lectus. Vestibulum vel congue orci. Sed est arcu, gravida ac enim nec, sagittis lacinia justo. Nullam tincidunt, nibh a varius laoreet, nibh enim scelerisque nisi, sit amet accumsan risus nibh in urna. Sed facilisis elementum ligula eu pharetra. Curabitur ultricies, felis eget lobortis consequat, nunc lectus luctus ligula, vel tristique massa est vitae dolor. Aenean eleifend risus nulla, sit amet luctus nunc laoreet vitae. Cras ut libero nulla. Suspendisse potenti. Aenean vulputate mauris diam, et eleifend justo cursus eu. In ut elit sed purus blandit eleifend vel eu quam. Vestibulum auctor mi justo, eu auctor purus dictum eget. Vestibulum at libero a turpis facilisis vehicula. Suspendisse fermentum massa dapibus mi interdum, rhoncus pellentesque mi aliquet. Donec id mollis augue, a molestie magna. Maecenas luctus magna porttitor diam ornare, sed aliquam felis feugiat. ",
      protectora: "APAG Granollers",
      contacto: "Telèfon: 93 840 27 77 | Mail: info@protectoragranollers.org",
    }),
  ];


  constructor() { }

  /*Este método gestiona la grid de Animales

  En todos muestra un random de animales
  En la pestaña Perros y Gatos solo perros o gatos ordenados random*/

  getAnimals(selectedClass: string) {
    if (!selectedClass) {
      return this.animals.sort(() => Math.random() - 0.5);
    } else if (selectedClass == "Dog") {
      return this.animals.filter(animal => animal instanceof Dog)
    } else if (selectedClass == "Cat") {
      return this.animals.filter(animal => animal instanceof Cat)
    }
  }

  getAnimal(id) {
    return this.animals.find(a => a.id == id);
  }
}
