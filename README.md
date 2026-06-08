# Step Counter Using micro:bit

## Project Image

(Project image will be added soon.)

## Project Overview

This project demonstrates how the BBC micro:bit can be used as a simple step counter.

The micro:bit uses its built-in accelerometer to detect movement and estimate the number of steps taken by the user.

## Learning Objectives

- Understand accelerometer sensors.
- Learn motion detection concepts.
- Explore wearable technology.
- Build an activity tracking device.

## Components Required

| Component | Quantity |
|------------|----------|
| BBC micro:bit | 1 |
| USB Cable | 1 |
| Battery Pack | 1 |

## Working Principle

1. The accelerometer detects movement.
2. The micro:bit interprets movement as steps.
3. The step count increases automatically.
4. The current count is displayed on the LED matrix.

## MakeCode Program

```javascript
let steps = 0

input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
```

## Applications

- Fitness tracking
- Health monitoring
- Sports activities
- Wearable devices

## Future Improvements

- Daily step goals
- Wireless data transfer
- Mobile app integration
- Activity analytics

## Author

AnanyaLabs
