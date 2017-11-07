// Inicializamos la Aplicacion
var app = new PIXI.Application();

// Agregamos el canvas al dom(html), lo inserta directamente en el body
document.body.appendChild(app.view);

// Carga una textura/imagen en pantalla
PIXI.loader.add('test', 'test.png').load(function(loader, resources) {

    // This creates a texture from a 'bunny.png' image.
    var ActorBunny = new PIXI.Sprite(resources.test.texture);

    // Setup the position of the bunny
    ActorBunny.x = app.renderer.width / 2;
    ActorBunny.y = app.renderer.height / 2;

    // Rotate around the center
    ActorBunny.anchor.x = 0.5;
    ActorBunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building.
    app.stage.addChild(ActorBunny);

    // Listen for frame updates
    app.ticker.add(function() {
         // each frame we spin the bunny around a bit
         ActorBunny.rotation += 0.01;
    });
});