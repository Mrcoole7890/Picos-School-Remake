var Game = function() {

    this.rendererWidth;
    this.rendererHeight;

    //fetch(pathToConfigJSON)
    //            .then(responce => responce.json())
    //            .then(data => {this.init(data, this)});

    this.init = function()
    {

        this.rendererWidth = GLOBAL_VALS.renderer.width;
        this.rendererHeight= GLOBAL_VALS.renderer.height;

        let app = new PIXI.Application({ width: this.rendererWidth, height: this.rendererHeight });
        document.body.appendChild(app.view);

        let gameMap = new Map(app);
        gameMap.init();
        gameMap.loadAssets();
    }

};