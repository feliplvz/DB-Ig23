import fs from 'fs'

class contenedor {
  constructor(path) {
    this.path = path
  }

  getAll = async () => {
    try {
      if (fs.existsSync(this.path)) {
        let info = await fs.promises.readFile(this.path, 'utf-8')
        let products = JSON.parse(info)
        return products
      } else {
        console.log
      }
    } catch (error) {
      console.log(error)
    }
  }

  save = async (title, price) => {
    let producto = {
      title: title,
      price: price,
    }
    let stock = await this.getAll()
    try {
      if (stock.length === 0) {
        producto.id = stock.length + 1
        stock.push(producto)
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(stock, null, '\t')
        )
      } else {
        producto.id = stock[stock.length - 1].id + 1
        stock.push(producto)
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(stock, null, '\t')
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  getById = async (number) => {
    let stock = await this.getAll()
    try {
      let filter = stock.find((e) => e.id == number)
      return filter
    } catch (error) {
      console.log(error)
    }
  }

  deleteById = async (number) => {
    let stock = await this.getAll()
    try {
      let filter = stock.filter((product) => product.id != number)
      await fs.promises.writeFile(this.path, JSON.stringify(filter, null, '\t'))
    } catch (error) {
      console.log(error)
    }
  }

  deleteAll = async () => {
    try {
      await fs.promises.writeFile(this.path, JSON.parse('[]'))
    } catch (error) {
      console.log(error)
    }
  }
}


  getCatchByID = async () => {
    let stock2 = await this.getAll()
    try {
      let filter2 = stock.filter2((producto) => producto.id != number)
      await fs.promises.writeFile(this.path, JSON.parte('[]'))
    } catch (error) {
      console.log(error)
    }
  }

let path = new contenedor('productos.json')

path.save('computadora', 1000)
path.save('escritorio', 500)
path.getById(2).then((val) => console.log(val))
path.deleteById(2)
//path.deleteAll()
