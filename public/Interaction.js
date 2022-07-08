var Intertaction = function(scene, entity, gameMap) {
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
                if (gameMap.pico != null) gameMap.pico.destroyTicker();
                gameMap.pico.initRightRun(gameMap.app);
                gameMap.pico.loadFromStageLeft(gameMap.app);
            };
            break;
        case "leftSceneButton":
            entity.onClick = function() {
                gameMap.moveRight();
                if (gameMap.pico != null) gameMap.pico.destroyTicker();
                gameMap.pico.initLeftRun(gameMap.app);
                gameMap.pico.loadFromStageRight(gameMap.app);
            };
            break;
    }
};