var SceneNode = function(scene, map) {
    this.scene = scene;
    this.map = map;

    this.getLeftScene = function() {
        return this.map.findScene(this.scene.leftScene);
    };

    this.getRightScene = function() {
        return this.map.findScene(this.scene.rightScene);
    };

    this.getTopScene = function() {
        return this.map.findScene(this.scene.upScene);
    };

    this.getBottomScene = function() {
        return this.map.findScene(this.scene.downScene);
    };

    this.hasChildren = function() {
        return this.getBottomScene() != null 
            || this.getLeftScene() != null
            || this.getRightScene() != null
            || this.getTopScene() != null;
    };

    this.getChildren = function() {
        let finalArray = [];
        if (this.getBottomScene() != null) finalArray.push(new SceneNode(this.getBottomScene(), this.map));
        if (this.getTopScene() != null) finalArray.push(new SceneNode(this.getTopScene(), this.map));
        if (this.getRightScene() != null) finalArray.push(new SceneNode(this.getRightScene(), this.map));
        if (this.getLeftScene() != null) finalArray.push(new SceneNode(this.getLeftScene(), this.map));

        return finalArray;
    }
}