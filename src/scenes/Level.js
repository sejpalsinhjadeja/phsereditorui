
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

		// background_img
		this.add.image(1031, 605, "TH02_Table_BG");

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

		// table_button_1
		const table_button_1 = this.add.container(-625, -43);
		footer.add(table_button_1);

		// tH02_Join_Small_Table
		const tH02_Join_Small_Table = this.add.image(0, 0, "TH02_Join_Small-Table");
		tH02_Join_Small_Table.scaleX = 0.8;
		tH02_Join_Small_Table.scaleY = 0.7;
		table_button_1.add(tH02_Join_Small_Table);

		// text_1
		const text_1 = this.add.text(1, 0, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "point";
		text_1.setStyle({"fontSize":"25px","fontStyle":"bold"});
		table_button_1.add(text_1);

		// lower_circle
		const lower_circle = this.add.image(0, 37, "circle");
		lower_circle.scaleX = 0.08;
		lower_circle.scaleY = 0.08;
		table_button_1.add(lower_circle);

		// upper_circle
		const upper_circle = this.add.image(0, -37, "circle");
		upper_circle.scaleX = 0.08;
		upper_circle.scaleY = 0.08;
		table_button_1.add(upper_circle);

		// Body
		const body = this.add.container(0, 0);

		// game_table
		const game_table = this.add.container(1025, 647);
		body.add(game_table);

		// table_img
		const table_img = this.add.image(0, 0, "TH02_Table");
		table_img.scaleX = 0.95;
		table_img.scaleY = 0.9;
		game_table.add(table_img);

		// table_info_lable
		const table_info_lable = this.add.container(0, -120);
		game_table.add(table_info_lable);

		// start_new_round
		const start_new_round = this.add.image(0, 0, "Start-new-round");
		start_new_round.scaleX = 1.5;
		table_info_lable.add(start_new_round);

		// text_2
		const text_2 = this.add.text(0, 0, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "WAITING FOR OTHER PLAYER(S)";
		text_2.setStyle({"align":"center","fontFamily":"Roboto-Regular","fontSize":"20px"});
		table_info_lable.add(text_2);

		// our_player
		const our_player = new PlayerProfileForTable(this, 7, 299);
		game_table.add(our_player);

		// opp_1
		const opp_1 = new PlayerProfileForTable(this, 0, -430);
		opp_1.scaleX = 0.8;
		opp_1.scaleY = 0.8;
		game_table.add(opp_1);

		// opp_2
		const opp_2 = new PlayerProfileForTable(this, -870, -120);
		opp_2.scaleX = 0.8;
		opp_2.scaleY = 0.8;
		opp_2.visible = false;
		game_table.add(opp_2);

		// opp_3
		const opp_3 = new PlayerProfileForTable(this, 870, -120);
		opp_3.scaleX = 0.8;
		opp_3.scaleY = 0.8;
		opp_3.visible = false;
		game_table.add(opp_3);

		// opp_4
		const opp_4 = new PlayerProfileForTable(this, -640, -400);
		opp_4.scaleX = 0.8;
		opp_4.scaleY = 0.8;
		opp_4.visible = false;
		game_table.add(opp_4);

		// opp_5
		const opp_5 = new PlayerProfileForTable(this, 640, -400);
		opp_5.scaleX = 0.8;
		opp_5.scaleY = 0.8;
		opp_5.visible = false;
		game_table.add(opp_5);

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

		// point_in_rupee_txt
		const point_in_rupee_txt = this.add.text(1408, 50, "", {});
		point_in_rupee_txt.setOrigin(0, 0.5);
		point_in_rupee_txt.text = "₹ 0.01";
		point_in_rupee_txt.setStyle({"fontFamily":"Roboto-Regular","fontSize":"30px"});
		header.add(point_in_rupee_txt);

		// game_type_txt
		const game_type_txt = this.add.text(1007, 50, "", {});
		game_type_txt.setOrigin(0, 0.5);
		game_type_txt.text = "Point Rummy- 2 Deck ";
		game_type_txt.setStyle({"fontFamily":"Roboto-Regular","fontSize":"30px"});
		header.add(game_type_txt);

		// table_id_txt
		const table_id_txt = this.add.text(643, 50, "", {});
		table_id_txt.setOrigin(0, 0.5);
		table_id_txt.text = "Table Id:#46274f1a";
		table_id_txt.setStyle({"fontFamily":"Roboto-Regular","fontSize":"30px"});
		header.add(table_id_txt);

		// player_balance_txt
		const player_balance_txt = this.add.text(437, 50, "", {});
		player_balance_txt.setOrigin(0, 0.5);
		player_balance_txt.text = "212.54";
		player_balance_txt.setStyle({"fontFamily":"Roboto-Regular","fontSize":"30px"});
		header.add(player_balance_txt);

		// cash_icon
		const cash_icon = this.add.image(406, 50, "Cash-icon");
		cash_icon.scaleX = 0.3;
		cash_icon.scaleY = 0.3;
		header.add(cash_icon);

		// player_name_txt
		const player_name_txt = this.add.text(101, 50, "", {});
		player_name_txt.setOrigin(0, 0.5);
		player_name_txt.text = "sejsinh01";
		player_name_txt.setStyle({"fixedWidth":200,"fontFamily":"grandnationalsuperital","fontSize":"30px"});
		player_name_txt.setWordWrapWidth(12);
		header.add(player_name_txt);

		// Player_Profile
		const player_Profile = this.add.container(54, 50);
		player_Profile.scaleX = 0.75;
		player_Profile.scaleY = 0.75;
		header.add(player_Profile);

		// player_profile_img
		const player_profile_img = this.add.image(0, 0, "defaultProfile");
		player_profile_img.scaleX = 0.7;
		player_profile_img.scaleY = 0.7;
		player_Profile.add(player_profile_img);

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

		this.our_player = our_player;
		this.opp_1 = opp_1;
		this.opp_2 = opp_2;
		this.opp_3 = opp_3;
		this.opp_4 = opp_4;
		this.opp_5 = opp_5;

		this.events.emit("scene-awake");
	}

	/** @type {PlayerProfileForTable} */
	our_player;
	/** @type {PlayerProfileForTable} */
	opp_1;
	/** @type {PlayerProfileForTable} */
	opp_2;
	/** @type {PlayerProfileForTable} */
	opp_3;
	/** @type {PlayerProfileForTable} */
	opp_4;
	/** @type {PlayerProfileForTable} */
	opp_5;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
