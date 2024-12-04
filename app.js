// Debemos ordenar los productos en un top
// Para eso vamos primero a ordenarlos en base a la cantidad de VENTAS
function rankingVentas (){
    const productos = [
        { nombre: "celular", ventas:150, precio: 300000, img:"celular"},
        { nombre: "Auriculares", ventas: 120, precio: 45000, img:"auricular" },
        { nombre: "Laptop", ventas: 80, precio: 400000, img:"laptop" },
        { nombre: "Cargador", ventas: 200, precio: 10000, img:"cargador" },
        { nombre: "Mouse", ventas: 90, precio: 20000, img:"mouse" },
    ];
    
    const masVendidos = productos.sort((a,b) => b.ventas - a.ventas)
    
    console.log(masVendidos)
    
    //Ahora, vamos a mostrar los primeros 3 resultados
    const topVentas = masVendidos.slice(0,3);
    
    
    const ranking = document.getElementById('ranking')
    
    topVentas.forEach ( topVenta =>{
    const item = document.createElement('div')
    item.innerHTML= `
            <div class="masvendidos-caja">
                <img src="./img/${topVenta.img}.jpg" alt="Mas vendidos">
                <div class="masvendidos-info">
                    <h3>${topVenta.nombre}</h3>
                    <p>${topVenta.precio} $</p>
                </div>
            </div>
    `
    ranking.appendChild(item)    
    })
}

rankingVentas()
