var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d2ff5e88-4f71-486c-a6a1-6c52e617e86d","d3bdcd62-1167-41ac-ba7b-b50dbbdb73ae","f1c2a9e2-b887-49b8-b85f-00f283de47d6"],"propsByKey":{"d2ff5e88-4f71-486c-a6a1-6c52e617e86d":{"name":"volleyball2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Yr547P.Zjz5iZluXcGpzwKpozGcMO7CM/category_sports/volleyball2.png"},"d3bdcd62-1167-41ac-ba7b-b50dbbdb73ae":{"name":"ball1.png_1","sourceUrl":"assets/v3/animations/XfkL7tWhnn9W-tfeyaUqY17jVsWQx744vUgCXuNhzRY/d3bdcd62-1167-41ac-ba7b-b50dbbdb73ae.png","frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":4,"version":"t7LjJiNLzmcVyk6WRkFqtAuj1IUOngcC","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/v3/animations/XfkL7tWhnn9W-tfeyaUqY17jVsWQx744vUgCXuNhzRY/d3bdcd62-1167-41ac-ba7b-b50dbbdb73ae.png"},"f1c2a9e2-b887-49b8-b85f-00f283de47d6":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background1= createSprite(100,100,20,20);
background1.setAnimation("santa_1");
background1.scale = 2;


var ball;

ball = createSprite(100,100,20,20);
ball.setAnimation("ball1.png_1");
ball.scale = 0.05;

 createEdgeSprites();

var paddle = createSprite(200, 350,120,10);





function draw() {
  background("white");
  
  drawSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  
  paddle.x = World.mouseX;
  
  if(paddle.x < 60){
    paddle.x = 60;
  }
  
  if(paddle.x >340){
    paddle.x = 340;
  }
}


function mousePressed() {
  ball.velocityX = 4;
  ball.velocityY = 4;
  
  ball.x = World.mouseX;
  ball.y = World.mouseY;
  
  
  
}













// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
