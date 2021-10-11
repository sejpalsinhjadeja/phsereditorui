5
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// Footer
		const footer = this.add.container(960, 1080);

		// Body
		const body = this.add.container(0, 0);

		// tH02_Table_BG
		const tH02_Table_BG = this.add.image(960, 600, "TH02_Table_BG");
		body.add(tH02_Table_BG);

		// tH02_Table
		const tH02_Table = this.add.image(960, 700, "TH02_Table");
		tH02_Table.scaleX = 0.8;
		tH02_Table.scaleY = 0.8;
		body.add(tH02_Table);

		// defaultProfile_1
		const defaultProfile_1 = this.add.image(956, 954, "defaultProfile");
		body.add(defaultProfile_1);

		// profileMask
		const profileMask = this.add.image(959, 954, "profileMask");
		body.add(profileMask);

		// tH02_Golden_Ring_1
		const tH02_Golden_Ring_1 = this.add.image(958, 955, "TH02_Golden-Ring");
		body.add(tH02_Golden_Ring_1);

		// defaultProfile_2
		const defaultProfile_2 = this.add.image(957, 329, "defaultProfile");
		body.add(defaultProfile_2);

		// profileMask_2
		const profileMask_2 = this.add.image(961, 329, "profileMask");
		body.add(profileMask_2);

		// tH02_Golden_Ring
		const tH02_Golden_Ring = this.add.image(962, 333, "TH02_Golden-Ring");
		body.add(tH02_Golden_Ring);

		// Header
		const header = this.add.container(0, -1);

		// header_bg_img
		const header_bg_img = this.add.image(960, 0, "New_Theme_Uper-Hood");
		header_bg_img.scaleX = 15;
		header_bg_img.setOrigin(0.5, 0);
		header.add(header_bg_img);

		// defaultProfile
		const defaultProfile = this.add.image(142, 70, "defaultProfile");
		defaultProfile.scaleX = 0.7;
		defaultProfile.scaleY = 0.7;
		header.add(defaultProfile);

		// white_border
		const white_border = this.add.image(143, 70, "White-border");
		white_border.scaleX = 0.7;
		white_border.scaleY = 0.7;
		header.add(white_border);

		// cash_icon
		const cash_icon = this.add.image(490, 76, "Cash-icon");
		cash_icon.scaleX = 0.4;
		cash_icon.scaleY = 0.4;
		header.add(cash_icon);

		// tH02_Yellow_Box_Ui
		const tH02_Yellow_Box_Ui = this.add.image(1805, 70, "TH02_Yellow-Box-Ui");
		tH02_Yellow_Box_Ui.scaleX = 2;
		tH02_Yellow_Box_Ui.scaleY = 2;
		header.add(tH02_Yellow_Box_Ui);

		// tH02_Yellow_Box_Ui_1
		const tH02_Yellow_Box_Ui_1 = this.add.image(1659, 69, "TH02_Yellow-Box-Ui");
		tH02_Yellow_Box_Ui_1.scaleX = 2;
		tH02_Yellow_Box_Ui_1.scaleY = 2;
		header.add(tH02_Yellow_Box_Ui_1);

		// menu_icon
		const menu_icon = this.add.image(1656, 69, "Menu-icon");
		menu_icon.scaleX = 0.2;
		menu_icon.scaleY = 0.2;
		header.add(menu_icon);

		// reload
		const reload = this.add.image(1803, 67, "reload");
		reload.scaleX = 0.3;
		reload.scaleY = 0.3;
		header.add(reload);

		// playerNametxt
		const playerNametxt = this.add.text(224, 60, "", {});
		playerNametxt.text = "playername";
		playerNametxt.setStyle({"fontSize":"20px","fontStyle":"italic"});
		header.add(playerNametxt);

		// balancetxt
		const balancetxt = this.add.text(541, 69, "", {});
		balancetxt.text = "128.49";
		balancetxt.setStyle({"fontSize":"20px"});
		header.add(balancetxt);

		// oTableId
		const oTableId = this.add.text(730, 72, "", {});
		oTableId.text = "Table Id:#46274f1a";
		oTableId.setStyle({"fontSize":"20px"});
		header.add(oTableId);

		// oDecktext
		const oDecktext = this.add.text(967, 71, "", {});
		oDecktext.text = "Point Rummy- 2 Deck ";
		oDecktext.setStyle({"fontSize":"20px"});
		header.add(oDecktext);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
