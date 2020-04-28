info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
. . 6 6 6 6 . . 
. 6 1 4 4 4 6 . 
6 d 4 4 4 4 4 6 
c b b 1 1 4 d c 
. c b b 4 1 c . 
. . c c c c . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(0, 60)
let mySprite3 = sprites.create(img`
f f f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)
