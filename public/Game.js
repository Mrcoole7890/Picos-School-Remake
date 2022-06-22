var Game = function(pathToConfigJSON) {

    this.rendererWidth;
    this.rendererHeight;

    fetch(pathToConfigJSON)
                .then(responce => responce.json())
                .then(data => {this.init(data, this)});

    this.init = function(ResourcesJSON, objRef)
    {
        GLOBAL_VALS = ResourcesJSON;

        objRef.rendererWidth = GLOBAL_VALS.renderer.width;
        objRef.rendererHeight= GLOBAL_VALS.renderer.height;

        let app = new PIXI.Application({ width: objRef.rendererWidth, height: objRef.rendererHeight });
        document.body.appendChild(app.view);

        let gameMap = new Map(app);
        gameMap.init();
        gameMap.loadAssets();
    }

};