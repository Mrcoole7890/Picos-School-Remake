var Intertaction = function(scene ,entity, gameMap) {
    switch(entity.class){
        case "LockerClosedGreen":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "LockerClosedFlippedGray":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "LockerClosedGray":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "LockerClosedFlippedRed":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "LockerClosedRed":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload();
            };
            break;
        case "rightSceneButton":
            entity.onClick = function() {
                gameMap.moveLeft();
            };
            break;
        case "leftSceneButton":
            entity.onClick = function() {
                gameMap.moveRight();
            };
            break;
    }
};