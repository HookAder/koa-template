const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const chalk = require('chalk');

const app = new Koa();
const router = new Router();

// static public files. default file index.html
app.use(static('./public'));
// ctx.request.body
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// /api
router.use('/api',require('./router/index'));
// /user
router.use('/user',require('./router/user'));

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(chalk.magentaBright(`[Server started on port]: ${port}`)));
