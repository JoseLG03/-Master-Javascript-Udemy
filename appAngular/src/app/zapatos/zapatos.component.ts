import {Component, OnInit} from '@angular/core';
import {Zapato} from '../models/zapato';

@Component({
    selector: 'zapatos',
    templateUrl: './zapatos.component.html'
})
export class ZapatosComponent implements OnInit{
    public titulo: string;
    public zapatos_array: Array<Zapato>;
    public marcas : string[];

    constructor() {
        this.titulo = "Componente de zapatos";
        this.marcas = new Array;
        this.zapatos_array = [
            new Zapato('Reebook Classic', 600,'Reebook','Blanco', true),
            new Zapato('Nike Velociraptor',800,'Nike','Rojo', false),
            new Zapato('Nike Fuego', 700,'Nike','Negro', true),
            new Zapato('Adidas 1980', 900,'Adidas','Azul', true),
            new Zapato('Adidas 1960', 670,'Adidas','Azul', true)
        ];
    }

    getMarcas(){
        this.zapatos_array.forEach((value, index) =>{
            if ( this.marcas.indexOf(value.marca) <0 ){
                this.marcas.push(value.marca);
            }
        });
        console.log(this.marcas);
    };

    ngOnInit(){
        this.getMarcas();
        console.log(this.zapatos_array);
    }
    
};