const mongoose = require("mongoose")

const dbConnect = (app) => {
  mongoose
    .connect(
      process.env.MONGODB_URL
    )
    .then((result) => {
      const PORT = process.env.PORT
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`)
      })
      console.log("Conexión exitosa a la BBDD")
    })
    .catch((err) => console.log(err))
}

module.exports = dbConnect
