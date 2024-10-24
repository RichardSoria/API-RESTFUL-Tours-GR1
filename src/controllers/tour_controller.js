import tourModel from '../models/tour.js'

const getAlltourControll = async(req,res) => {
    try {
        const tours = await tourModel.getAllToursModel()
        res.status(200).json(tours)
    } catch (error) {
        console.log(error)
    }
}

// Exportación nombrada - Exportar varios elementos
export {
    getAlltourControll
}