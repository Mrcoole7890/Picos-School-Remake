var Scene = function(JSONResources, JSONSceneName, app) {
    this.app = app;
    this.JSONResources = JSONResources;
    this.entities = [];
    this.background = JSONResources.Scenes[JSONSceneName].Background;
    this.leftScene;
    this.rightScene;
    this.upScene;
    this.downScene;
    this.JSONSceneName = JSONSceneName;
    this.JSONScene = JSONResources.Scenes[JSONSceneName];

    this.init = function() {
        let background = new Background(this.JSONResources, this.background);
        background.init();
        background.load(this.app);
        this.JSONScene.entities.forEach(e => {
            let entity = new UnanimatedEntity(JSONResources.entities[e[0]], e[1], e[2]);
            this.entities.push(entity);
        });
        
    };

    this.loadAssets = function() {
        this.entities.forEach(e => {
            if(e.class === "LockerClosed" || e.class === "LockerClosedFlipped"){
                e.onClick = function() {this.destroy()};
            }
            if(e.class === "door") {
                e.onClick = function() {console.log("Door was clicked!");};
            }
            e.load(this.app);
        });
    };

    this.unloadAssets = function() {
        this.entities.forEach(e => {
            e.unload();
        });
    };
};