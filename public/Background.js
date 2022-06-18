var Background = function(JSONResources, backgroundTexture) {
    this.sprite;
    this.texture = PIXI.Texture.from(backgroundTexture);
    this.x = 0;
    this.y = 0;
    this.width = JSONResources.renderer.width;
    this.height = JSONResources.renderer.height;
    
    this.init = function() {
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = this.width;
        this.sprite.height = this.height;
    };

    this.load = function(app) {
        app.stage.addChild(this.sprite);
    }

    this.unload = function() {
        this.sprite.destroy();
    }
}