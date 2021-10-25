
// You can write more code here

/* START OF COMPILED CODE */

class BaseCardPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// card_bgh
		const card_bgh = scene.add.image(0, 0, "cardbgh");
		card_bgh.scaleX = 0.41;
		card_bgh.scaleY = 0.38;
		card_bgh.visible = false;
		this.add(card_bgh);

		// card_bg
		const card_bg = scene.add.image(0, 0, "cardbg");
		card_bg.scaleX = 0.4;
		card_bg.scaleY = 0.37;
		this.add(card_bg);

		// upper_small_img
		const upper_small_img = scene.add.image(-63, -19, "s");
		upper_small_img.scaleX = 0.36;
		upper_small_img.scaleY = 0.36;
		this.add(upper_small_img);

		// lower_big_img
		const lower_big_img = scene.add.image(26, 68, "s");
		lower_big_img.scaleX = 0.9;
		lower_big_img.scaleY = 0.9;
		this.add(lower_big_img);

		// joker_img
		const joker_img = scene.add.image(-63, 32, "Joker");
		joker_img.scaleX = 0.3;
		joker_img.scaleY = 0.3;
		this.add(joker_img);

		// card_number_txt
		const card_number_txt = scene.add.text(-85, -86, "", {});
		card_number_txt.setOrigin(0, 0.5);
		card_number_txt.text = "5";
		card_number_txt.setStyle({"color":"#000000ff","fontFamily":"ANTONIO-REGULAR_0","fontSize":"80px"});
		this.add(card_number_txt);

		this.card_bgh = card_bgh;

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.upper_small_img = upper_small_img;
		this.lower_big_img = lower_big_img;
		this.card_number_txt = card_number_txt;
		this.joker_img = joker_img;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	card_bgh;

	/* START-USER-CODE */
	updateCardUi(card_use_type){
		this.joker_img.visible = this.isJoker;
		this.card_use_type = card_use_type;
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
		if(this.eSuit == eSuitEnum.Spade || this.eSuit == eSuitEnum.Club)
		{
			this.upper_small_img.setTint(0x000000);
			this.card_number_txt.setTint(0x000000);
		}else{
			this.upper_small_img.setTint(0xFF0000);
			this.card_number_txt.setTint(0xFF0000);
		}
		this.upper_small_img.text = this.nLable;
		this.card_number_txt.text = this.nLable;
	}

	setCardDataForHighCard(nValue, eSuit, isJoker,nLable){
		this.nValue = nValue;
		this.eSuit = eSuit;
		this.isJoker = isJoker;
		this.nLable = nLable;
		this.updateCardUi("highcard");
	}

	setCardData(nValue, eSuit, isJoker,nLable){
		this.nValue = nValue;
		this.eSuit = eSuit;
		this.isJoker = isJoker;
		this.nLable = nLable;
		this.updateCardUi("normal");
	}

	setCardDataForHandCard(oCardData){
		this.nValue = oCardData.nValue;
		this.eSuit = oCardData.eSuit;
		this.isJoker = oCardData.isJoker;
		this.nLable = oCardData.nLable;
		this.nGroupId = oCardData.nGroupId;
		this.sId = oCardData._id;
		this.updateCardUi("handcard");
		this.visible = true;
	}

	cardHighilght(bIsHighlighted){
		this.card_bgh.visible = bIsHighlighted;
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
