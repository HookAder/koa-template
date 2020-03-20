const Router = require('koa-router');
const router = new Router();


router.get('/user',ctx => {
  ctx.body = {
    status: 200,
    msg: 'user/接口调用成功'
  }
});

module.exports = router.routes();