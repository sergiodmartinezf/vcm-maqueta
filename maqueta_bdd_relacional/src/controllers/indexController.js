// Petición GET con página dinámica (muestra index)
const mostrarIndex = async (req,res) => {
    try {
        res.render("index", {tituloDinamico: "Título Dinámico"}); 
    } catch (error) {
        console.log(error);
    }
};

// Exportar router
module.exports = {mostrarIndex};
