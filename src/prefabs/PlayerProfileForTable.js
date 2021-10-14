
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

		// player_point_bg
		const player_point_bg = scene.add.container(-1, 104);
		this.add(player_point_bg);

		// rounded_Rectangle_4_2x
		const rounded_Rectangle_4_2x = scene.add.image(0, 0, "Rounded Rectangle 4@2x");
		rounded_Rectangle_4_2x.scaleX = 0.578589498693684;
		rounded_Rectangle_4_2x.scaleY = 0.5467859441883341;
		player_point_bg.add(rounded_Rectangle_4_2x);

		// text
		const text = scene.add.text(0, 0, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "100";
		text.setStyle({"align":"justify","fontFamily":"OswaldRegular","fontSize":"27px"});
		player_point_bg.add(text);

		// player_status_txt
		const player_status_txt = scene.add.text(0, 65, "", {});
		player_status_txt.setOrigin(0.5, 0.5);
		player_status_txt.visible = false;
		player_status_txt.text = "playing";
		player_status_txt.setStyle({"align":"justify","fontFamily":"OswaldRegular","fontSize":"15px"});
		this.add(player_status_txt);

		// you_txt
		const you_txt = scene.add.text(0, 40, "", {});
		you_txt.setOrigin(0.5, 0.5);
		you_txt.visible = false;
		you_txt.text = "YOU";
		you_txt.setStyle({"align":"justify","fontFamily":"OswaldRegular","fontSize":"25px"});
		this.add(you_txt);

		// opp_status_txt
		const opp_status_txt = scene.add.text(0, 55, "", {});
		opp_status_txt.setOrigin(0.5, 0.5);
		opp_status_txt.visible = false;
		opp_status_txt.text = "playing";
		opp_status_txt.setStyle({"align":"justify","fontFamily":"OswaldRegular","fontSize":"25px"});
		this.add(opp_status_txt);

		/* START-USER-CTR-CODE */
		this.oSceneObj = scene;
		this.opp_status_txt = opp_status_txt;
		this.player_status_txt = player_status_txt;
		this.you_txt = you_txt;

		this.showTimerCountDown();
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	showTimerCountDown(timeLeft){
		timeLeft = 275;
		console.log("updateValue Done......",timeLeft);
		if(this.oLoadeGraphics !=null){
			this.oLoadeGraphics.clear();
		}
		this.oLoadeGraphics = this.oSceneObj.add.graphics();
		this.oLoadeGraphics.lineStyle(10, 0x00FF00, 1);
		this.oLoadeGraphics.beginPath();  
		this.oLoadeGraphics.arc(0, 0, 100, Phaser.Math.DegToRad(timeLeft), Phaser.Math.DegToRad(-90), true);
		this.oLoadeGraphics.strokePath();
		this.add(this.oLoadeGraphics);
	}

	setStatusForOpp(sStatus){
		this.opp_status_txt.text = sStatus;
		this.opp_status_txt.visible = true;
	}

	setStatusForPlayer(sStatus){
		this.player_status_txt.text = sStatus;
		this.player_status_txt.visible = true;
		this.you_txt.visible = true;
	}

	setUserProfilePic(sProfileImageUrl){
		
	}

	setPlayerData(sPlayerId,eState,sAvtar,sUserName,bIsOwnPlayer){
		if(bIsOwnPlayer)
		{
			this.setStatusForPlayer(eState);
		}
		else{
			this.setStatusForOpp(eState);
		}
		setUserProfilePic(sAvtar);
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
