// JavaScript Document
var datos={};
var misDatos=info=>{
	console.log(info);
	datos.productos=info;
	var html="";
	html+="<h2>Productos</h2>";
	html+="<table>"
	/*
	width=&amp;quot;1200&amp;quot; align=&amp;quot;center&amp;quot;
	*/
	html+="<tbody>"
	html+="<tr>"
	html+="<td>ID</td>"
	html+="<td>Nombre</td>"
	html+="<td>Talla</td>"
	html+="<td>Precio</td>"
	html+="<td>En inventario</td>"
	html+="</tr>"
	html+="<tr>"
	datos.productos.map(producto=>{
		/*
		html+="<td>"+producto.id+"</td>";
		html+="<td>"+producto.nombre+"</td>";
		html+="<td>"+producto.talla+"</td>";
		html+="<td>"+producto.precio+"</td>";
		html+="<td>"+producto.inve+"</td>";
		*/
		
		for(let propiedad of Object.keys(producto)){
			html+="<td>"+producto[propiedad]+"</td>";
		}
		html+="<tr>"
	});
	html+="</table>";
	document.getElementById("resultados").innerHTML=html;
}
