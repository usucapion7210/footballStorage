const productos = [
	{
		id: "1",
		title: "Camiseta P.S.G.",
		precio: 10000,
		categoria: "camisetas",
	},
	{
		id: "2",
		title: "Camiseta Barcelona",
		precio: 10000,
		categoria: "camisetas",
	},
	{
		id: "3",
		title: "Camiseta Real Madrid",
		precio: 10000,
		categoria: "camisetas",
	},
	{
		id: "4",
		title: "Camiseta Manchester City",
		precio: 10000,
		categoria: "camisetas",
	},
];

let producto = productos.find((camiseta) => camiseta.id === "1");
console.log(producto);

let listItems = productos.map((prod) => console.table(prod));
