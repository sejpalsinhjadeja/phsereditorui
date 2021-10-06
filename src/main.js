
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.WIDTH_CONTROLS_HEIGHT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			parent:'phaser-game',
			width:  1920,
     		height: 1080,
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}