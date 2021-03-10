input.onGesture(Gesture.Shake, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})
input.setSoundThreshold(SoundThreshold.Loud, 140)
basic.forever(function () {
    if (BitCar.grove_ultrasonic_v2(GrovePin.P1, DistanceUnit.cm) < 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
    if (input.logoIsPressed() && input.soundLevel() > 140) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.EigthNote)
        basic.clearScreen()
    }
    while (input.buttonIsPressed(Button.A)) {
        servos.P2.setAngle(90)
        basic.pause(500)
        servos.P2.setAngle(180)
        basic.pause(500)
    }
})
