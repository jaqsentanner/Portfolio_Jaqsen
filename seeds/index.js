const sequelize = require('../config/connection');
const Contact = require('../models/contactForm');
const formData = require('./form-seeds.json');

const seedDataBase = async () => {
    await sequelize.sync({ force:true });

    await Contact.bulkCreate(formData, {
        individualHooks: true,
        returning:true,
    });

    process.exit(0);
};

seedDataBase();