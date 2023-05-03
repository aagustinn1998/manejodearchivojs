class ProductManager { //Se crea una instacia de la clase llamada ProductManger 
    constructor() {
      this.products = []; //Devuelve un arreglo vacio getProduct
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) { 
      let id = Math.ceil(Math.random() * 1000); // se crea un id unico y se *1000, redondeo con math.randon
      while (this.products.find((p) => p.id === id)) { // con while verificamos si otro producto tiene las mismas caracteristicas 
        id = Math.ceil(Math.random() * 1000); // se genera una nueva id hasta que sea unica 
      }
      const newProduct = { // constante del proyecto anterior la pusheo a la matriz, la cual devuelve una id unica 
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
      return id;
    }
  
    getProductById(id) { // 
      const product = this.products.find((article) => article.id === id);  //la constante busca un producto con la misma id 
      if (!product) { // si se encuentra retorna al producto 
        throw new Error(`Producto con el id ${id} no encontrado`); // si no es encontrado devuelve este mensaje 
      }
      return product;
    }
  
    updateProduct(id, updates) { // 
      const product = this.getProductById(id); // Busca el producto con el id
      const updatedProduct = { ...product, ...updates, id }; // creamos la constante upedatedProduct y a las propiedades le asignamos un id
      const index = this.products.findIndex((article) => article.id === id); // buscamos encontrar el producto con la misma id usando findIndex
      this.products[index] = updatedProduct; 
      return updatedProduct;
    }
  
    deleteProduct(id) {
      const index = this.products.findIndex((article) => article.id === id);
      if (index < 0) { // si el indice es menor a cero devuelve el error, 
        throw new Error(`Producto con el id ${id} no encontrado`);
      }
      this.products.splice(index, 1); // Elimina el elemento encontrado de la matriz de producto 
    }
  }
  
  const productManager = new ProductManager();
  console.assert(JSON.stringify(productManager.getProducts()) === "[]"); // se agregan valores entregados en el deafio 
  
  const newId = productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
  const productsAfterAdd = productManager.getProducts(); // Se corrobora que se ha agregado el producto 
  console.assert(productsAfterAdd.length === 1);
  console.assert(productsAfterAdd[0].id === newId);
  
  const productById = productManager.getProductById(newId);
  console.assert(productById.title === "producto prueba");
  
  const updatedProduct = productManager.updateProduct(newId, {title: "producto prueba actualizado",
    description: "Este es un producto prueba actualizado",
  });
  console.assert(updatedProduct.title === "producto prueba actualizado");productManager.deleteProduct(newId);
  console.assert(productManager.getProducts().length === 0);
  


  //assert para verificar en la consola si la afirmacion en falsa
  //stringify  convierte un valor js en una cadena JSON( Reemplazando los valores sin son especificados )
  // find devuele el primer elemento de la matriz 
  