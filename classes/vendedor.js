export default class Vendedor{
    constructor(nombre, tipo,montoVentas){
        this.nombre=nombre;
        this.tipo=tipo;
        this.montoVentas=montoVentas;
    }

    set nombre(n){
        this._nombre=n
    }
    get nombre(){
        return this._nombre
    }
    set tipo(t){
        this._tipo=t
    }
    get tipo(){
        return this._tipo
    }
    set montoVentas(mv){
        this._montoVentas=+mv
    }
    get montoVentas(){
        return this._montoVentas
    }

}