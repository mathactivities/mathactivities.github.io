const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);


function random(){
  return Math.floor(Math.random()*12)
}
var randomFactor1 = random()
var randomFactor2 = random()
const links = {
  "ofo" : `The order of operations (PEMDAS) in mathematics dictates the sequence in which different mathematical operations should be performed when evaluating an expression. The standard order of operations is as follows, from highest to lowest precedence:
    <br>
    <h2>Parentheses:</h2><br>
    Operations inside parentheses should be evaluated first. This allows you to control the order of operations within a mathematical expression.<br><br>
    <h2 style = "translate:-880% 80%; margin-left:0;">Exponents:</h2><br>
    After parentheses, exponents (or powers) should be calculated. Exponents represent repeated multiplication and have higher precedence than multiplication and division.<br><br>
    <h2>Multiplication and Division:</h2><br><br>
    Multiplication and division have the same level of precedence and are evaluated from left to right. When multiplication and division appear together, the operation that comes first from left to right should be performed first.<br><br>
    <h2>Addition and Subtraction:</h2><br>
    Addition and subtraction also have the same level of precedence and are evaluated from left to right. When addition and subtraction appear together, the operation that comes first from left to right should be performed first.<br><br>
    <h2>Associativity:</h2><br>
    Operations of the same precedence level are typically performed from left to right. This means that when multiple operations of the same precedence level appear in sequence, they are evaluated in order from left to right.<br><br>
    <h2>Importance of Order of Operations:</h2><br>
    <br>
    Following the order of operations ensures that mathematical expressions are evaluated consistently and accurately.<br><br>
    Without adhering to the order of operations, different people may interpret mathematical expressions differently, leading to confusion and incorrect results.<br><br>
    The order of operations provides a standard framework for simplifying complex mathematical expressions and equations.<br><br>
    Understanding and applying the order of operations is crucial for performing calculations correctly in mathematics, algebra, calculus, and various other fields.`, 
  "subtraction" : `To solve a linear equation, you typically follow these steps:<br>

Simplify Both Sides:<br>
Simplify each side of the equation by combining like terms.<br>
Isolate the Variable:<br>
Rearrange the equation to isolate the variable on one side. You can do this by performing inverse operations (opposite operations) to move constants to the other side of the equation.<br>
Solve for the Variable:<br>
Once the variable is isolated, solve for its value.<br>
Check Your Solution:<br>
Substitute the found value back into the original equation to ensure it satisfies the equation.<br>
Here's an example:<br>
<br>
Problem: Solve the equation <br>
2
𝑥
+
5
=
11 <br>
2x+5=11.<br>

Solution:<br>

Simplify:<br>
2
𝑥
+
5
=
11<br>
2x+5=11.
Isolate the Variable:
Subtract 5 from both sides to isolate 
𝑥:<br>
2
𝑥
=
11
−
5 <br>
2x=11−5 <br>
2
𝑥
=
6<br>
2x=6.<br>
Solve for the Variable:<br>
Divide by 2 on both sides to solve for
𝑥:<br>
𝑥
=
6/
2
<br>
𝑥
=
3
x=3.<br>
Check the Solution:<br>
Substitute <br>
𝑥
=
3<br>
x=3 back into the original equation:<br>
2
(
3
)
+
5
=
6
+
5
=
11
2(3)+5=6+5=11.<br>
The solution <br>
𝑥
=
3
x=3 satisfies the equation.<br>
Remember, these steps apply to linear equations. If you encounter more complex equations involving multiple variables or higher powers, additional methods like substitution, elimination, or graphing may be needed.`, 
  "multiplication" : `<div style = "font-size:50px;"><span id = '1'>${randomFactor1}</span> x <span id = 2>${randomFactor2}</span> = <input style = "font-size:50px; background:none; border:5px solid #ffff; color:white; border-radius:50px; padding:20px; outline:none;" type = 'text' id = 'answer' style = "display:block;"> <div id = "enter"><i class="fa-solid nine" style="color: #ffffff; cursor:pointer; display:block;"></i></div> <span id = 'number-correct'>Number Correct: 0</span> <br> <span id = 'streak'>Streak: 0</span></div>`, 
  "types-of-triangles" : 
    `<h2>Based on Sides: </h2><br><br><br>
    <ul style = "margin-left:0; translate:-40% 30%;"><li>Equilateral Triangle: All three sides are equal in length.</li> <br>
    <li>Isosceles Triangle: Two sides are equal in length.</li><br>
    <li>Scalene Triangle: All three sides are of different lengths. </li> </ul> <br>
    <h2>Based on Angles:</h2><br><br><br>
    <ul style = "margin-left:0; translate: 120% -80%;"> <li>Acute Triangle: All three interior angles are less than 90 degrees.</li><br>
    <li>Right Triangle: One interior angle is exactly 90 degrees.</li><br>
    <li>Obtuse Triangle: One interior angle is greater than 90 degrees. </li></ul><br>
    Note: A triangle can also be classified based on both its sides and angles. For example, an equilateral triangle is also an acute triangle because all its angles are less than 90 degrees.`
}
const linksValues = Object.values(links)
const linksKeys = Object.keys(links)




function setURLParameter(paramName, paramValue) {
params.set(paramName, paramValue);
  
url.search = params.toString();
window.history.pushState({}, 'classroom.google.com', url);
for (var i = 0; i < linksKeys.length; i++){
  if (params.get('place') == linksKeys[i]){
    console.log('there')
    document.getElementById('Activities').innerHTML = `
          ${linksValues[i]}
      `

    }
  }
}


for (var i = 0; i < linksKeys.length; i++){
  if (params.get('place') == linksKeys[i]){
    console.log('there')
    document.getElementById('Activities').innerHTML = ` ${linksValues[i]} `
  }
}

//multiplication practice
//   add timer for problems, add practice
//addtion practice
//   add timer for problems, add practice
//subtraction practice
//   add timer for problems, add practice
//division practice
//   add timer for problems, add practice

function multiplication() {
  
}

multiplication()
var answer = randomFactor1*randomFactor2
console.log(randomFactor1*randomFactor2, randomFactor1, randomFactor2)
const userAnswer = document.getElementById('answer')
userAnswer.focus()
const enter = document.getElementById('enter')
enter.addEventListener('click', () => {
  if (userAnswer.value == answer){
    console.log('correct!')
    randomFactor1 = random()
    randomFactor2 = random()
    document.getElementById('1').innerHTML = randomFactor1
    document.getElementById('2').innerHTML = randomFactor2
    answer = randomFactor1*randomFactor2
    userAnswer.value = ''
    userAnswer.focus()
    document.getElementById('Activities').style.backgroundColor = "rgb(0, 255, 0)"
  } else {
    console.log('incorrect')
  }
})
var correct = 0
var streak = 0
userAnswer.addEventListener('keydown', (e) => {
  if (e.key == 'Enter'){
    if (userAnswer.value == answer){
      correct++
      streak++
      document.getElementById('number-correct').innerHTML = 'Number Correct: ' + correct
      document.getElementById('streak').innerHTML = 'Correct Answer Streak: ' + streak
      console.log('correct!')
      randomFactor1 = random()
      randomFactor2 = random()
      document.getElementById('1').innerHTML = randomFactor1
      document.getElementById('2').innerHTML = randomFactor2
      answer = randomFactor1*randomFactor2
      userAnswer.value = ''
      userAnswer.focus()
      document.getElementById('Activities').style.backgroundColor = "rgb(50, 200, 50)"
      setTimeout(() => {
        revertColors()
      }, 500);
    } else {
      console.log('incorrect')
      streak = 0
      userAnswer.value = ''
      document.getElementById('streak').innerHTML = 'Correct Answer Streak: ' + streak
      document.getElementById('Activities').style.backgroundColor = "rgb(250, 50, 0)"
      setTimeout(() => {
        revertColors()
      }, 500);
    }
  }
})

function revertColors() {
  document.getElementById('Activities').style.backgroundColor = "#121212"
}