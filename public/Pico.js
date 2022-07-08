var Pico = function(JSONObject) {
    this.animation;
    this.ticker;

    this.init = function() {
        this.ticker = new PIXI.Ticker();
        this.animation = new AnimatedEntity(JSONObject, 0, 0); 
    };

    this.initLeftRun = function() {
        this.ticker = new PIXI.Ticker();
        this.animation = new AnimatedEntity(GLOBAL_VALS.entities.picoRunningLeft, 0, 0); 
    }

    this.initRightRun = function() {
        this.ticker = new PIXI.Ticker();
        this.animation = new AnimatedEntity(GLOBAL_VALS.entities.picoRunningRight, 0, 0); 
    }

    this.destroyTicker = function() {
        if( this.ticker === null || this.ticker === undefined) return;
        this.ticker.stop();
    }

    this.loadFromStageLeft = function(PIXIApplication) {
        this.animation.x = 0;
        this.animation.y = 300;
        this.animation.load(PIXIApplication);
        this.ticker.add(this.moveRight, this);
        this.ticker.start();
    }

    this.loadFromStageRight = function(PIXIApplication) {
        this.animation.x = 550;
        this.animation.y = 300;
        this.animation.load(PIXIApplication);
        this.ticker.add(this.moveLeft, this);
        this.ticker.start();
    }

    this.moveLeft = function(obj) {
        if (this.animation.sprite.x != 300){
            this.animation.sprite.x -= 10;
            this.animation.sprite.y += 1;
        }
        else {
            this.ticker.stop();
            this.ticker.destroy();
        }
    }

    this.moveRight = function(obj) {
        if (this.animation.sprite.x != 300){
            this.animation.sprite.x += 10;
            this.animation.sprite.y += 1;
        }
        else {
            this.ticker.destroy();
        }
    }
}