var Scene = function Scene( JSONSceneName, app, map) {
    this.app = app;
    this.map = map;
    this.entities = [];
    this.background = GLOBAL_VALS.Scenes[JSONSceneName].Background;
    this.leftScene;
    this.rightScene;
    this.upScene;
    this.downScene;
    this.JSONSceneName = JSONSceneName;
    this.JSONScene = GLOBAL_VALS.Scenes[JSONSceneName];

    this.setLeftScene = function(scene) { this.leftScene = scene};
    this.setRightScene = function(scene) { this.rightScene = scene};
    this.setUpScene = function(scene) { this.upScene = scene};
    this.setDownScene = function(scene) { this.downScene = scene};

    this.init = function(leftOfScene, upFromScene) {
        this.leftScene = leftOfScene;
        this.upScene = upFromScene;
        this.rightScene = null;
        this.downScene = null;
        this.JSONScene.entities.forEach(e => {
            let entity = new UnanimatedEntity(GLOBAL_VALS.entities[e[0]], e[1], e[2]);
            this.entities.push(entity);
        });
    };

    this.loadAssets = function() {
        let background = new Background(this.background);
        background.init();
        background.load(this.app);
        this.entities.forEach(e => {
            Intertaction(this, e, this.map);
            e.load(this.app);
        });
    };

    this.unloadAssets = function() {
        this.entities.forEach(e => {
            e.unload();
        });
    };
};