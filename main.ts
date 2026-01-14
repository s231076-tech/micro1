Sugar.onButtonEvent(DigitalPin.P0, function () {
    Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.On)
})
input.onButtonPressed(Button.A, function () {
    Sugar.ledOnoff(DigitalPin.P15, Sugar.LEDSta.Off)
    basic.showIcon(IconNames.Heart)
})
Sugar.onButtonEvent(DigitalPin.P14, function () {
    Sugar.ledOnoff(DigitalPin.P15, Sugar.LEDSta.On)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
