const db = require('../database/models')

const Testimonials = {

    getTestimonials: async function () {
        try {
            const res = await db.testimonials.findAll();
            return res;        
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = Testimonials;
