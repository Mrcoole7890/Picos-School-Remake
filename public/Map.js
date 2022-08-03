/*

   This is the Map class. This is where all scenes are called, initialized, destroyed, and traversed through.

*/

var Map = function(app) {
    this.pico;  // Pico sprite
    this.app = app;
    this.scenes = []; // the list of scenes present in the game
    this.current; // the current scene to be displayed

    // Action used by the event handeler to change the scene to one left of the current scene
    // Does NOT check if no scene exists
    this.moveLeft = function() {
        this.current.unloadAssets();
        this.current = this.findScene(this.current.leftScene);
        this.loadAssets();
    };

    // Action used by the event handeler to change the scene to one right of the current scene
    // Does NOT check if no scene exists
    this.moveRight = function() {
        this.current.unloadAssets();
        this.current = this.findScene(this.current.rightScene);
        this.loadAssets();
    };

    this.moveUp = function() {};
    this.moveDown = function() {};

    this.init = function() {
        this.pico = new Pico(null);
        GLOBAL_VALS.map.sceneGraph.forEach(e =>{
            let tempScene = new Scene(e[0], this.app, this);
            tempScene.init(e[1], e[2]);
            this.scenes.push(tempScene);
            if (e[0] == GLOBAL_VALS.map.start) this.current = tempScene;
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