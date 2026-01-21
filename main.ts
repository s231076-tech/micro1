Sugar.onButtonEvent(DigitalPin.P0, function () {
    Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.On)
})
Sugar.on_asr_led(Sugar.LEDCmd.lamp_on, function () {
    Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.On)
    Sugar.ledOnoff(DigitalPin.P15, Sugar.LEDSta.On)
})
input.onButtonPressed(Button.A, function () {
    Sugar.ledOnoff(DigitalPin.P15, Sugar.LEDSta.Off)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    Sugar.ledOnoff(DigitalPin.P1, Sugar.LEDSta.Off)
    basic.showIcon(IconNames.Asleep)
})
Sugar.onButtonEvent(DigitalPin.P14, function () {
    Sugar.ledOnoff(DigitalPin.P15, Sugar.LEDSta.On)
})
Sugar.asr_init(SerialPin.P2, SerialPin.P12)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
