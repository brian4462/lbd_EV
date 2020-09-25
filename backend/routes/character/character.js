var express = require('express');
var router = express.Router();
var db = require('../../lib/db.js');

router.get('/getSurvivors', function(req, res, next) {
    console.log('/* /getSurvivors 실행 */');
    var sql = 'SELECT * FROM LBD_SURVIVORS';
    db.query(sql,function(error,survivorsList){
          if(error){
            console.error(error);
            res.send({resutCd:'E',msg:"예기치 않은 오류가 발생했습니다."});
            throw error;
          }

          res.send(survivorsList);
    });
});


module.exports = router;
