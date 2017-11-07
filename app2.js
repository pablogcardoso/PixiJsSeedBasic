
// Inicializamos la Aplicacion
var app = new PIXI.Application();
document.body.appendChild(app.view);

/**
 * 
 */
PIXI.loader
    .add('player', 'assets/img.png')
    .load(onAssetsLoaded);
/**
 * Load & init App
 * @param {*} loader 
 * @param {*} resources 
 */
function onAssetsLoaded(loader,resources){
   
        var ActorP = new ActorPlayer(loader,resources,'player');
        ActorP.setAnchorX(0.5);
        ActorP.setAnchorY(0.5);
        ActorP.move((app.renderer.width / 2),(app.renderer.height / 2));
        ActorP.render();
           
        app.ticker.add(function() {
            //frame listener
             ActorP.rotate(0.01);
        });
};


/**
 * ActorPlayer Class
 * @param {object} loader 
 * @param {object} resources 
 * @param {string} sprite 
 */
var ActorPlayer = function(loader, resources, sprite){
   
    this.ActorPlayer = null;
    var anchory = 0;
    var anchorx = 0;
    this.spritePlayer = sprite || 'player';
    //console.log(resources['player'].url);
    this.ActorPlayer = new PIXI.Sprite(resources[this.spritePlayer].texture);
    //resources.player.texture
};
ActorPlayer.prototype.create = function() {
    console.log(this.ActorPlayer);
}
ActorPlayer.prototype.move = function(x, y) {
    this.ActorPlayer.x = x || this.ActorPlayer.x;
    this.ActorPlayer.y = y || this.ActorPlayer.y;
    
};

ActorPlayer.prototype.setAnchorX = function(value){ 
    this.ActorPlayer.anchor.x = value || this.ActorPlayer.anchor.x; 
};
ActorPlayer.prototype.setAnchorY = function(value){ 
    this.ActorPlayer.anchor.y = value || this.ActorPlayer.anchor.y; 
};
ActorPlayer.prototype.rotate = function(value){ 
    this.ActorPlayer.rotation += value;
};
ActorPlayer.prototype.getRotation = function(value){ 
    return this.ActorPlayer.rotation;
};
ActorPlayer.prototype.render = function(){
    app.stage.addChild(this.ActorPlayer);
};
//ActorPlayer.prototype.constructor = ActorPlayer;