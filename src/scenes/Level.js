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

		// Profile
		const profile = this.add.container(140, 70);
		header.add(profile);

		// white_border
		const white_border = this.add.image(0, 0, "White-border");
		white_border.scaleX = 0.7;
		white_border.scaleY = 0.7;
		profile.add(white_border);

		// default_profile
		const default_profile = this.add.image(0, 0, "defaultProfile");
		default_profile.scaleX = 0.7;
		default_profile.scaleY = 0.7;
		profile.add(default_profile);

		this.header = header;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	header;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
