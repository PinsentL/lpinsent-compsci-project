namespace SpriteKind {
    export const Food1 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Food3 = SpriteKind.create()
    export const Food4 = SpriteKind.create()
    export const Food5 = SpriteKind.create()
    export const Food6 = SpriteKind.create()
    export const Food7 = SpriteKind.create()
    export const Food8 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food3, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000101010101010000010101000001010100000000000100000100010000000000000000000002000001000200000000000000010102020000010000000002010100000000000000000100000000010000000001000000000001000000000100000000010102020000010000000001000000000000000000000100000000010000000000000000000001000002020100000000010101010000020000010000000000000000000100000200000100000000000001010202000001000001020200000000000000000000010000000000000000000000000000000100000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.dungeon.hazardLava1,myTiles.tile1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite6 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food4)
    mySprite6.setPosition(200, 200)
    info.changeScoreBy(1)
    mySprite5.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food8, function (sprite, otherSprite) {
    effects.confetti.startScreenEffect()
    pause(5000)
    effects.confetti.endScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    mySprite.setPosition(20, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101000000000000000000000000000000010000000000000000000000000000000100000000000101010101010101010101000000000001000000000000000000000000000000010000000000000000000000000000000101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101000000000001000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,myTiles.tile1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite3 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food1)
    mySprite3.setPosition(120, 75)
    info.changeScoreBy(1)
    mySprite2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food6, function (sprite, otherSprite) {
    info.startCountdown(15)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000203000003020202030000030202020200000000000000000200000200000000000000000000000002000002000000000000030303030303030000030300000000000200000000000000000002000000000002000000000000000000020000000000020202020303030000000200000000000200000000000000000002000000000002000000000000000000020000000000030000030202030000000300000000000300000200000200000003000000000003020202000003030000030000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.builtin.brick,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite9 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food7)
    mySprite9.setPosition(220, 220)
    info.changeScoreBy(1)
    mySprite8.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(20, 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food1, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010000010101000000000000000000000100000000000000000000000000000001000000000000000000000001000000010000000000000000000000010000000100000000000101010100000100000000000001010100000000000001000000000000000000000000000000010000000000000000000000000000000101010101010101010100000101000000000000000100000000000000010000000000000000000000000000000100000000000000000000000000000001000000000100000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,myTiles.tile1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite4 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food2)
    mySprite4.setPosition(170, 225)
    info.changeScoreBy(1)
    mySprite3.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food5, function (sprite, otherSprite) {
    info.startCountdown(15)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030300000000000000000000000000000003000000000000000000000000000000030000000000030303030303030303030300000000000300000000000000000000000000000003000000000000000000000000000000030303030303030303030300000000000000000000000000000003000000000000000000000000000000030300000000030303030303030303030300000000000300000000000000000000000000000003030303030303030303030000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.builtin.brick,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite8 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food6)
    mySprite8.setPosition(20, 60)
    info.changeScoreBy(1)
    mySprite7.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food7, function (sprite, otherSprite) {
    info.startCountdown(10)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000302020202020202020203000000000003000000000000000000030000000000020000000000000000000200000000000200000000000000000002000000000002000000000000000000020000000000020000000000000000000200000000000200000000000000000002000000000002000000000000000000020000000000020000000000000000000200000000000200000000000000000002000000000003030202030000030203030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.builtin.brick,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite10 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food8)
    mySprite10.setPosition(100, 100)
    info.changeScoreBy(1)
    mySprite9.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000101010101000001010101010101000000000000010000000000010000010000000000000100000000000000000101010000000001000001000000000001000001010000010101010101000000010000000000000000010000010000000100000000000000000100000100000001000000000101000001000001000001010000000001000000000000010000000100000000010000000000000100000001000000000101010101010101000000010000000000000100000000010000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,myTiles.tile1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite5 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food3)
    mySprite5.setPosition(20, 60)
    info.changeScoreBy(1)
    mySprite4.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food4, function (sprite, otherSprite) {
    info.startCountdown(20)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010100000001010c0c010101010101000001000000000000000000000000000000010000000000000000000000000000000100000000000001010101010101010c0c00000000000000000000000000000000000000000000000000000000000000000000000000000c0c010101010101010c0c0c010000000100000001000000000000000000000c0100000000000000000000000000000001000000000000000000000000000000010101010101010c0c0c0000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.builtin.crowd4,sprites.castle.saplingOak,sprites.builtin.crowd3,sprites.builtin.crowd8,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundSouthWest0,myTiles.tile1,sprites.dungeon.hazardLava1],
            TileScale.Sixteen
        ))
    mySprite.setPosition(20, 20)
    mySprite7 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food5)
    mySprite7.setPosition(200, 200)
    info.changeScoreBy(1)
    mySprite6.destroy()
})
let mySprite10: Sprite = null
let mySprite7: Sprite = null
let mySprite4: Sprite = null
let mySprite8: Sprite = null
let mySprite9: Sprite = null
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite6: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
info.setScore(0)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(20, 20)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010100000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101000001010101000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.castle.shrub,sprites.builtin.crowd8,sprites.dungeon.buttonPink,sprites.builtin.coral5,sprites.builtin.oceanDepths0,sprites.builtin.coral0,myTiles.tile1],
            TileScale.Sixteen
        ))
info.setLife(3)
mySprite2 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food)
mySprite2.setPosition(10, 200)
