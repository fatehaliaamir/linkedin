const path = require('path');

//external requirements
const express = require('express');
const bodyParser = require('body-parser');

//local requirements
const errorController = require('./controllers/error');
const sequelize = require('./utils/database');

//----------

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the EJS template
app.get('/', (req, res) => {
    res.render('index');
});

//Routes
//------------
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

//Using Routes
//------------
app.use(userRoutes);
app.use(postRoutes);

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

const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

