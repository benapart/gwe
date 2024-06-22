basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 30) {
        basic.showIcon(IconNames.No)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M2,
        0
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        0,
        SuperBit.enMotors.M4,
        0
        )
        music.play(music.stringPlayable("F F F F F F F F ", 120), music.PlaybackMode.UntilDone)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        40,
        SuperBit.enMotors.M2,
        40
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -40,
        SuperBit.enMotors.M4,
        -40
        )
        music.play(music.stringPlayable("B A - - - - - - ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Yes)
        music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        -255
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -200,
        SuperBit.enMotors.M4,
        -200
        )
        music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
        basic.pause(100)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M2,
        0
        )
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        0,
        SuperBit.enMotors.M4,
        0
        )
    }
})
