let blocksrdum = 1
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
        music.setTempo(100)
        while (true) {
            if (TobbieII.RBlock(165)) {
                alarm = 1
                basic.showLeds(`
                    # . # . #
                    # . # . #
                    # . # . #
                    . . . . .
                    # . # . #
                    `)
                for (let index = 0; index < 5; index++) {
                    for (let index = 0; index < 6; index++) {
                        TobbieII.rightward()
                        basic.pause(50)
                        TobbieII.leftward()
                        basic.pause(50)
                    }
                    TobbieII.rightward()
                    TobbieII.leftward()
                    TobbieII.stopturn()
                    TobbieII.vibrate(8)
                }
                alarm = 0
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            if (TobbieII.LBlock(165)) {
                alarm = 1
                basic.showLeds(`
                    # . # . #
                    # . # . #
                    # . # . #
                    . . . . .
                    # . # . #
                    `)
                for (let index = 0; index < 5; index++) {
                    for (let index = 0; index < 6; index++) {
                        TobbieII.rightward()
                        basic.pause(50)
                        TobbieII.leftward()
                        basic.pause(50)
                    }
                    TobbieII.rightward()
                    TobbieII.leftward()
                    TobbieII.stopturn()
                    TobbieII.vibrate(8)
                }
                alarm = 0
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (alarm == blocksrdum) {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(1046.50, music.beat(BeatFraction.Whole))
    }
})
