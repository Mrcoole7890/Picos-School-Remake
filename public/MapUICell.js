/*
    This class is in charge of rendering the map cells for the user interface
    This class uses the UnanimatedEntity class to reduced repeated code for displaying assets
*/
var MapUICell = function() {
    this.x;
    this.y;

    this.JSONObjectEmpty = GLOBAL_VALS.entities.MapUICellEmpty;
    this.JSONObjectFull = GLOBAL_VALS.entities.MapUICellFull;

    this.unanimatedEntity;

    this.init = function(x, y) {
        this.x = x;
        this.y = y;
        this.unanimatedEntity = new UnanimatedEntity(this.JSONObjectEmpty, x, y);
    };

    this.load = function(PIXIApplication) {
        this.unanimatedEntity.load(PIXIApplication);
    };

    this.unload = function() {
        this.unanimatedEntity.unload();
    }
};