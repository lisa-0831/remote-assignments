const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>')
})
  
router.get('/data', (req, res) => {
    var compute;
    if (typeof(req.query.number) === 'undefined'){
      compute = 'Lack of Parameter';
    }else if (isNaN(req.query.number) || (req.query.number) <= 0){
      compute = 'Wrong Parameter';
    }else{
      compute = ((1 + Number(req.query.number)) * Number(req.query.number))/2;
    }
    res.send(`${compute}`)
});
  
router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
      res.render('myname', { name });
    } else {
      res.render('trackname');
    }
});
  
router.get('/trackName', (req, res) => {
    if (typeof(req.query.name) !== 'undefined'){
      res.cookie('username', req.query.name);
    }
    res.redirect('/myName');
});

router.post('/trackName', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/trackname');
});
  
router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/myName');
});

module.exports = router;