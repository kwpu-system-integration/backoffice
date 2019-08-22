const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();


router.get('/', (req, res) => {

});

router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.id,
            }
        });
        if (exUser) {
            return res.status(400).send('이미 사용 중인 아이디 입니다.')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
            email: "kwon5604@naver.com",
        });
        console.log(newUser);
        return res.json(newUser);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

router.get('/:id', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {

});

module.exports = router;