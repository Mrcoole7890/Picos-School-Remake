/*
    This class takes the scene, entity, and game map
    when initialized it asigns the given entities onClick function to do something

    this class expects entity objects to possess an onClick method
*/
var Intertaction = function(scene, entity, gameMap) {
    switch(entity.class){
        case "LockerClosedGreen":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload(); // causes the given entity to disapear
            };
            break;
        case "LockerClosedFlippedGray":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload(); // causes the given entity to disapear
            };
            break;
        case "LockerClosedGray":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload(); // causes the given entity to disapear
            };
            break;
        case "LockerClosedFlippedRed":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload(); // causes the given entity to disapear
            };
            break;
        case "LockerClosedRed":
            entity.onClick = function() {
                scene.entities.filter(e => e.x === entity.x && e.y === entity.y);
                entity.unload(); // causes the given entity to disapear
            };
            break;
        case "rightSceneButton": // When the player clicks on the right scene button the scene is changed and pico is set to move from left to right
            entity.onClick = function() {
                gameMap.moveLeft();
                if (gameMap.pico != null) gameMap.pico.destroyTicker();
                gameMap.pico.initRightRun(gameMap.app);
                gameMap.pico.loadFromStageLeft(gameMap.app);
            };
            break;
        case "leftSceneButton": // When the player clicks on the left scene button the scene is changed and pico is set to move from right to left
            entity.onClick = function() {
                gameMap.moveRight();
                if (gameMap.pico != null) gameMap.pico.destroyTicker();
                gameMap.pico.initLeftRun(gameMap.app);
                gameMap.pico.loadFromStageRight(gameMap.app);
            };
            break;
    }
};