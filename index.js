const express = require('express');
const app = express();

app.use(express.json({
    limit: '50mb'
}));

app.get('/',(req, res)=>{
    res.send('hello');
});

const productRouter = require('./src/routers/product.route');
app.use('/api/product',productRouter);

const customerRouter = require('./src/routers/customer.route');
app.use('/api/customer',customerRouter);

const colorRouter = require('./src/routers/color.route');
app.use('/api/color',colorRouter);

const brandRouter = require('./src/routers/brand.route');
app.use('/api/brand',brandRouter);

const billRouter = require('./src/routers/bill.route');
app.use('/api/bill',billRouter);

const billDetailRouter = require('./src/routers/billDetail.route');
app.use('/api/bill_detail',billDetailRouter);

const cartRouter = require('./src/routers/cart.route');
app.use('/api/cart',cartRouter);

const roleRouter = require('./src/routers/role.route');
app.use('/api/role',roleRouter);

const port=3000;
app.listen(port, ()=>{
    console.log('Express server is running at port ${port}');
});
