input.onButtonPressed(Button.A, function () {
    servos.P1.setAngle(180)
    servos.P2.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.setAngle(90)
    servos.P2.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(0)
    servos.P2.setAngle(0)
})
basic.forever(function () {
	
})
