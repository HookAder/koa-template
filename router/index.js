const Router = require('koa-router');
const router = new Router();


router.get('/test',ctx => {
  ctx.body = {
    status: 200,
    msg: 'test/接口调用成功'
  }
});

module.exports = router.routes();