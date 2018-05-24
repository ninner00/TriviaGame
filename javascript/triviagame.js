

$(document).ready(function() {
// 1. Need to have the div id="start" hide when clicked and show div id="timer" and div id="question".

// function setup() {
// 	index = 0;
// 	$('#options').append('<button id="startButton">Start</button>');
// 	$('#startButton').on('click', function() {
// 		$(this).hide();
// 		timer.countDown.start();
// 	 	loadQuestion(index);
// 	});
// }	
	
	 
	
		// var countDown();
		var timeRemain = $("#timeRemain");
		// 2. Have the timer countdown from 30 - 0 on each question
		// var number = 5;	
		var ispaused = false;
	   	var timer = {
	   		// start function
	   		
	   		startTime: 5,
	   		start: function(){

   				countDownTimer = setInterval(timer.countDown, 1000);
	   		},
	   		// countdown function
	   		countDown: function(){

	   			if (!ispaused){
	   				timer.startTime--;
				//  Show the number in the #timeRemain tag.
				$("#timer").html(timer.startTime);
				//  Once number hits zero...
		        if (timer.startTime >= 0) {
		        	$("#timer").html('<h3>Time Remaining: ' + timer.startTime + '  Seconds!<h3>');
	        	}

	      		// else if (){

	      		// }

	        	// else if (timer.startTime === 0) {
	        	// 	index++;
	        	// 	$("#timesUp").html("<h3>Time's Up!</h3>");
	        	// 	console.log("time is up");
	        	// 	unanswered();
	        	// 	timer.reset();

	        	// }

	        	else {
	        		index++;
	        		
	        		// alert("TIME IS UP!");
	        		unansweredQ();

	        		
        			$('#correctImageDiv').show();
	        		//show image
	        		//clear image after 4 seconds
        			ispaused = true;
					setTimeout(function(){
						ispaused = false;
						timer.reset();
        			if (index < questionArray.length) {
							loadQuestion(index);
						} 
						else {
							$(".buttonOption").hide();
							showScore();
						}


						}, 5000);



	        		// wrongAnswer();
	        		
				}
	   			}
				//  Decrease number by one.
	  			
			},
			// stop function
		 	stop: function(){
		 		//  Clears out countDown
	      		clearInterval(countDownTimer);
		 	},	    
	      	// reset function
	    	reset: function(){
	    		this.startTime = 5;
	    		$('#timer').html('<h3>Time Remaining: ' + this.startTime + ' Seconds!</h3>');
	    	},
	    	

		};
	        	
		// 		// Hide the choices
		//   		$("#options").hide();
		//   		// Show the times up
		//   		$("#timesOutDiv1").show();
		//   		// Show the image answer
		//   		$("#correctImageDiv").show();
					// timer.reset();
					
				
			
// Reset the values
var correct = 0;
var wrong = 0;
var unanswered = 0;

var correctImageDiv = $('correctImageDiv');
//
var q1 = {
	question : 'A baby swimming in an aqua pool and a dollar bill on a fish hook.',
	possibleAnswers : ['A. Nada Surf',
				 'B. New Order',
				 'C. Nirvana',
				 'D. No Dout'],
	flags : [false, false, true, false],
	answer : 'C. Nirvana - Nevermind',
	image: '<img src="images/Nevermind.jpg" />'
};

var q2 = {
	question : 'A Komondor, or mop dog, jumping over a hurdle used in a dog obstacle course.',
	possibleAnswers : ['A. Bush',
				 'B. Blink 182',
				 'C. Barenaked Ladies',
				 'D. Beck'],
	flags : [false, false, false, true],
	answer : 'D. Beck - Odelay',
	image: '<img src="images/odelay.jpg" />'
};

var q3 = {
	question : 'A black snake with a gray outline on a black background',
	possibleAnswers : ['A. Metallica',
				 'B. Marilyn Manson',
				 'C. Ministry',
				 'D. My Morning Jacket'],
	flags : [true, false, false, false],
	answer : 'A. Metallica - Black',
	image: '<img src="images/black.jpg" />'
};

var q4 = {
	question : 'A portrait of the artist wearing a baseball hat surrounded by what looks like a cigar band',
	possibleAnswers : ['A. Dave Grohl',
				 'B. Del Amitri',
				 'C. Dr. Dre',
				 'D. Dave Matthews Band'],
	flags : [false, false, true, false],
	answer : 'C. Dr. Dre - The Cronic',
	image: '<img src="images/chronic.jpg" />'
};

var q5 = {
	question : 'A poorly cropped picture of two little girls hugging, one with fairy wings on her back.',
	possibleAnswers : ['A. Stone Temple Pilots',
				 'B. Smashing Pumpkins',
				 'C. Spoon',
				 'D. Social Distortion'],
	flags : [false, true, false, false],
	answer : 'B. Smashing Pumpkins - Siamese Dream',
	image: '<img src="images/SiameseDream.jpg" />'
};

var q6 = {
	question : 'A collage of 16 colorful images — each of which, the artist said, was strong enough to be an album cover in its own right.',
	possibleAnswers : ['A. U2',
				 'B. UB40',
				 'C. Unwritten Law',
				 'D. Urge Overkill'],
	flags : [true, false, false, false],
	answer : 'A. U2 - Achtung Baby',
	image: '<img src="images/achtungbaby.jpg" />'
};

var q7 = {
	question : 'A wooden panel slathered in plaster, oils, acrylics, rusted metals, dead insects, wax, varnishes, blood, and surgical bandaging',
	possibleAnswers : ['A. Neutral Milk Hotel',
				 'B. New Found Glory',
				 'C. New Order',
				 'D. Nine Inch Nails'],
	flags : [false, false, false, true],
	answer : 'D. Nine Inch Nails - The Downward Spiral',
	image: '<img src="images/downward-spiral.jpg" />'
};

var q8 = {
	question : 'An image of four arms all reaching up into the air and their hands are coming together to a pointing one.',
	possibleAnswers : ['A. Pixies',
				 'B. Pearl Jam',
				 'C. Primus',
				 'D. Pavement'],
	flags : [false, true, false, false],
	answer : 'B. Pearl Jam - Ten',
	image: '<img src="images/ten.jpg" />'
};

var q9 = {
	question : 'A black and white image of a guy with sunglasses ordering into a speaker at drive thru.',
	possibleAnswers : ['A. Beastie Boys',
				 'B. Ben Folds Five',
				 'C. Black Rebel Motorcycle Club',
				 'D. Blind Melon'],
	flags : [true, false, false, false],
	answer : 'A. Beastie Boys - Ill Communication',
	image: '<img src="images/ill-communication.jpg" />'
};

var q10 = {
	question : 'An image of a guys back with a tattoo of the bands name.',
	possibleAnswers : ['A. Soundgarden',
				 'B. Stone Temple Pilots',
				 'C. Soul Coughing',
				 'D. Sublime'],
	flags : [false, false, false, true],
	answer : 'C. Nirvana - Nevermind',
	image: '<img src="images/Sublime.jpg" />'
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	timer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#button1").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#button2").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#button3").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#button4").text(questionArray[questionSelection].possibleAnswers[3]).show();
  $('#correctImageDiv').html(questionArray[questionSelection].image).hide();
}

// The Start the Game Button
function clickStart(){
index = 0;
//What is says
	$(".question").append('<button id="startButton" class="btn btn-defaul btn-lg">Start the Game!</button>');
	$("#startButton").on('click', function() {
		// hide the button
		$(this).hide();
		// show the timer
		$('#timer').show();
		// start the timer
		timer.start();
		// show the answers
		$('.answers').show();
		// show the question
	 	loadQuestion(index);	   	  
	});
}

function getAnswer() {
	$('.buttonOption').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#button1").text('');
		$("#button2").text('');
		$("#button3").text('');
		$("#button4").text('');
		loadQuestion();
	})
}

function correctAnswer() {
	correct++;
	$("#correct").append("<h3>Correct Answers: </h3>");
	console.log("correct");
}

function wrongAnswer() {
	wrong++;
	$("#wrong").append("<h3>Wrong Answers: </h3>");
	console.log("wrong");
}

function unansweredQ() {
	unanswered++;
	$("#unanswered").append("<h3>Unanswered: </h3>");
	// alert("Time is Up!!!");
	console.log("unanswered");

			}


function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " Correct Answers</p></h2>");
	$('.question').append("<h2><p>" + wrong + " Incorrect Answers</p></h2>");
	$('.question').append("<h2><p>" + unanswered + " Unanswered</p></h2>");
	$('#correctImageDiv').empty();
	timer.stop();
	$('.timer').empty();

}

clickStart();

$('.buttonOption').on('click', function() {
	if (ispaused){
		return false;
	}
	 console.log($(this));
	 if(this.id == 'button1') {
	 	var answerChosen = '1';
	 } 
	 else if(this.id == 'button2') {
	 	answerChosen = '2';
	 } 
	 else if (this.id == 'button3') {
	 	answerChosen = '3';
	 } 
	 else if (this.id == 'button4') {
	 	answerChosen = '4';
	 } 

	 if ((answerChosen == '1') && (questionArray[index].flags[0] == true)) {
	 	correctAnswer();
	 } 
	 else if (answerChosen == '1') {
	 	wrongAnswer();
	 }

	 if ((answerChosen == '2') && (questionArray[index].flags[1] == true)) {
	 	correctAnswer();
	 } 
	 else if (answerChosen == '2') {
	 	wrongAnswer();
	 }

	if ((answerChosen == '3') && (questionArray[index].flags[2] == true)) {
	 	correctAnswer();
	 } 
	 else if (answerChosen == '3') {
	 	wrongAnswer();
	 }

	if ((answerChosen == '4') && (questionArray[index].flags[3] == true)) {
	 	correctAnswer();
	 } 
	 else if (answerChosen == '4') {
	 	wrongAnswer();
	 }

	 $(".question").text('');
	 $("#buttonA").text('');
	 $("#buttonB").text('');
	 $("#buttonC").text('');
	 $("#buttonD").text('');

	 index++;
	 $('#correctImageDiv').show();
		//show image
		//clear image after 4 seconds
		ispaused = true;
		setTimeout(function(){
			ispaused = false;
			// timer.reset();
		if (index < questionArray.length) {
				loadQuestion(index);
			} 
			else {
				$(".buttonOption").hide();
				showScore();
			}


			}, 5000);



		// wrongAnswer();
		
	
		
	 //ispaused
	 //timeout
	 // if (index < questionArray.length) {
	 // 	loadQuestion(index);
	 // } 
	 // else {
	 // 	$(".buttonOption").hide();
	 // 	showScore();
	 // }
	});
})
	 
 
 
	   		
	   		
	   		
   			

   			//var car = {
			// make: "Honda",
			// model: "Fit",
			// color: "Blue Raspberry",
			// mileage: 3000,
			// isWorking: true,

//         driveToWork: function() {
//           alert("Old Mileage: " + this.mileage);

//           this.mileage = this.mileage + 8;

//           alert("New mileage: " + this.mileage);
//         },

//         driveAroundWorld: function() {
//           alert("Old Mileage: " + this.mileage);

//           this.mileage = this.mileage + 24000;

//           alert("New Mileage: " + this.mileage);
//           alert("Car needs a tuneup!");

//           this.isWorking = false;
//         },

//         getTuneUp: function() {
//           alert("Car is ready to go!");
//           this.isWorking = true;
//         },

//         honk: function() {
//           alert("Honk! Honk!");
//         }
//       };
// // Needs a start function - 

// 		$(function run(){
// 			countDown = setInterval(countDown, 1000);
// 		});
	
// 	// countdown function
// 		$(function countDown(){
	// 		//  Decrease number by one.
	//   		number--;
	// 		//  Show the number in the #timeRemain tag.
	// 		$("#timeRemain").html(number);
	// 		//  Once number hits zero...
	//         if (number === 0) {
			
	// 		 $("#timesUp").append("<h3>Time's Up!</h3>");
	//      	console.log("time is up");
	//      	unansweredCount++;
	// // 		// Hide the choices
	// //   		$("#options").hide();
	// //   		// Show the times up
	// //   		$("#timesOutDiv1").show();
	// //   		// Show the image answer
	// //   		$("#correctImageDiv").show();
	// 		//  ...run the stop function.
	// 		stop();
	// 		}
	// 	});

// 	//  The stop function
// 	    $(function stop() {
// 	      //  Clears our countDown
// 	      clearInterval(countDown);
// 	    });

// 	//  Execute the run function.
// 	    // run();

// 	// .
// 		$(function reset(){
// 			number = 5;
// 		});
// 	});
// });

 
// 3. User Interface
// Needs to be able to click on the correct answer and show id="correct" and id="imageDiv".
// Needs to be able to click on the incorrect answer and show id="wrong" and id="imageDiv".
// Need to show id="times-up" when the countdown goes to 0 and id="imageDiv".

// 4. Scores
// Needs to keep track of # of id="winsCount" - 
// # of id="lossesCount" - 
// # of id="unansweredCount".

 




// ------- Tuesday May 22nd 2:00pm - I have decided to scrap everything and go a different way. Arrays... /////// -->

// // 1. Need to have the div id="start" hide when clicked and show div id="timer" and div id="Q1".

// // 2. Have the timer countdown from 30 - 0 on each question
//     var number = 10;

//     //  Variable that will hold our interval ID when we execute
//     //  the "run" function
//     var intervalId;

//     function run() {
//       clearInterval(intervalId);
//       intervalId = setInterval(decrement, 1000);
//     }

//     //  The decrement function.
//     function decrement() {

//       //  Decrease number by one.
//       number--;

//       //  Show the number in the #timeRemain tag.
//       $("#timeRemain").html(number);


//       //  Once number hits zero...
//       if (number === 0) {

//         //  ...run the stop function.
//         stop();

//         //  Alert the user that time is up.
//          $("#timesUp").append("<h3>Time's Up!</h3>");
//   			console.log("time is up");
// 		// Hide the choices
//   		$("#options").hide();
//   		// Show the times up
//   		$("#timesOutDiv1").show();
//   		// Show the image answer
//   		$("#correctImageDiv").show();

//   		// 3. When the time is up, user gets an "unanswered +1"
//       }
//     }

//     //  The stop function
//     function stop() {

//       //  Clears our intervalId
//       //  We just pass the name of the interval
//       //  to the clearInterval function.
//       clearInterval(intervalId);
//       setInterval(function(){ 
//       	$("#Q1").hide();
//       	$("#Q2").show();
//        }, 3000);

//     }

//     //  Execute the run function.
//     run();

//    // The choosing of an answer
//    function answerQuestion(result) {

//    	if (result === $("#correct")) {
// 	    winsCount++;
// 	    $("#winsCount").html("<h3>" + winsCount + "</h3>");
//   	}
//   	else if (result === $("#wrong")) {
//   		lossesCount++;
//   		$("#lossesCount").html("<h3>" + lossesCount + "</h3>");
//   	}
//   	else if (result === (number === 0)) {
//   		unansweredCount++;
//   		$("#unansweredCount").html("<h3>" + unansweredCount + "</h3>");
//   	}

// };
 