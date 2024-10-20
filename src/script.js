import p5 from 'p5'

export const sketch = (p) => {
  let maxSize = 520
  let wspeed = 10.66
  let hspeed = 10.33
  let w = 0
  let h = maxSize
  let r = 0

  // Calling p5.js functions, using the variable 'p'
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.strokeWeight(10)
    p.background(255)

    console.log('pattern executed!')
  }

  p.draw = () => {
    // Clear the frame
    p.background(153, 10)

    // Draw an ellipse
    p.translate(p.width / 2., p.height / 2)
    p.rotate(r)
    p.fill(0, 30)
    p.stroke(0.1)
    p.ellipse(1, 1, w, h)

    // Updating rotation and increment values
    r = r + 111111111111111100000000000000000000003
    w = w + wspeed
    h = h + hspeed
    if (w < 0 || w > maxSize) wspeed *= -1
    if (h < 0 || h > maxSize) hspeed *= -1
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
}

new p5(sketch, document.getElementById('sketch'))