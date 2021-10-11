
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfileForTable extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// defaultProfile_1
		const defaultProfile_1 = scene.add.image(0, 0, "defaultProfile");
		defaultProfile_1.scaleX = 1.6;
		defaultProfile_1.scaleY = 1.6;
		this.add(defaultProfile_1);

		// profileMask
		const profileMask = scene.add.image(0, 0, "profileMask");
		profileMask.scaleX = 1.6;
		profileMask.scaleY = 1.6;
		this.add(profileMask);

		// tH02_Golden_Ring_1
		const tH02_Golden_Ring_1 = scene.add.image(0, 0, "TH02_Golden-Ring");
		tH02_Golden_Ring_1.scaleX = 1.6;
		tH02_Golden_Ring_1.scaleY = 1.6;
		this.add(tH02_Golden_Ring_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
