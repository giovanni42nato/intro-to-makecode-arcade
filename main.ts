controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
game.splash("Something more exciting", "Splash")
scene.setBackgroundColor(0)
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
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
