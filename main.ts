input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 10) {
        basic.showString("couvrez-vous ")
    }
    if (input.temperature() >= 10) {
        basic.showString("Bonne journée ")
    }
    if (input.temperature() > 25) {
        basic.showString("hydratez-vous")
    }
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(500)
})
