const products= [
      {
        id: '1',
        nombre: "Remera Azul",
        precio: 19.99,
        categoria: "Remeras",
        imagen: "remera_azul.jpg",
        stock: 10,
        descripcion: "Una remera de color azul con un diseño moderno."
      },
      {
        id: '2',
        nombre: "Remera Blanca",
        precio: 24.99,
        categoria: "Remeras",
        imagen: "remera_blanca.jpg",
        stock: 5,
        descripcion: "Una remera de color blanco con un estampado elegante."
      },
      {
        id: '3',
        nombre: "Buzo Gris",
        precio: 39.99,
        categoria: "Buzos",
        imagen: "buzo_gris.jpg",
        stock: 8,
        descripcion: "Un buzo de color gris perfecto para el invierno."
      },
      {
        id: '4',
        nombre: "Buzo Negro",
        precio: 44.99,
        categoria: "Buzos",
        imagen: "buzo_negro.jpg",
        stock: 3,
        descripcion: "Un buzo de color negro con capucha y bolsillos."
      },
      {
        id: '5',
        nombre: "Camisa a Cuadros",
        precio: 29.99,
        categoria: "Camisas",
        imagen: "camisa_cuadros.jpg",
        stock: 12,
        descripcion: "Una camisa de cuadros en tonos azules y rojos."
      },
      {
        id: '6',
        nombre: "Camisa Blanca",
        precio: 34.99,
        categoria: "Camisas",
        imagen: "camisa_blanca.jpg",
        stock: 6,
        descripcion: "Una camisa formal de color blanco para ocasiones especiales."
      }
]

export const getProducts=()=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(products)
    }, 500);
  })
}

export const getProductById=(productId)=>{
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(products.find(prod=>prod.id===productId))
    }, 500);
  })
}