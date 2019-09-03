class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("sky", "../assets/sky.png")
    	
    }
    create() {
        this.face = this.add.image(200, 320, "sky");
        console.log("Ready!");
    }
    update() {}
}