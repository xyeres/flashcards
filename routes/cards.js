const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

function getRandomID(arr) {
    return Math.floor(Math.random() * arr.length);
};

router.get('/', (req, res) => {
    let randomID = getRandomID(data.cards);
    res.redirect(`/cards/${randomID}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    const text = cards[id][side]
    const { hint } = cards[id];
    const templateData = { id, text }

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if (side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData)
});

module.exports = router;