
// You can write more code here

/* START OF COMPILED CODE */

class BaseCardPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// card_bg
		const card_bg = scene.add.image(0, 0, "Card");
		card_bg.scaleX = 1.4064999411287824;
		card_bg.scaleY = 1.8632437492674367;
		this.add(card_bg);

		// upper_small_img
		const upper_small_img = scene.add.image(-57, -7, "d");
		upper_small_img.scaleX = 0.36;
		upper_small_img.scaleY = 0.36;
		this.add(upper_small_img);

		// lower_big_img
		const lower_big_img = scene.add.image(32, 53, "d");
		lower_big_img.scaleX = 0.8;
		lower_big_img.scaleY = 0.8;
		this.add(lower_big_img);

		// joker_img
		const joker_img = scene.add.image(-57, 40, "Joker");
		joker_img.scaleX = 0.35;
		joker_img.scaleY = 0.35;
		this.add(joker_img);

		// card_number_txt
		const card_number_txt = scene.add.text(-55, -75, "", {});
		card_number_txt.setOrigin(0.5, 0.5);
		card_number_txt.text = "5";
		card_number_txt.setStyle({"color":"#a30303ff","fontFamily":"ANTONIO-REGULAR_0","fontSize":"80px"});
		this.add(card_number_txt);

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.upper_small_img = upper_small_img;
		this.lower_big_img = lower_big_img;
		this.card_number_txt = card_number_txt;
		this.joker_img = joker_img;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	updateCardUi(){
		this.joker_img.visible = this.isJoker;
		if(this.eSuit == eSuitEnum.Diamond){
			this.upper_small_img.setTexture('d');
			this.lower_big_img.setTexture('d');
		}
		if(this.eSuit == eSuitEnum.Club){
			this.upper_small_img.setTexture('c');
			this.lower_big_img.setTexture('c');
		}
		if(this.eSuit == eSuitEnum.Heart){
			this.upper_small_img.setTexture('h');
			this.lower_big_img.setTexture('h');
		}
		if(this.eSuit == eSuitEnum.Spade){
			this.upper_small_img.setTexture('s');
			this.lower_big_img.setTexture('s');
		}
		this.upper_small_img.text = this.nLable;
		this.card_number_txt.text = this.nLable;
	}

	setCardData(nValue, eSuit, isJoker,nLable){
		this.nValue = nValue;
		this.eSuit = eSuit;
		this.isJoker = isJoker;
		this.nLable = nLable;
		this.updateCardUi();
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
