class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }
  getFullname() {
    return `${this.nombre} ${this.apellido}`
  }
  addMascotas(mascota) {
    return this.mascotas.push(mascota)
  }
  countMascotas() {
    if (this.mascotas.length) {
      return this.mascotas.length
    }
  }
  addBook(libro, autor) {
    return this.libros.push({ titulo: libro, autor: autor })
  }
  getBookNames() {
    return this.libros.map((libro) => libro.titulo)
  }
}

const felipe = new Usuario('felipe', 'lopez', [], [])

console.log(felipe.getFullname())
console.log(felipe.addMascotas('perro'))
console.log(felipe.addMascotas('gato'))
console.log(felipe.countMascotas())
console.log(felipe.addBook('Un mundo feliz', 'Aldous Huxley'))
console.log(felipe.addBook('El Señor de los Anillos', 'J. R. R. Tolkien'))
console.log(felipe.getBookNames())
console.log(felipe)

