class Cat {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Cat_Sprite_Sheet.png"), 0, 128, 32, 32, 8, .1);
        
        this.x = -32;
        this.y = 505;
        this.speed = 100;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = -45;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./Cat_Sprite_Sheet.png"), 0, 0, 550, 650);
    }
}