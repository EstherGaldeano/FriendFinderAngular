class Animal {
    id: number;
    name: string;
    age: number;
    foto:string;
    description:string;
    protectora:string;
    contacto:string;

    constructor(props) {
        console.assert(props.name, "el nombre es obligatorio");
        console.assert(props.age, "la edad es obligatoria");
        this.id= props.id;
        this.name = props.name;
        this.age = props.age;
        this.foto=props.foto;
        this.description=props.description;
        this.protectora = props.protectora;
        this.contacto =props.contacto;

    }

    className () {
        return "Animal";
    }
}


class Cat extends Animal {
    className () {
        return "Gato";
    }
}

class Dog extends Animal {
    className () {
        return "Perro";
    }
}

export {Cat, Dog, Animal}
