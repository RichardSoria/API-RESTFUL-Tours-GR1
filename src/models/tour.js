const tourModel = {
    async getAllToursModel(){
        try {
            const peticion = await fetch('http://localhost:4000/tours')
            const tours = await peticion.json()
            return tours 
        } catch (error) {
            console.log(error)
        }
        
    },
    async getTourModel(tourID){
        try {
            const peticion = await fetch(`http://localhost:4000/tours/${tourID}`)
            const tour = await peticion.json()
            return tour
        } catch (error) {
            console.log(error)
        }
    },

    async createTourModel(newTour){
        const url = "http://localhost:4000/tours"
        const peticion = await fetch(url,{
            method:"POST",
            body:JSON.stringify(newTour),
            headers:{"Content-Type":"application/json"}
        })

        const data = await peticion.json()

        return data
    },
    async updateTourModel (tourID,updatedTour){
        // CONEXIÓN BDD
        const url = `http://localhost:4000/tours/${tourID}`
        // ENVIAR DATA A LA BDD
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updatedTour),
            headers:{"Content-Type":"application/json"}
        })

        // OBTENER RESPUESTA DE LA BDD
        const data = await peticion.json()

        return data
    },
    async deleteTourModel(tourID){
        const url = `http://localhost:4000/tours/${tourID}`
        const peticion = await fetch(url,{
            method:"DELETE"
        })

        const data = await peticion.json()

        return data
    }
}

// Exportar un solo elemento
export default tourModel