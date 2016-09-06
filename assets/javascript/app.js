// ========= Obama--Questions =========
var obamaOne = {
	question: 'Barack Obama Sr., who Obama is named after, is a native of what country?',
	choice1: "United States",
	choice2: "Kenya",
	choice3: "Nigeria",
	choice4: "Jamaica",
	answer: "Kenya",
	info: "<img src='assets/images/obama2.jpg'>"	
};

var obamaTwo = {
	question: 'Michelle Obama has worked at which university in the community affairs and diversity arenas?',
	choice1: "University of Illinois",
	choice2: "Purdue University",
	choice3: "Harvard University",
	choice4: "University of Chicago",
	answer: "Purdue University",
	info: "<img src='assets/images/michelle.png'>"
};

var obamaThree = {
	question: 'Barack Obama signed which military act into law in July 2011?',
	choice1: "Libya Military Intervention Act",
	choice2: "Blunt Act",
	choice3: "Arab-Israeli Conflict Act",
	choice4: "Don't Ask, Don't Tell Repeal Act of 2010",
	answer: "Arab-Israeli Conflict Act",
	info: "<img src='assets/images/conflict.GIF'>"

};

var obamaFour = {
	question:"The president sang a few bars from which R&B song at a January 2012 fundraiser at the Apollo Theater? ",
	choice1: "Jungle Boogie",
	choice2: "Let's Get it On",
	choice3: "Let's Stay Together",
	choice4: "Celebration",
	answer: "Let's Get it On",
	info: "<img src='assets/images/obama-sings.jpg'>"
};

var obamaFive = {
	question: "Before becoming the president, Obama was a senator for which state?",
	choice1: "Hawaii",
	choice2: "Illinois",
	choice3: "Michigan",
	choice4: "Ohio",
	answer: "Illinois",
	info: "<img src='assets/images/obama-confused.jpg'>"
};


// ========= Bush-Questions ============
var bushOne = {
	question: "George W. Bush was the 43rd president of the United States.",
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/bush-happy.jpg'>"
	
};

var bushTwo = {
	question: 'George W. Bush was the 43rd president of the United States.',
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/bush-toasting.jpg'>"
};

var bushThree = {
	question:'In his senior year at high school, Bush was the head cheerleader of his team.',
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/cheer.jpeg'>"
};

var bushFour = {
	question: 'After John Quincy Adams, George W. Bush is the second president to be the son of a president.',
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/bush-jr-sr.jpg'>"
};




// ========= Clinton-Questions ===========
var clintonOne = {
	question: 'What instrument does Bill Clinton play?',
	choice1: "Piano",
	choice2: "Guitar",
	choice3: "Drums",
	choice4: "Saxophone",
	answer: "Saxophone",
	info: "<img src='assets/images/clinton-plays.jpg'>"
};

var clintonTwo = {
	question: "Where did Bill Clinton receive his law degree?",
	choice1: "Yale University ",
	choice2: "Rutgerts University",
	choice3: "Texas University",
	choice4: "Oklahoma University",
	answer: "Yale University ",
	info: "<img src='assets/images/yale.jpg'"
};

var clintonThree = {
	question: "His father died in a car accident three months before he was born.",
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/clinton-tears.jpg'"
};

var clintonFour = {
	question: "Bill Clinton was the 42nd president of the United States",
	choice1: "True",
	choice2: "False",
	answer: "True",
	info: "<img src='assets/images/clinton-in.jpg'>"
};


// Creating arrays that will hold the questions for each category.
var obamaQuestions = [obamaOne, obamaTwo, obamaThree, obamaFour];
var bushQuestions = [bushOne, bushTwo, bushThree, bushFour];
var clintonQuestions = [clintonOne, clintonTwo, clintonThree, clintonFour];

// The empty array that will be populated when the user selects a category.
var questions = [];

// Setting initial variable values. 
var num = 0;
var time = 30;
var numbercorrect = 0;
var numberwrong = 0;
var numtimeout = 0;



// ========= Functions ==========

// Sets the time back to 30s, sets an interval for the timer, displays the next question.
function nextquestion() {
	time = 30;
	counter = setInterval(increment, 1000);
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>");
	$(".question").html(questions[num].question);
	$(".ans1").html(questions[num].choice1);
	$(".ans2").html(questions[num].choice2);
	$(".ans3").html(questions[num].choice3);
	$(".ans4").html(questions[num].choice4);
	$(".info").empty();
};

// Counts down & displays the remaining time. Stops if time = 0 and starts an animation when time remaining < 10sec.
function increment() {
	time--
	$(".timer").html("<h2>Time Remaining: " + time + "</h2>")
	if (time == 0) {
		timeout();
		stop();
		$(".choice").empty();
	} else if (time < 10) {
		$(".timer").addClass("red");
		setTimeout(function(){$(".timer").removeClass("red")}, 500)
	};
};

// Stops the timer. If there are more questions go on to the next, if not end the game. 
function stop() {
	clearInterval(counter);
	num++;
	if (num == questions.length) {
		setTimeout(endgame, 5000);
	} else {
		setTimeout(nextquestion, 5000);
	};
};

// Lets the user know they got the question right and displays an image.
function correctanswer() {
	$(".question").html("<p>Correct!</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Counts a wrong answer, tells the user they are wrong, and displays an image. 
function wronganswer() {
	numberwrong++;
	$(".question").html("<p>Wrong! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
};

// Counts a failure to answer the question, tells the user they are out of time, and displays an image. 
function timeout() {
	numtimeout++;
	$(".question").html("<p>Time's up! <br> The correct answer was: "+questions[num].answer+"</p>");
	$(".info").html("<p>"+questions[num].info+"</p>");
}

// Tells the user how many questions they got right/wrong/unanswered. Resets variables and shows buttons so the user can play again. 
function endgame() {
	$(".question").html("<h2>Questions you got Corect: "+ numbercorrect + ".</h2>"
		+ "<h2>Questions you got wrong!: " + numberwrong +"</h2>"+"<h2>Questions you didn't answer: " + numtimeout + "</h2>");
	$(".choice").empty();
	$(".timer").empty();
	$(".info").empty();
	num = 0;
	numbercorrect = 0;
	numberwrong = 0;
	numtimeout=0;
	$("button").show();
};


// Category select buttons.
$(".obamaButton").click(function() {
	questions = obamaQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$(".bushButton").click(function() {
	questions = bushQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

$(".clintonButton").click(function() {
	questions = clintonQuestions;
	nextquestion();
	$("button").hide();
	$(".intro").hide();
});

// Clicking on a choice.
$(".choice").click(function() {

	if ($(this).text() == questions[num].answer) {
		numbercorrect++;
		correctanswer();
		stop();
	} else {
		wronganswer();
		stop();
	};

	$(".choice").empty();
});