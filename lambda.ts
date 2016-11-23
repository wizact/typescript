module Lambda {
	var deck = {
    	suits: ["hearts", "spades", "clubs", "diamonds"],
    	cards: Array(52),
    	createCardPicker: function() {
	        return () => {
	            var pickedCard = Math.floor(Math.random() * 52);
	            var pickedSuit = Math.floor(pickedCard / 13);
	            return { suit: this.suits[pickedSuit]};
	        }
    	}
	}

	let hand = deck.createCardPicker();

	console.log(hand().suit);
	console.log(hand().suit);
}

