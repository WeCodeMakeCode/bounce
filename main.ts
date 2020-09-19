namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const Grass = SpriteKind.create()
    export const Paddle = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    myPaddle.x = myPaddle.x + 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myPaddle.x = myPaddle.x - 5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myPaddle.x = myPaddle.x + 5
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Paddle, function (sprite, otherSprite) {
    if (game.runtime() - priorTime >= 1000) {
        if (!(stopped)) {
            info.changeScoreBy(1)
        }
        myBall.setVelocity(myBall.vx, 0 - myBall.y)
        stopped = false
    }
    priorTime = game.runtime()
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Grass, function (sprite, otherSprite) {
    myBall.setVelocity(0, 0)
    stopped = true
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    myPaddle.x = myPaddle.x - 5
})
let priorTime = 0
let myPaddle: Sprite = null
let myBall: Sprite = null
let stopped = false
info.setScore(0)
info.startCountdown(60)
stopped = false
myBall = circle.createCircle(10, 2, true)
myBall.setKind(SpriteKind.Ball)
myBall.setPosition(0, 0)
myBall.setVelocity(10, 10)
myBall.setFlag(SpriteFlag.BounceOnWall, true)
let grass = sprites.create(img`
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777............7777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777....777777777777777777777777777.77777..7...............777777777777.777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...77777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777..77777777...777777777777777777777777711111117777777777777777777777777777711177777777777777777
    777777777777777776777777777777777777777777777777777777.....777777777777777777777777771777777777777711111.....177777777777777777777777711111177777777777777777777
    7777667776777777777777777777777777.77..7777.7....77....77777777777777777777777777777777111177717.77...........11777777777777777771111177777777777777777777777777
    7777776777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777111111111111111111111111111117777777777777777777777777777777
    `, SpriteKind.Grass)
grass.y = 116
myPaddle = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Paddle)
myPaddle.setFlag(SpriteFlag.StayInScreen, true)
myPaddle.y = 110
