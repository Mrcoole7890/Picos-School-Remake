var Map = function(JSONResources, app) {
    this.app = app;
    this.scenes = [];
    this.current;
    this.moveLeft = function() {
        this.current.unloadAssets();
        this.current = this.findScene(this.current.leftScene);
        this.loadAssets();
    };

    this.moveRight = function() {
        this.current.unloadAssets();
        this.current = this.findScene(this.current.rightScene);
        this.loadAssets();
    };

    this.moveUp = function() {};
    this.moveDown = function() {};
    this.JSONResources = JSONResources;

    this.init = function() {
        this.JSONResources.map.sceneGraph.forEach(e =>{
            let tempScene = new Scene(this.JSONResources, e[0], this.app, this);
            tempScene.init(e[1], e[2]);
            this.scenes.push(tempScene);
            if (e[0] == this.JSONResources.map.start) this.current = tempScene;
        });
        this.scenes.forEach(e =>{
            if (e.leftScene != null) {
                let searchAttempt = this.findScene(e.leftScene);
                if (searchAttempt != null) searchAttempt.setRightScene(e.JSONSceneName);
            }
            if (e.upScene != null) {
                let searchAttempt = this.findScene(e.upScene);
                if (searchAttempt != null) searchAttempt.setDownScene(e.JSONSceneName);
            }
        });
    };

    this.loadAssets = function() {
        this.current.loadAssets();
    };

    this.findScene = function (sceneName) {
        for(let i = 0; i < this.scenes.length; i++){
            if (this.scenes[i].JSONSceneName == sceneName) return this.scenes[i];
        }
        return null;
    }
};