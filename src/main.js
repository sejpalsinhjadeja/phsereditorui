class Boot extends Phaser.Scene {
	init(data){
		this.sAuthToken = data.sAuthToken;
		this.sTableId = data.sTableId;
		this.nChips = data.nChips;
	}
	preload() {
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload", { sAuthToken: this.sAuthToken,sTableId:this.sTableId,nChips:this.nChips }));
	}
}

function startGame(sAuthToken,sTableId,nChips){
	$("#enterform").hide();
	console.log(sAuthToken,sTableId,nChips);
	var game = new Phaser.Game({
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		scale: {
			mode: Phaser.WIDTH_CONTROLS_HEIGHT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			parent: 'phaser-game',
			width: 2050,
			height: 1120,
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot);
	game.scene.start("Boot", { sAuthToken: sAuthToken,sTableId:sTableId,nChips:nChips });
}


$(document).ready(function () {
    $("#submit").click(function () {
        //startGame("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRhZDAyMzkyNWVhODY0MjAxYTNhMTgiLCJlVXNlclR5cGUiOiJ1c2VyIiwiaWF0IjoxNjM0NzE2Mzg2fQ.15oHeV7OynW8P3DL3bxxvLNay9YOJmLNvBPHmBMfsaE","61276b7e8355564641e66e0e",50);
        $.ajax({
            url: "https://stag.rummy24.com/api/v1/rummy/table/join?=",
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ "iProtoId": $("#iProtoId").val() }),
            headers: {
                Authorization: $("#Authorization").val()
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
                startGame($("#Authorization").val(),result.data.iTableId,result.data.nChips);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});


