var Intertaction = function(scene ,entity, gameMap) {
    switch(entity.class){
        case "LockerClosed":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "LockerClosedFlipped":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "door":
            entity.onClick = function() {
                gameMap.moveLeft();
            };
            break;
    }
};