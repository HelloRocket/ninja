input.onButtonPressed(Button.A, function () {
    Ninja_arm.set(LedSpriteProperty.X, 1)
    Ninja_hand.set(LedSpriteProperty.X, 0)
    Ninja_Leg.set(LedSpriteProperty.X, 1)
    Ninja_foot.set(LedSpriteProperty.X, 0)
})
input.onButtonPressed(Button.B, function () {
    Ninja_arm.set(LedSpriteProperty.X, 3)
    Ninja_hand.set(LedSpriteProperty.X, 4)
    Ninja_Leg.set(LedSpriteProperty.X, 3)
    Ninja_foot.set(LedSpriteProperty.X, 4)
})
let Ninja_foot: game.LedSprite = null
let Ninja_Leg: game.LedSprite = null
let Ninja_arm: game.LedSprite = null
let Ninja_hand: game.LedSprite = null
basic.showLeds(`
    . . . . #
    . . # . .
    # # # # #
    . # # # .
    # . . . #
    `)
basic.pause(500)
basic.showString("Ninja")
basic.clearScreen()
let Bomb = game.createSprite(4, 0)
let Ninja_Head = game.createSprite(2, 1)
Ninja_hand = game.createSprite(0, 2)
Ninja_arm = game.createSprite(1, 2)
let Ninja_Shoulder = game.createSprite(2, 2)
let Ninja_back = game.createSprite(2, 3)
Ninja_Leg = game.createSprite(1, 3)
Ninja_foot = game.createSprite(0, 4)
basic.forever(function () {
    if (Bomb.get(LedSpriteProperty.Y) == 4) {
        Bomb.delete()
        Bomb = game.createSprite(randint(0, 1) * 4, 0)
    } else if (Bomb.get(LedSpriteProperty.X) == Ninja_hand.get(LedSpriteProperty.X) && Bomb.get(LedSpriteProperty.Y) == Ninja_hand.get(LedSpriteProperty.Y)) {
        game.gameOver()
    } else {
        Bomb.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
