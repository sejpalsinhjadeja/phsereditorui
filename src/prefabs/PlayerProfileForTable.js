
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfileForTable extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// turn_timer
		const turn_timer = scene.add.container(95, -35);
		this.add(turn_timer);

		// timerbg
		const timerbg = scene.add.image(0, 0, "timerbg");
		timerbg.scaleX = 0.5;
		timerbg.scaleY = 0.5;
		turn_timer.add(timerbg);

		// timer
		const timer = scene.add.image(-5, 22, "timer");
		timer.scaleX = 0.5;
		timer.scaleY = 0.5;
		turn_timer.add(timer);

		// small_timer_txt
		const small_timer_txt = scene.add.text(47, 25, "", {});
		small_timer_txt.setOrigin(0.5, 0.5);
		small_timer_txt.text = "20";
		small_timer_txt.setStyle({"color":"#000000ff","fontFamily":"OswaldBold","fontSize":"35px"});
		turn_timer.add(small_timer_txt);

		// big_timer_txt
		const big_timer_txt = scene.add.text(47, -25, "", {});
		big_timer_txt.setOrigin(0.5, 0.5);
		big_timer_txt.text = "20";
		big_timer_txt.setStyle({"fontFamily":"OswaldBold","fontSize":"35px"});
		turn_timer.add(big_timer_txt);

		// circle
		const circle = scene.add.image(0, 0, "circle");
		circle.scaleX = 0.73;
		circle.scaleY = 0.73;
		this.add(circle);

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
		const player_point_bg = scene.add.container(-1, 120);
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

		// opp_name_txt
		const opp_name_txt = scene.add.text(0, -120, "", {});
		opp_name_txt.setOrigin(0.5, 0.5);
		opp_name_txt.visible = false;
		opp_name_txt.text = "sejsinh01";
		opp_name_txt.setStyle({"fontFamily":"OswaldRegular","fontSize":"30px"});
		this.add(opp_name_txt);

		/* START-USER-CTR-CODE */
		this.oSceneObj = scene;
		this.opp_status_txt = opp_status_txt;
		this.player_status_txt = player_status_txt;
		this.you_txt = you_txt;
		this.defaultProfile_1 = defaultProfile_1;
		this.profileMask = profileMask;
		this.opp_name_txt = opp_name_txt;
		//this.showTimerCountDown();
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

	setPlayerInfo(sPlayerId,bIsOwnPlayer){
		this.sPlayerId = sPlayerId;
		this.bIsOwnPlayer = bIsOwnPlayer;
	}

	setStatusForPlayer(sStatus){
		this.player_status_txt.text = sStatus;
		this.player_status_txt.visible = true;
		this.you_txt.visible = true;
	}

	setUserProfilePic(sProfileImageUrl){
		this.oSceneObj.load.image(this.sPlayerId,sProfileImageUrl).on('filecomplete', function () {
            console.log("Player Profile Loaded");
            this.defaultProfile_1.setTexture(this.sPlayerId).setScale(0.3);
			if(this.bIsOwnPlayer)
			{
				this.oSceneObj.setHeaderUserProfileImage(this.sPlayerId);
			}
        }, this);
        this.oSceneObj.load.start();
	}

	setPlayerState(eState){
		if(this.bIsOwnPlayer)
		{
			this.setStatusForPlayer(eState);
		}
		else{
			this.setStatusForOpp(eState);
		}
	}

	setPlayerData(eState,sAvtar,sUserName){
		console.log("Here in setPlayerData");
		if(this.bIsOwnPlayer)
		{
			this.setStatusForPlayer(eState);
		}
		else{

			if(sUserName.lenght > 8){
				sUserName = sUserName.substring(0,8) + "..";
			}
			this.opp_name_txt.text = sUserName;
			this.opp_name_txt.visible = true;
			console.log("sUserName :"+sUserName);
			this.setStatusForOpp(eState);
		}
		this.setUserProfilePic(sAvtar);
	}

	setHighCardPrefab(oHightCardPrefab){
		this.oHighCardPrefab = oHightCardPrefab;
	}

	showHighCard(nValue, eSuit, isJoker,nLable, isHigh){
		this.oHighCardPrefab.setCardDataForHighCard(nValue, eSuit, isJoker,nLable);
		this.oHighCardPrefab.visible = true;
	}

	hideHighCard(){
		this.oHighCardPrefab.visible = false;
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
