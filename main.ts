let w = 0
let y = 0
let All = 0
let Strat = 0
let list: number[] = []
let XX = 0
let YY = 0
let ItungList = 0
input.onButtonPressed(Button.A, function () {
    w = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        while (w != 255) {
            w += 5
            basic.pause(1)
            led.plotBrightness(0, y, w)
            led.plotBrightness(1, y, w)
            led.plotBrightness(2, y, w)
            led.plotBrightness(3, y, w)
            led.plotBrightness(4, y, w)
            led.unplot(1, 1)
            led.unplot(2, 1)
            led.unplot(3, 1)
            led.unplot(1, 2)
            led.unplot(3, 2)
            led.unplot(1, 3)
            led.unplot(2, 3)
            led.unplot(3, 3)
        }
        y += 1
        w = 0
    }
    y = -1
    for (let index = 0; index < 6; index++) {
        while (w != 0) {
            w += -5
            basic.pause(1)
            led.plotBrightness(0, y, w)
            led.plotBrightness(1, y, w)
            led.plotBrightness(2, y, w)
            led.plotBrightness(3, y, w)
            led.plotBrightness(4, y, w)
            led.unplot(1, 1)
            led.unplot(2, 1)
            led.unplot(3, 1)
            led.unplot(1, 2)
            led.unplot(3, 2)
            led.unplot(1, 3)
            led.unplot(2, 3)
            led.unplot(3, 3)
        }
        y += 1
        w = 255
    }
})
input.onButtonPressed(Button.B, function () {
    All = 0
    Strat = 0
    list = [555, 1, 325, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 555]
    if (All == 1) {
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                led.plotBrightness(XX, YY, 255)
                XX += 1
            }
            XX = 0
            YY += 1
        }
    } else if (All == 0) {
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                if (list[ItungList] >= 300) {
                    led.plotBrightness(XX, YY, list[ItungList] - 300)
                } else {
                    led.plotBrightness(XX, YY, Strat)
                }
                ItungList += 1
                XX += 1
            }
            YY += 1
            XX = 0
        }
    }
})
basic.forever(function () {
	
})
