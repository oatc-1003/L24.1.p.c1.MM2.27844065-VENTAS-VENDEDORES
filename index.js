// 8. VENTAS VENDEDORES
// Se conoce el nombre, tipo de vendedor (1=Mayorista, 2=Minorista) y monto de ventas de
// varios vendedores. Se desea determinar Monto total de la ventas de los vendedores Mayoristas
// y mayor venta realizada por los vendedores tipo mayorista.
// Se dispone de los siguientes datos de varias vendedores: (nombre, tipo de vendedor, monto
// venta) (Mary, 1, 150), (José, 1, 135), (Carlos, 2, 160), (Pedro, 2, 75)
// Monto total de las ventas de los vendedores tipo mayorista: 285$
// Monto mayor venta realizada por los vendedores tipo mayorista: 150$

import GrupoVendedores from "./classes/grupoVendedores.js";
import Vendedor from "./classes/vendedor.js";

let _vendedor1=new Vendedor("Mary",1,150);
let _vendedor2=new Vendedor("Jose",1,135);
let _vendedor3=new Vendedor("Carlos",2,160);
let _vendedor4=new Vendedor("Pedro",2,75);

let _grupo=new GrupoVendedores()

_grupo.procesarVendedor(_vendedor1)
_grupo.procesarVendedor(_vendedor2)
_grupo.procesarVendedor(_vendedor3)
_grupo.procesarVendedor(_vendedor4)

document.body.innerHTML=`
<br>
Monto total de las ventas de los vendedores tipo mayorista: ${_grupo.acuVentasMayoristas}$
<br>
Monto mayor venta realizada por los vendedores tipo mayorista: ${_grupo.mayorVentaMayorista}$
`