controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.spray, randint(100, 600))
})
let mySprite: Sprite = null
game.splash("Something more exciting", "Splash")
scene.setBackgroundColor(0)
scene.setBackgroundColor(5)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 3 . . . 
    . . . . . . 3 3 3 . . 3 3 . . . 
    . . . . . 3 . . . . . 3 . . . . 
    . . . . 3 . . . . . 3 3 . . . . 
    . . . . 3 . . 3 3 3 . . . . . . 
    . . . . 3 . 3 3 3 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
