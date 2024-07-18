export default class GrupoVendedores{
    constructor(){
        this.NUMEROS_TIPOS=[1,2]//1=Mayorista, 2=Minorista
        this.acuVentasMayoristas=0;
        this.mayorVentaMayorista=0;
    }

    procesarVendedor(vendedor){
        if( vendedor.tipo === this.NUMEROS_TIPOS[0]){
            this.acuVentasMayoristas+=vendedor.montoVentas
            if(vendedor.montoVentas>this.mayorVentaMayorista){
                this.mayorVentaMayorista=vendedor.montoVentas
            }
        }
    }

}