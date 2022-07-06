var AnimatedEntity = function(JSONObject, x, y) {

    this.loadTextures = function()
    {
        for (let i=0; i < this.JSONObject.animatedSpecs.frameCount; i++)
        {
            let texture = PIXI.Texture.from(this.texturesPath + i + this.JSONObject.animatedSpecs.fileExtention);
            textures.push(texture);
        };
    }

    this.sprite;
    this.onClick = function() {};
    this.onHover;
    this.JSONObject = JSONObject;
    this.class = JSONObject.class;
    this.texturesPath = JSONObject.texturePath;
    this.width = JSONObject.width;
    this.height = JSONObject.height;
    this.interactible = JSONObject.interactible;
    this.x = x;
    this.y = y;

    let textures = [];

    this.loadTextures();

    this.load = function(PIXIApplication) {
        this.sprite = new PIXI.AnimatedSprite(textures);
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.interactive = this.interactible;
        this.sprite.animationSpeed = this.JSONObject.animatedSpecs.animationSpeed;
        this.sprite.play();
        PIXIApplication.stage.addChild(this.sprite);
        this.sprite.on('pointerdown', this.onClick );
    };

    this.unload = function() {
        this.sprite.visible = false;
    }
};