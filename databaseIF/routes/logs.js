var express = require('express');
var router = express.Router();



//전체 로그 목록 조회
/* GET users listing. */
router.get('/', function(req, res, next) {
});
// 특정 로그 정보 조회
router.get('/:id', function(req, res, next){
});

// 로그 정보 추가
router.post('/', function(req, res, next){
});
// 로그 정보 삭제
router.delete('/:id', function(req, res, next){
});

module.exports = router;
