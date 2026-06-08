let steps = 0

input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
