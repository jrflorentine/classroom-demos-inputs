input.onSound(DetectedSound.Loud, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.EigthNote)
    basic.clearScreen()
})
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
OLED12864_I2C.init(60)
basic.forever(function () {
    if (BitCar.grove_ultrasonic_v2(GrovePin.P1, DistanceUnit.cm) < 5) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
})
