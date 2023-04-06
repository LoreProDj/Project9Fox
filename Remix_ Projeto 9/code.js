var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c7bbb7c3-74fb-480f-bb65-b14bb75fa63d","414e308a-ec82-40bc-85aa-b74ca1ec1648","bea2dba1-6773-4252-8fef-5093df8fbc29","ac4053d0-de75-4ac7-a17f-345daa9660ce","021c99f7-ff1e-486a-a36e-80ecd21d96ad","b2658258-0473-4a94-9781-9ab6103d86fc"],"propsByKey":{"c7bbb7c3-74fb-480f-bb65-b14bb75fa63d":{"name":"enemy4","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","frameSize":{"x":397,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"414e308a-ec82-40bc-85aa-b74ca1ec1648":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/_m98oFbL0qi5E352naSVsuQDkIp8yUe6/category_germs/virus02_14.png","frameSize":{"x":382,"y":328},"frameCount":1,"looping":true,"frameDelay":2,"version":"_m98oFbL0qi5E352naSVsuQDkIp8yUe6","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":328},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_m98oFbL0qi5E352naSVsuQDkIp8yUe6/category_germs/virus02_14.png"},"bea2dba1-6773-4252-8fef-5093df8fbc29":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YNs2Yd1u0QS3wV43zZUhfMTtikeWEv.F/category_retro/retrocreature_08.png"},"ac4053d0-de75-4ac7-a17f-345daa9660ce":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7W9Pnj3A3BnswJEm4J18GGg.Mu3Xhiln/category_retro/retrocreature_14.png"},"021c99f7-ff1e-486a-a36e-80ecd21d96ad":{"name":"hero1","sourceUrl":null,"frameSize":{"x":325,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"MP1wMOazjtsge_DNCqDA7mKFzYCCZNRw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":325,"y":400},"rootRelativePath":"assets/021c99f7-ff1e-486a-a36e-80ecd21d96ad.png"},"b2658258-0473-4a94-9781-9ab6103d86fc":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"48WvIjYXVxyuCdt3Jah08koeLbeNGtRC","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48WvIjYXVxyuCdt3Jah08koeLbeNGtRC/category_backgrounds/background_landscape11.png"}}};
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

var b = createSprite(200,200);
 b.setAnimation("b")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("hero1");
hero.scale=.2;
enemy1.setAnimation("enemy1");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
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
