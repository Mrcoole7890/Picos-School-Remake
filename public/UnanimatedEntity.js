var UnanimatedEntity = function(JSONObject, x, y) {
    this.sprite;
    this.onClick = function() {};
    this.onHover;
    this.JSONObject = JSONObject;
    this.class = JSONObject.class;
    this.texturePath = JSONObject.texturePath;
    this.width = JSONObject.width;
    this.height = JSONObject.height;
    this.interactible = JSONObject.interactible
    this.x = x;
    this.y = y;
    let spriteTexture = PIXI.Texture.from(this.texturePath);
    this.load = function(PIXIApplication) {
        this.sprite = new PIXI.Sprite(spriteTexture);
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.interactive = this.interactible;
        PIXIApplication.stage.addChild(this.sprite);
        this.sprite.on('pointerdown', this.onClick );
    };

    this.unload = function() {
        this.sprite.destroy();
    }

    // this.loadTextures = function(textureArr, folderPath, fileExtention, numOfFrames)
    // {
    //     for (let i=0; i < numOfFrames; i++)
    //     {
    //         let texture = PIXI.Texture.from(folderPath + i + fileExtention);
    //         textureArr.push(texture);
    //     };
    // }
};