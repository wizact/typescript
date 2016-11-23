var Lambda;
(function (Lambda) {
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit] };
            };
        }
    };
    var hand = deck.createCardPicker();
    console.log(hand().suit);
    console.log(hand().suit);
})(Lambda || (Lambda = {}));
//# sourceMappingURL=lambda.js.map