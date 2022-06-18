var Map = function(JSONResources, app) {
    this.app = app;
    this.scenes = [];
    this.current;
    this.moveLeft = function() {};
    this.moveRight = function() {};
    this.moveUp = function() {};
    this.moveDown = function() {};
    this.JSONResources = JSONResources;

    this.init = function() {
        this.JSONResources.map.sceneGraph.forEach(e =>{
            let tempScene = new Scene(this.JSONResources, e[0], this.app);
            tempScene.init();
            this.scenes.push(tempScene);
            if (e[0] == this.JSONResources.map.start) this.current = tempScene;
        });
    };

    this.loadAssets = function() {
        this.current.loadAssets();
    };
};