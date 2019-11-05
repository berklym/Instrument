let frequency = 50
let circle_radius = 0
let circle_x = 0
let circle_y = 0
let noise

//noise shapes

//square
let square_x = 0
let square_y = 0
let square_drag = false
let osc 
let env

//circle
let circle1_x = 0
let circle1_y = 0
let circle1_drag = false
let osc2 
let env2

//star
let star1_x = 0
let star1_y = 0
let star1_drag = false
let osc3 
let env3

// //puzzle1
// let puzzle1
// let puzzle1_x = 0
// let puzzle1_y = 0
// let puzzle2_drag = false
// let osc4
// let env4

//pug1
let pug1
let pug1_x = 0
let pug1_y = 0
let pug1_drag = false
let osc4
let env4

//pug2
let pug2
let pug2_x = 0
let pug2_y = 0
let pug2_drag = false
let osc5
let env5

//pug3
let pug3
let pug3_x = 0
let pug3_y = 0
let pug3_drag = false
let osc6
let env6

//pug4
let pug4
let pug4_x = 0
let pug4_y = 0
let pug4_drag = false
let osc7
let env7

//pug5
let pug5
let pug5_x = 0
let pug5_y = 0
let pug5_drag = false
let osc8
let env8

//pug6
let pug6
let pug6_x = 0
let pug6_y = 0
let pug6_drag = false
let osc9
let env9

//pug7
let pug7
let pug7_x = 0
let pug7_y = 0
let pug7_drag = false
let osc10
let env10

//pug8
let pug8
let pug8_x = 0
let pug8_y = 0
let pug8_drag = false
let osc11
let env11

//pug9
let pug9
let pug9_x = 0
let pug9_y = 0
let pug9_drag = false
let osc12
let env12

//pug10
let pug10
let pug10_x = 0
let pug10_y = 0
let pug10_drag = false
let osc13
let env13

//pug11
let pug11
let pug11_x = 0
let pug11_y = 0
let pug11_drag = false
let osc14
let env14

//pug12
let pug12
let pug12_x = 0
let pug12_y = 0
let pug12_drag = false
let osc15
let env15

//pug13
let pug13
let pug13_x = 0
let pug13_y = 0
let pug13_drag = false
let osc16
let env16

//pug14
let pug14
let pug14_x = 0
let pug14_y = 0
let pug14_drag = false
let osc17
let env17

//pug15
let pug15
let pug15_x = 0
let pug15_y = 0
let pug15_drag = false
let osc18
let env18

//pug16
let pug16
let pug16_x = 0
let pug16_y = 0
let pug16_drag = false
let osc19
let env19

let cheers
 //let reverb


function preload() {
	
	cheers = loadSound('cheers.mp3')


	//puzzle1 = loadImage('puzzle.jpg')
	pug1 = loadImage('pieces/pug1.jpg')
	pug2 = loadImage('pieces/pug2.jpg')
	pug3 = loadImage('pieces/pug3.jpg')
	pug4 = loadImage('pieces/pug4.jpg')
	pug5 = loadImage('pieces/pug5.jpg')
	pug6 = loadImage('pieces/pug6.jpg')
	pug7 = loadImage('pieces/pug7.jpg')
	pug8 = loadImage('pieces/pug8.jpg')
	pug9 = loadImage('pieces/pug9.jpg')
	pug10 = loadImage('pieces/pug10.jpg')
	pug11 = loadImage('pieces/pug11.jpg')
	pug12 = loadImage('pieces/pug12.jpg')
	pug13 = loadImage('pieces/pug13.jpg')
	pug14 = loadImage('pieces/pug14.jpg')
	pug15 = loadImage('pieces/pug15.jpg')
	pug16 = loadImage('pieces/pug16.jpg')

}





function setup() {



	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	//random placements

	//circle random placement
	circle1_x = random(0, width)
	circle1_y = random(height, 0)

	//square random placement
	square_x = random(0, width)
	square_y = random(height, 0)

	//star random placement
	star1_x = random(0, width)
	star1_y = random(height, 0)

	//pug1 random placement
	pug1_x = random(0, width)
	pug1_y = random(height, 0)

	//pug2 random placement
	pug2_x = random(0, width)
	pug2_y = random(height, 0)

	//pug3 random placement
	pug3_x = random(0, width)
	pug3_y = random(height, 0)

	//pug4 random placement
	pug4_x = random(0, width)
	pug4_y = random(height, 0)

	//pug5 random placement
	pug5_x = random(0, width)
	pug5_y = random(height, 0)

	//pug6 random placement
	pug6_x = random(0, width)
	pug6_y = random(height, 0)

	//pug7 random placement
	pug7_x = random(0, width)
	pug7_y = random(height, 0)

	//pug8 random placement
	pug8_x = random(0, width)
	pug8_y = random(height, 0)

	//pug9 random placement
	pug9_x = random(0, width)
	pug9_y = random(height, 0)

	//pug10 random placement
	pug10_x = random(0, width)
	pug10_y = random(height, 0)

	//pug11 random placement
	pug11_x = random(0, width)
	pug11_y = random(height, 0)

	//pug12 random placement
	pug12_x = random(0, width)
	pug12_y = random(height, 0)

	//pug13 random placement
	pug13_x = random(0, width)
	pug13_y = random(height, 0)

	//pug14 random placement
	pug14_x = random(0, width)
	pug14_y = random(height, 0)

	//pug15 random placement
	pug15_x = random(0, width)
	pug15_y = random(height, 0)

	//pug16 random placement
	pug16_x = random(0, width)
	pug16_y = random(height, 0)


	//sounds


	//sound1 - square
	osc = new p5.Oscillator()
	osc.setType("sine")
	osc.start()
	osc.amp(0)

	env = new p5.Envelope()
	//four numbers correlates to the attack, decay, sustain and release speed
	env.setADSR(.03, .5, .2, .2)


	//sound2 - circle
	osc2 = new p5.Oscillator()
	osc2.setType("sawtooth")
	osc2.start()
	osc2.amp(0)
	//osc2.freq(300)

	env2 = new p5.Envelope()
	env2.setADSR(.1, .2, .4, 0.3)
	

	//sound3 - star
	osc3 = new p5. Oscillator()
	osc3.setType("square")
	osc3.start()
	osc3.amp(0)

	env3 = new p5.Envelope()
	env3.setADSR(.04, .3, .1, .2)

	//sound4 - pug1
	osc4 = new p5. Oscillator()
	osc4.setType("sine")
	osc4.start()
	osc4.amp(0)

	env4 = new p5.Envelope()
	env4.setADSR(.03, .5, .2, .1)

	//sound5 - pug2
	osc5 = new p5. Oscillator()
	osc5.setType("square")
	osc5.start()
	osc5.amp(0)

	env5 = new p5.Envelope()
	env5.setADSR(.07, .3, .1, .4)

	//sound6 - pug3
	osc6 = new p5. Oscillator()
	osc6.setType("sine")
	osc6.start()
	osc6.amp(0)

	env6 = new p5.Envelope()
	env6.setADSR(.3, .05, .3, .1)

	//sound7 - pug4
	osc7 = new p5. Oscillator()
	osc7.setType("sawtooth")
	osc7.start()
	osc7.amp(0)

	env7 = new p5.Envelope()
	env7.setADSR(.5, .5, .02, .3)

	//sound8 - pug5
	osc8 = new p5. Oscillator()
	osc8.setType("sine")
	osc8.start()
	osc8.amp(0)

	env8 = new p5.Envelope()
	env8.setADSR(.03, .5, .6, .1)

	//sound9 - pug6
	osc9 = new p5. Oscillator()
	osc9.setType("square")
	osc9.start()
	osc9.amp(0)

	env9 = new p5.Envelope()
	env9.setADSR(.9, .05, .7, .1)

	//sound10 - pug7
	osc10 = new p5. Oscillator()
	osc10.setType("sine")
	osc10.start()
	osc10.amp(0)

	env10 = new p5.Envelope()
	env10.setADSR(.09, .5, .02, .1)

	//sound11 - pug8
	osc11 = new p5. Oscillator()
	osc11.setType("sawtooth")
	osc11.start()
	osc11.amp(0)

	env11 = new p5.Envelope()
	env11.setADSR(.05, .3, .2, .01)

	//sound12 - pug9
	osc12 = new p5. Oscillator()
	osc12.setType("sine")
	osc12.start()
	osc12.amp(0)

	env12 = new p5.Envelope()
	env12.setADSR(.02, .06, .4, .3)

	//sound13 - pug10
	osc13 = new p5. Oscillator()
	osc13.setType("square")
	osc13.start()
	osc13.amp(0)

	env13 = new p5.Envelope()
	env13.setADSR(.06, .3, .07, .4)

	//sound14 - pug11
	osc14 = new p5. Oscillator()
	osc14.setType("sine")
	osc14.start()
	osc14.amp(0)

	env14 = new p5.Envelope()
	env14.setADSR(.06, .3, .07, .4)

	//sound15 - pug12
	osc15 = new p5. Oscillator()
	osc15.setType("sawtooth")
	osc15.start()
	osc15.amp(0)

	env15 = new p5.Envelope()
	env15.setADSR(.03, .3, .07, .4)

	//sound16 - pug13
	osc16 = new p5. Oscillator()
	osc16.setType("sine")
	osc16.start()
	osc16.amp(0)

	env16 = new p5.Envelope()
	env16.setADSR(.02, .6, .04, .02)

	//sound17 - pug14
	osc17 = new p5. Oscillator()
	osc17.setType("square")
	osc17.start()
	osc17.amp(0)

	env17 = new p5.Envelope()
	env17.setADSR(.03, .5, .04, .6)

	//sound18 - pug15
	osc18 = new p5. Oscillator()
	osc18.setType("sawtooth")
	osc18.start()
	osc18.amp(0)

	env18 = new p5.Envelope()
	env18.setADSR(.02, .7, .08, .05)

	//sound19 - pug16
	osc19 = new p5. Oscillator()
	osc19.setType("sine")
	osc19.start()
	osc19.amp(0)

	env19 = new p5.Envelope()
	env19.setADSR(.07, .4, .02, .5)
	

	//osc.freq(300)

	noise = new p5.Noise()
	noise.setType("brown") // other options are 'brown' and 'pink' and 'white'
	noise.amp(0)
	
	// reverb = new p5.Reverb()
	// bark.disconnect()
	// // first number is how long the sounds goes for and the second is the decay rate
	// reverb.process(bark, 3, 2)

	
}




function draw() {
	noStroke()
	
	//last two numbers relate to the color of the fill
	fill(map(frequency, 50, 2000, 0, 255), 150, 250)
	
	rect(0, 0, width, height)

	fill(255, 255, 0)
	ellipse(circle_x, circle_y, circle_radius, circle_radius)

	
	push()
	// translate(width * 0.2, height * 0.5)
 	// rotate(frameCount / 100.0)
	
	//star
	fill(60, 179, 113)
  	star(star1_x, star1_y, 70, 100, 20)
  	pop()

	//each frame decreases the circle radius by one when mouse is not pressed
	if (circle_radius > 0 && mouseIsPressed == false) {
		circle_radius -= 3
	}
	

	push()

	if (osc.getType() == 'sine') {
		fill(0, 255, 0)
	} else {
		fill(0, 0, 255)
	}
	

	//square
	rect(square_x, square_y, 70, 70)


	
	pop()

	//circle
	fill(152, 251, 152)
	ellipse(circle1_x, circle1_y, 50, 50)

	//puzzle pic when mouse is pressed
	// if (mouseIsPressed) {
	// image(puzzle, mouseX - puzzle.width/2, mouseY - puzzle.height/2 )
	//}

	//pug1
	image(pug1, pug1_x, pug1_y, 100, 100)

	//pug2
	image(pug2, pug2_x, pug2_y, 100, 100)

	//pug3
	image(pug3, pug3_x, pug3_y, 100, 100)

	//pug4
	image(pug4, pug4_x, pug4_y, 100, 100)

	//pug5
	image(pug5, pug5_x, pug5_y, 100, 100)

	//pug6
	image(pug6, pug6_x, pug6_y, 100, 100)

	//pug7
	image(pug7, pug7_x, pug7_y, 100, 100)

	//pug8
	image(pug8, pug8_x, pug8_y, 100, 100)

	//pug9
	image(pug9, pug9_x, pug9_y, 100, 100)

	//pug10
	image(pug10, pug10_x, pug10_y, 100, 100)

	//pug11
	image(pug11, pug11_x, pug11_y, 100, 100)

	//pug12
	image(pug12, pug12_x, pug12_y, 100, 100)

	//pug13
	image(pug13, pug13_x, pug13_y, 100, 100)

	//pug14
	image(pug14, pug14_x, pug14_y, 100, 100)

	//pug15
	image(pug15, pug15_x, pug15_y, 100, 100)

	//pug16
	image(pug16, pug16_x, pug16_y, 100, 100)
	



	let puzzle_complete = true

	//x connections

	 if (pug5_x - pug8_x < 95 || pug5_x - pug8_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug5 and 8 connected')
	 }


	 if(pug10_x - pug5_x < 95 || pug10_x - pug5_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug10 and 5 connected')
	 }


	 if(pug7_x - pug10_x < 95 || pug7_x - pug10_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug7 and 10 connected')
	 }

	 
	if(pug3_x - pug14_x < 95 || pug3_x - pug14_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug3 and 14 connected')
	 }

	 if(pug15_x - pug3_x < 95 || pug15_x - pug3_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug15 and 3 connected')
	 }

	 if(pug12_x - pug15_x < 95 || pug12_x - pug15_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug12 and 15 connected')
	 }

	 if(pug2_x - pug4_x < 95 || pug2_x - pug4_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug2 and 4 connected')
	 }

	 if(pug9_x - pug2_x < 95 || pug9_x - pug2_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug9 and 2 connected')
	 }

	 if(pug1_x - pug9_x < 95 || pug1_x - pug9_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug1 and 9 connected')
	 }

	 if(pug6_x - pug13_x < 95 || pug6_x - pug13_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug6 and 13 connected')
	 }

	 if(pug11_x - pug6_x < 95 || pug11_x - pug6_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug11 and 6 connected')
	 }

	 if(pug16_x - pug11_x < 95 || pug16_x - pug11_x > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug16 and 11 connected')
	 }


	 //y connections

	 if (pug14_y - pug8_y < 95 || pug14_y - pug8_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug14 and 8 connected')
	 }

	 if (pug4_y - pug14_y < 95 || pug4_y - pug14_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug4 and 14 connected')
	 }

	 if (pug13_y - pug4_y < 95 || pug13_y - pug4_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug13 and 4 connected')
	 }

	 if (pug3_y - pug5_y < 95 || pug3_y - pug5_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug3 and 5 connected')
	 }

	 if (pug2_y - pug3_y < 95 || pug2_y - pug3_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug2 and 3 connected')
	 }

	 if (pug6_y - pug2_y < 95 || pug6_y - pug2_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug6 and 2 connected')
	 }

	 if (pug15_y - pug10_y < 95 || pug15_y - pug10_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug15 and 10 connected')
	 }

	 if (pug9_y - pug15_y < 95 || pug9_y - pug15_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug9 and 15 connected')
	 }

	 if (pug11_y - pug9_y < 95 || pug11_y - pug9_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug11 and 9 connected')
	 }

	 if (pug12_y - pug7_y < 95 || pug12_y - pug7_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug12 and 7 connected')
	 }

	 if (pug1_y - pug12_y < 95 || pug1_y - pug12_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug1 and 12 connected')
	 }

	 if (pug16_y - pug1_y < 95 || pug16_y - pug1_y > 105) {
	 	puzzle_complete = false
	 } else {
	 	print('pug16 and 1 connected')
	 }









	 if (puzzle_complete == true) {
	 	print('puzzle_complete')
	 	cheers.play()
	 } else {
	 	//print('puzzle_notcomplete')
	 }


}

function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints
  	let halfAngle = angle / 2.0
  	beginShape()
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2
    let sy = y + sin(a) * radius2
    vertex(sx, sy)
    sx = x + cos(a + halfAngle) * radius1
    sy = y + sin(a + halfAngle) * radius1
    vertex(sx, sy)
  }
  endShape(CLOSE)
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)



}


function mousePressed() {
	
	//bark.play()

	circle_radius = 100

	circle_x = mouseX
	circle_y = mouseY

	mouseDragged()


	//test square button
	if (mouseX > square_x && mouseX < square_x + 70 && mouseY > square_y && mouseY < square_y + 70) {
		print('button clicked')
		square_drag = true
		osc.start()
		osc.amp(env)
		env.triggerAttack()
	// noise.start()
	// noise.amp(env)
		
	}
	



	
	//test circle button
	if(mouseX > circle1_x - 25 && mouseX < circle1_x + 25 && mouseY > circle1_y - 25 && mouseY < circle1_y + 25) {
		print('button clicked')
		circle1_drag = true
		osc2.start()
		osc2.amp(env2)
		env2.triggerAttack()
	}
	
	//test star button
	if (mouseX > star1_x - 100 && mouseX < star1_x + 100 && mouseY > star1_y - 100 && mouseY < star1_y + 100) {
		print('button clicked')
		star1_drag = true
		osc3.start()
		osc3.amp(env3)
		env3.triggerAttack()
	}
	
	//test pug1 button
	if (mouseX > pug1_x && mouseX < pug1_x + 100 && mouseY > pug1_y && mouseY < pug1_y + 100) {
		print('button clicked')
		pug1_drag = true
		osc4.start()
		osc4.amp(env4)
		env4.triggerAttack()
	}

	//test pug2 button
	if (mouseX > pug2_x && mouseX < pug2_x + 100 && mouseY > pug2_y && mouseY < pug2_y + 100) {
		print('button clicked')
		pug2_drag = true
		osc5.start()
		osc5.amp(env5)
		env5.triggerAttack()
	}

	//test pug3 button
	if (mouseX > pug3_x && mouseX < pug3_x + 100 && mouseY > pug3_y && mouseY < pug3_y + 100) {
		print('button clicked')
		pug3_drag = true
		osc6.start()
		osc6.amp(env6)
		env6.triggerAttack()
	}

	//test pug4 button
	if (mouseX > pug4_x && mouseX < pug4_x + 100 && mouseY > pug4_y && mouseY < pug4_y + 100) {
		print('button clicked')
		pug4_drag = true
		osc7.start()
		osc7.amp(env7)
		env7.triggerAttack()
	}

	//test pug5 button
	if (mouseX > pug5_x && mouseX < pug5_x + 100 && mouseY > pug5_y && mouseY < pug5_y + 100) {
		print('button clicked')
		pug5_drag = true
		osc8.start()
		osc8.amp(env8)
		env8.triggerAttack()
	}

	//test pug6 button
	if (mouseX > pug6_x && mouseX < pug6_x + 100 && mouseY > pug6_y && mouseY < pug6_y + 100) {
		print('button clicked')
		pug6_drag = true
		osc9.start()
		osc9.amp(env9)
		env9.triggerAttack()
	}

	//test pug7 button
	if (mouseX > pug7_x && mouseX < pug7_x + 100 && mouseY > pug7_y && mouseY < pug7_y + 100) {
		print('button clicked')
		pug7_drag = true
		osc10.start()
		osc10.amp(env10)
		env10.triggerAttack()
	}

	//test pug8 button
	if (mouseX > pug8_x && mouseX < pug8_x + 100 && mouseY > pug8_y && mouseY < pug8_y + 100) {
		print('button clicked')
		pug8_drag = true
		osc11.start()
		osc11.amp(env11)
		env11.triggerAttack()
	}

	//test pug9 button
	if (mouseX > pug9_x && mouseX < pug9_x + 100 && mouseY > pug9_y && mouseY < pug9_y + 100) {
		print('button clicked')
		pug9_drag = true
		osc12.start()
		osc12.amp(env12)
		env12.triggerAttack()
	}

	//test pug10 button
	if (mouseX > pug10_x && mouseX < pug10_x + 100 && mouseY > pug10_y && mouseY < pug10_y + 100) {
		print('button clicked')
		pug10_drag = true
		osc13.start()
		osc13.amp(env13)
		env13.triggerAttack()
	}

	//test pug11 button
	if (mouseX > pug11_x && mouseX < pug11_x + 100 && mouseY > pug11_y && mouseY < pug11_y + 100) {
		print('button clicked')
		pug11_drag = true
		osc14.start()
		osc14.amp(env14)
		env14.triggerAttack()
	}

	//test pug12 button
	if (mouseX > pug12_x && mouseX < pug12_x + 100 && mouseY > pug12_y && mouseY < pug12_y + 100) {
		print('button clicked')
		pug12_drag = true
		osc15.start()
		osc15.amp(env15)
		env15.triggerAttack()
	}

	//test pug13 button
	if (mouseX > pug13_x && mouseX < pug13_x + 100 && mouseY > pug13_y && mouseY < pug13_y + 100) {
		print('button clicked')
		pug13_drag = true
		osc16.start()
		osc16.amp(env16)
		env16.triggerAttack()
	}

	//test pug14 button
	if (mouseX > pug14_x && mouseX < pug14_x + 100 && mouseY > pug14_y && mouseY < pug14_y + 100) {
		print('button clicked')
		pug14_drag = true
		osc17.start()
		osc17.amp(env17)
		env17.triggerAttack()
	}

	//test pug15 button
	if (mouseX > pug15_x && mouseX < pug15_x + 100 && mouseY > pug15_y && mouseY < pug15_y + 100) {
		print('button clicked')
		pug15_drag = true
		osc18.start()
		osc18.amp(env18)
		env18.triggerAttack()
	}

	//test pug16 button
	if (mouseX > pug16_x && mouseX < pug16_x + 100 && mouseY > pug16_y && mouseY < pug16_y + 100) {
		print('button clicked')
		pug16_drag = true
		osc19.start()
		osc19.amp(env19)
		env19.triggerAttack()
	}




	// let reverb_time = map(mouseY, 0, height, .1, 3)
	// reverb.process(bark.reverb_time, 2)
	// bark.play


}



function mouseReleased() {
	//osc.stop()
	env.triggerRelease()
	square_drag = false
	

	env2.triggerRelease()
	circle1_drag = false

	env3.triggerRelease()
	star1_drag = false

	env4.triggerRelease()
	pug1_drag = false

	env5.triggerRelease()
	pug2_drag = false

	env6.triggerRelease()
	pug3_drag = false

	env7.triggerRelease()
	pug4_drag = false

	env8.triggerRelease()
	pug5_drag = false

	env9.triggerRelease()
	pug6_drag = false

	env10.triggerRelease()
	pug7_drag = false

	env11.triggerRelease()
	pug8_drag = false

	env12.triggerRelease()
	pug9_drag = false

	env13.triggerRelease()
	pug10_drag = false

	env14.triggerRelease()
	pug11_drag = false

	env15.triggerRelease()
	pug12_drag = false

	env16.triggerRelease()
	pug13_drag = false

	env17.triggerRelease()
	pug14_drag = false

	env18.triggerRelease()
	pug15_drag = false

	env19.triggerRelease()
	pug16_drag = false

	//circle_radius = 0
}


function mouseDragged() {

	if (square_drag == true) {
		square_x = mouseX - 35
		square_y = mouseY - 35

	}

	if (circle1_drag == true) {
		circle1_x = mouseX 
		circle1_y = mouseY 
	}

	if (star1_drag == true) {
		star1_x = mouseX
		star1_y = mouseY
	}

	if (pug1_drag == true) {
		pug1_x = mouseX - 50
		pug1_y = mouseY - 50
	}

	if (pug2_drag == true) {
		pug2_x = mouseX - 50
		pug2_y = mouseY - 50
	}

	if (pug3_drag == true) {
		pug3_x = mouseX - 50
		pug3_y = mouseY - 50
	}

	if (pug4_drag == true) {
		pug4_x = mouseX - 50
		pug4_y = mouseY - 50
	}

	if (pug5_drag == true) {
		pug5_x = mouseX - 50
		pug5_y = mouseY - 50
	}

	if (pug6_drag == true) {
		pug6_x = mouseX - 50
		pug6_y = mouseY - 50
	}

	if (pug7_drag == true) {
		pug7_x = mouseX - 50
		pug7_y = mouseY - 50
	}

	if (pug8_drag == true) {
		pug8_x = mouseX - 50
		pug8_y = mouseY - 50
	}

	if (pug9_drag == true) {
		pug9_x = mouseX - 50
		pug9_y = mouseY - 50
	}

	if (pug10_drag == true) {
		pug10_x = mouseX - 50
		pug10_y = mouseY - 50
	}

	if (pug11_drag == true) {
		pug11_x = mouseX - 50
		pug11_y = mouseY - 50
	}

	if (pug12_drag == true) {
		pug12_x = mouseX - 50
		pug12_y = mouseY - 50
	}

	if (pug13_drag == true) {
		pug13_x = mouseX - 50
		pug13_y = mouseY - 50
	}

	if (pug14_drag == true) {
		pug14_x = mouseX - 50
		pug14_y = mouseY - 50
	}

	if (pug15_drag == true) {
		pug15_x = mouseX - 50
		pug15_y = mouseY - 50
	}

	if (pug16_drag == true) {
		pug16_x = mouseX - 50
		pug16_y = mouseY - 50
	}






	frequency = map(mouseY, 0, height, 2000, 50)
	osc.freq(frequency)
	osc2.freq(frequency)
	osc3.freq(frequency)
	osc4.freq(frequency)
	osc5.freq(frequency)
	osc6.freq(frequency)
	osc7.freq(frequency)
	osc8.freq(frequency)
	osc9.freq(frequency)
	osc10.freq(frequency)
	osc11.freq(frequency)
	osc12.freq(frequency)
	osc13.freq(frequency)
	osc14.freq(frequency)
	osc15.freq(frequency)
	osc16.freq(frequency)
	osc17.freq(frequency)
	osc18.freq(frequency)
	osc19.freq(frequency)


	//sine on one side of screen, square on the other
	// if (mouseX < width/2) {
	// 	osc.setType("sine")
	// } else {
	// 	osc.setType("square")
	// }

	//pan is the balance between the left and right speaker
	let pan = map(mouseX, 0, width, -1, 1)
	osc.pan(pan)

	circle_x = mouseX
	circle_y = mouseY





}

// test mouse click on green box
function mouseClicked() {
	

		// if (osc.getType() == 'square') {
		// 	osc.setType('sine')
		// } else {
		// 	osc.setType('square')
		//}
		
	
}


function touchStarted() {
	mousePressed()
	mouseClicked()
}

function touchEnded() {
	mouseReleased()
}

function keyTyped() {
	print ('I typed the key' + key)
}



