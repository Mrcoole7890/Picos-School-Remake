var Game = function(pathToConfigJSON) {

    this.rendererWidth;
    this.rendererHeight;

    fetch(pathToConfigJSON)
                .then(responce => responce.json())
                .then(data => {this.init(data, this)});

    this.init = function(ResourcesJSON, objRef)
    {
        objRef.rendererWidth = ResourcesJSON.renderer.width;
        objRef.rendererHeight= ResourcesJSON.renderer.height;

        let app = new PIXI.Application({ width: objRef.rendererWidth, height: objRef.rendererHeight });
        document.body.appendChild(app.view);

        let gameMap = new Map(ResourcesJSON, app);
        gameMap.init();
        gameMap.loadAssets();
    }

};