
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

		// Body
		const body = this.add.container(0, 0);

		// tH02_Table_BG
		const tH02_Table_BG = this.add.image(1031, 605, "TH02_Table_BG");
		body.add(tH02_Table_BG);

		// MyPlayer
		const myPlayer = new PlayerProfileForTable(this, 1030, 943);
		body.add(myPlayer);

		// MyPlayer_1
		const myPlayer_1 = new PlayerProfileForTable(this, 1030, 208);
		myPlayer_1.scaleX = 0.8;
		myPlayer_1.scaleY = 0.8;
		body.add(myPlayer_1);

		// container_1
		const container_1 = this.add.container(1025, 647);
		body.add(container_1);

		// tH02_Table
		const tH02_Table = this.add.image(0, 0, "TH02_Table");
		tH02_Table.scaleX = 0.95;
		tH02_Table.scaleY = 0.9;
		container_1.add(tH02_Table);

		// Footer
		const footer = this.add.container(960, 1080);

		// Add_table_button
		const add_table_button = this.add.container(-844, -43);
		footer.add(add_table_button);

		// tH02_Join_Small_Table_1
		const tH02_Join_Small_Table_1 = this.add.image(0, 0, "TH02_Join_Small-Table");
		tH02_Join_Small_Table_1.scaleX = 0.85;
		tH02_Join_Small_Table_1.scaleY = 0.85;
		add_table_button.add(tH02_Join_Small_Table_1);

		// text
		const text = this.add.text(-44, 0, "", {});
		text.setOrigin(0, 0.5);
		text.text = "New";
		text.setStyle({"fontSize":"25px","fontStyle":"bold"});
		add_table_button.add(text);

		// circle
		const circle = this.add.image(43, 0, "circle");
		circle.scaleX = 0.17;
		circle.scaleY = 0.17;
		add_table_button.add(circle);

		// addCash
		const addCash = this.add.image(43, 0, "AddCash");
		addCash.scaleX = 0.26;
		addCash.scaleY = 0.26;
		addCash.tintTopLeft = 0;
		addCash.tintTopRight = 0;
		addCash.tintBottomLeft = 0;
		addCash.tintBottomRight = 0;
		add_table_button.add(addCash);

		// table_button
		const table_button = this.add.container(-625, -43);
		footer.add(table_button);

		// tH02_Join_Small_Table
		const tH02_Join_Small_Table = this.add.image(0, 0, "TH02_Join_Small-Table");
		tH02_Join_Small_Table.scaleX = 0.8;
		tH02_Join_Small_Table.scaleY = 0.7;
		table_button.add(tH02_Join_Small_Table);

		// text_1
		const text_1 = this.add.text(1, 0, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "point";
		text_1.setStyle({"fontSize":"25px","fontStyle":"bold"});
		table_button.add(text_1);

		// lower_circle
		const lower_circle = this.add.image(0, 37, "circle");
		lower_circle.scaleX = 0.08;
		lower_circle.scaleY = 0.08;
		table_button.add(lower_circle);

		// upper_circle
		const upper_circle = this.add.image(0, -37, "circle");
		upper_circle.scaleX = 0.08;
		upper_circle.scaleY = 0.08;
		table_button.add(upper_circle);

		// Header
		const header = this.add.container(0, -1);

		// header_bg_img
		const header_bg_img = this.add.image(1025, 0, "New_Theme_Uper-Hood");
		header_bg_img.scaleX = 16;
		header_bg_img.scaleY = 0.7;
		header_bg_img.setOrigin(0.5, 0);
		header.add(header_bg_img);

		// MenuButton
		const menuButton = this.add.container(1863, 50);
		menuButton.scaleX = 0.6;
		menuButton.scaleY = 0.6;
		header.add(menuButton);

		// tH02_Yellow_Box_Ui_1
		const tH02_Yellow_Box_Ui_1 = this.add.image(3, 0, "TH02_Yellow-Box-Ui");
		tH02_Yellow_Box_Ui_1.scaleX = 2;
		tH02_Yellow_Box_Ui_1.scaleY = 2;
		menuButton.add(tH02_Yellow_Box_Ui_1);

		// menu_icon
		const menu_icon = this.add.image(0, 0, "Menu-icon");
		menu_icon.scaleX = 0.2;
		menu_icon.scaleY = 0.2;
		menuButton.add(menu_icon);

		// RefreshButton
		const refreshButton = this.add.container(1971, 50);
		refreshButton.scaleX = 0.6;
		refreshButton.scaleY = 0.6;
		header.add(refreshButton);

		// tH02_Yellow_Box_Ui
		const tH02_Yellow_Box_Ui = this.add.image(2, 3, "TH02_Yellow-Box-Ui");
		tH02_Yellow_Box_Ui.scaleX = 2;
		tH02_Yellow_Box_Ui.scaleY = 2;
		refreshButton.add(tH02_Yellow_Box_Ui);

		// reload
		const reload = this.add.image(0, 0, "reload");
		reload.scaleX = 0.3;
		reload.scaleY = 0.3;
		refreshButton.add(reload);

		// oDecktext_1
		const oDecktext_1 = this.add.text(1408, 35, "", {});
		oDecktext_1.text = "₹ 0.01";
		oDecktext_1.setStyle({"fontSize":"30px"});
		header.add(oDecktext_1);

		// oDecktext
		const oDecktext = this.add.text(1007, 35, "", {});
		oDecktext.text = "Point Rummy- 2 Deck ";
		oDecktext.setStyle({"fontSize":"30px","fontStyle":"bold"});
		header.add(oDecktext);

		// oTableId
		const oTableId = this.add.text(643, 35, "", {});
		oTableId.text = "Table Id:#46274f1a";
		oTableId.setStyle({"fontSize":"30px","fontStyle":"bold"});
		header.add(oTableId);

		// balancetxt
		const balancetxt = this.add.text(437, 35, "", {});
		balancetxt.text = "212.54";
		balancetxt.setStyle({"fontSize":"35px","fontStyle":"bold"});
		header.add(balancetxt);

		// cash_icon
		const cash_icon = this.add.image(406, 49, "Cash-icon");
		cash_icon.scaleX = 0.3;
		cash_icon.scaleY = 0.3;
		header.add(cash_icon);

		// playerNametxt
		const playerNametxt = this.add.text(101, 35, "", {});
		playerNametxt.text = "sejsinh01";
		playerNametxt.setStyle({"fontSize":"30px","fontStyle":"bold"});
		header.add(playerNametxt);

		// Player_Profile
		const player_Profile = this.add.container(54, 50);
		player_Profile.scaleX = 0.75;
		player_Profile.scaleY = 0.75;
		header.add(player_Profile);

		// defaultProfile
		const defaultProfile = this.add.image(0, 0, "defaultProfile");
		defaultProfile.scaleX = 0.7;
		defaultProfile.scaleY = 0.7;
		player_Profile.add(defaultProfile);

		// white_border
		const white_border = this.add.image(1, 0, "White-border");
		white_border.scaleX = 0.7;
		white_border.scaleY = 0.7;
		player_Profile.add(white_border);

		// preview
		const preview = this.add.image(1032, 550, "preview");
		preview.scaleX = 1.256467453503484;
		preview.scaleY = 1.1807109727293363;
		preview.visible = false;
		preview.alpha = 0.6;
		preview.alphaTopLeft = 0.6;
		preview.alphaTopRight = 0.6;
		preview.alphaBottomLeft = 0.6;
		preview.alphaBottomRight = 0.6;
		header.add(preview);

		this.myPlayer = myPlayer;
		this.myPlayer_1 = myPlayer_1;

		this.events.emit("scene-awake");
	}

	/** @type {PlayerProfileForTable} */
	myPlayer;
	/** @type {PlayerProfileForTable} */
	myPlayer_1;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
