var AnimatedEntity = function() {

    
    this.load = function(PIXIApplication) {
        
    };

    this.unload = function() {
        this.sprite.visible = false;
    }

    this.loadTextures = function()
    {
        for (let i=0; i < numOfFrames; i++)
        {
            let texture = PIXI.Texture.from(this.texturesPath + i + fileExtention);
            this.textureArr.push(texture);
        };
    }
};