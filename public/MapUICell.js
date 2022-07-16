var MapUICell = function(x, y) {
    this.entity;
    this.texturePath;
    this.x = x;
    this.y = y;

    this.full = false;

    this.load = funcion(PIXIAppliaction) {
        if (this.full) this.texturePath = GLOBAL_VALS.entities.MapUICellFull.texturePath;
        else this.texturePath = GLOBAL_VALS.entities.MapUICellEmpty.texturePath;
        
        this.entity = new UnanimatedEntity(this.x, this.y, this.texturePath);
        this.entity.load(PIXIAppliaction);
    };

    this.unload = function() {
        this.entity.unload()
    };
};