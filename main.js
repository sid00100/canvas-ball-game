const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
const centerX = canvas.width / 2
const centerY = canvas.height / 2
// // fill rectangle
// ctx.fillStyle = 'red'
// ctx.fillRect(50, 50, 100, 100)


// ctx.fillStyle = 'yellow'
// ctx.fillRect(150, 150, 100, 100)

// // stroke rectangle
// ctx.lineWidth = 5
// ctx.strokeStyle = 'green'
// ctx.strokeRect(10, 10, 350, 350)

// // clearRect
// ctx.clearRect(70, 70, 50, 50)

// // fillText
// ctx.font = '20px arial'
// ctx.fillStyle = 'yellow'
// ctx.fillText('Practicing canvas', 170, 100)

// // strokeText
// ctx.lineWidth = 1
// ctx.strokeStyle = 'red'
// ctx.strokeText('I am high on weed', 170, 140)


// // Canvas Paths
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(70, 90)
// ctx.lineTo(90, 50)
// ctx.lineTo(50, 50)
// // ctx.stroke()
// ctx.fill()

// ctx.moveTo(120, 50)
// ctx.lineTo(100, 90)
// ctx.lineTo(140, 90)
// ctx.lineTo(120, 50)
// ctx.fill()

// // rectangle
// ctx.beginPath()
// ctx.fillStyle = 'yellow'
// ctx.rect(300, 50, 150, 130)
// ctx.fill()

// arc
// ctx.arc(x, y, radius, start angle, end angle, anticlockwise?)

// ctx.beginPath()
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)
// ctx.moveTo(centerX + 100, centerY)
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false)
// ctx.moveTo(centerX - 40, centerY - 80)
// ctx.arc(centerX - 50, centerY - 80, 10, 0, Math.PI * 2, false)
// ctx.moveTo(centerX + 50, centerY - 80)
// ctx.arc(centerX + 40, centerY - 80, 10, 0, Math.PI * 2, false)
// ctx.stroke()

// animation

let circle = {
    x: 250,
    y: 250,
    r: 25,
    ix: 5,
    iy: 3
}

function draw() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false)
    circle.x += circle.ix;
    circle.y += circle.iy;
    ctx.fill()
}

function updateAni() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()

    // detect side walls
    if (circle.x + circle.r > canvas.width || circle.x - circle.r < 0) {
        circle.ix *= -1;
    }
    requestAnimationFrame(updateAni)

    // detect top and bottom walls
    if (circle.y + circle.r > canvas.height || circle.y - circle.r < 0) {
        circle.iy *= -1
    }
}

updateAni()