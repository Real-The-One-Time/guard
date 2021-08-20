let alarm = 0
music.setTempo(120)
music.ringTone(523)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
music.stopAllSounds()
TobbieII.vibrate(3)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.setBrightness(0)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
        led.setBrightness(255)
        music.playTone(392, music.beat(BeatFraction.Whole))
        led.setBrightness(0)
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        led.setBrightness(255)
        music.playTone(392, music.beat(BeatFraction.Whole))
        led.setBrightness(0)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        led.setBrightness(255)
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showString("SET")
        while (true) {
            if (!(TobbieII.RBlock(512))) {
                alarm = 1
                basic.showLeds(`
                    # . # . #
                    # . # . #
                    # . # . #
                    . . . . .
                    # . # . #
                    `)
                TobbieII.vibrate(50)
                alarm = 0
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            if (!(TobbieII.LBlock(512))) {
                alarm = 1
                basic.showLeds(`
                    # . # . #
                    # . # . #
                    # . # . #
                    . . . . .
                    # . # . #
                    `)
                TobbieII.vibrate(50)
                alarm = 0
            }
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    music.setTempo(100)
    if (alarm == "1") {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(1046.50, music.beat(BeatFraction.Whole))
    }
})
