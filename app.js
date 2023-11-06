const path = require('path');

//external requirements
const express = require('express');
const bodyParser = require('body-parser');

//local requirements
const errorController = require('./controllers/error');
const sequelize = require('./util/database');




//----------

const app = express();

//Routes
//------------
//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

//Using Routes
//------------
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

//Associations
//------------
// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });



