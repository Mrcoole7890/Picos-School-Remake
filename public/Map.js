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

    //initiallizes pico sprite, gets all the scenes described in the specs.js file
    //maps all the scenes and their neighbors to be traversible
    this.init = function() {
        this.pico = new Pico(null); // I dont know why this is NULL...
        GLOBAL_VALS.map.sceneGraph.forEach(e =>{ // Gets all scenes in spec.js and initializes them and puts them in the scenes array
            let tempScene = new Scene(e[0], this.app, this);
            tempScene.init(e[1], e[2]);
            this.scenes.push(tempScene);
            if (e[0] == GLOBAL_VALS.map.start) this.current = tempScene;
        });
        this.scenes.forEach(e =>{ 
            // Goes though all directions of a scene and checks to see if a neigbor exists if so, 
            // the scenes are given reference to their neigbors in the scenes array
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

    this.loadAssets = function() { // sets unloaded sprites in a given scene to visible
        this.current.loadAssets();
    };

    this.findScene = function (sceneName) { // Searches for a scene by name
        for(let i = 0; i < this.scenes.length; i++){
            if (this.scenes[i].JSONSceneName == sceneName) return this.scenes[i];
        }
        return null;
    }
};