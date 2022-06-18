var Scene = function(JSONResources, JSONSceneName, app) {
    this.app = app;
    this.entities = [];
    this.background;
    this.leftScene;
    this.rightScene;
    this.upScene;
    this.downScene;
    this.JSONSceneName = JSONSceneName;
    this.JSONScene = JSONResources.Scenes[JSONSceneName];

    this.init = function() {
        this.JSONScene.entities.forEach(e => {
            console.log(JSONResources.entities[e[0]]);
            let entity = new UnanimatedEntity(JSONResources.entities[e[0]], e[1], e[2]);
            this.entities.push(entity);
        });
        
    };

    this.loadAssets = function() {
        this.entities.forEach(e => {
            e.load(this.app);
        });
    };

    this.unloadAssets = function() {
        this.entities.forEach(e => {
            e.unload();
        });
    };
};