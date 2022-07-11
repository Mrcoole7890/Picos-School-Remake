var SceneGraphOperations = function() {

    this.searched = [];

    this.actionPerNode = function(node) {
        console.log(node.scene.JSONSceneName);
    }

    this.forEachNode = function(node, action) {
        action(node);
        this.searched.push(node.scene.JSONSceneName);
        if (node.hasChildren()) {
            node.getChildren().forEach(element => {
                if(!this.searched.includes(element.scene.JSONSceneName))
                    this.forEachNode(element, action);
            });
        }
        else {
            return;
        }
    }
}