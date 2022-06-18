var UnanimatedEntity = function(JSONObject, x, y) {
    this.sprite;
    this.onClick;
    this.onHover;
    this.texturePath = JSONObject.texturePath;
    this.width = JSONObject.width;
    this.height = JSONObject.height;
    this.x = x;
    this.y = y;
    let spriteTexture = PIXI.Texture.from(this.texturePath);

    this.load = function(PIXIApplication) {
        this.sprite = new PIXI.Sprite(spriteTexture);
        this.sprite.width = this.width;
        this.sprite.height = this.height;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        PIXIApplication.stage.addChild(this.sprite);
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