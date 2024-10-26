const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);


function random(){
  return Math.floor(Math.random()*12)
}
var randomFactor1 = random()
var randomFactor2 = random()
const links = {
  'about': `<h1>About</h1><p>mathactivities.github.io is a fun and effective learning website designed for kids to enhance their math skills in an engaging way. Our platform offers a variety of interactive math activities and games that make learning mathematics enjoyable and educational.</p><br>
    <p>Through a blend of fun games, puzzles, and quizzes, MathActivities.github.io aims to make math learning an exciting adventure for kids of all ages. Our activities are designed to improve mathematical abilities and foster a love for numbers and problem-solving.</p><br>
            <p>Join us on MathActivities.github.io to explore a world of mathematical wonders and embark on a journey towards mastering math in a fun and interactive manner!</p> <br>`,
  'contact': `<h1> Contact</h1> Sorry this page is still being developed. :-(`,
  "ofo" : `The order of operations (PEMDAS) in mathematics dictates the sequence in which different mathematical operations should be performed when evaluating an expression. The standard order of operations is as follows, from highest to lowest precedence:
    <br>
    <h2>Parentheses:</h2><br>
    Operations inside parentheses should be evaluated first. This allows you to control the order of operations within a mathematical expression.<br><br>
    <h2>Exponents:</h2><br>
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

                  <h2 style = "color:rgb(250, 150, 150);"> 1. Simplify Both Sides:</h2><br>
                  Simplify each side of the equation by combining like terms.<br>
                  <h2 style = "color:rgb(250, 150, 150);"> 2 . Isolate the Variable:</h2><br>
                  Rearrange the equation to isolate the variable on one side. You can do this by performing inverse operations (opposite operations) to move constants to the other side of the equation.<br>
                  Solve for the Variable:<br>
                  Once the variable is isolated, solve for its value.<br>
                  <h2 style = "color:rgb(250, 150, 150);"> 3. Check Your Solution:</h2><br>
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
                  2x+5=11.<br><br>

                  Simplify:<br><br>
                  2
                  𝑥
                  +
                  5
                  =
                  11<br>
                  2x+5=11.<br><br>
                  Isolate the Variable:<br><br>
                  Subtract 5 from both sides to isolate <br><br>

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
                  2x=6.<br><br>
                  Solve for the Variable:<br><br>
                  Divide by 2 on both sides to solve for
                  𝑥:<br><br>
                  𝑥
                  =
                  6/
                  2
                  <br>
                  𝑥
                  =
                  3
                  <br><br>
                  Check the Solution:<br><br>
                  Substitute <br><br>
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
                  2(3)+5=6+5=11.<br><br>
                  The solution <br><br>
                  𝑥
                  =
                  3
                  x=3 satisfies the equation.<br><br>
                  Remember, these steps apply to linear equations. If you encounter more complex equations involving multiple variables or higher powers, additional methods like substitution, elimination, or graphing may be needed.`, 
  "multiplication" : `<div style = "font-size:50px;"><span id = '1'>${randomFactor1}</span> x <span id = 2>${randomFactor2}</span> = <input style = "font-size:50px; background:none; border:5px solid #ffff; color:white; border-radius:50px; padding:20px; outline:none;" type = 'text' id = 'answer' style = "display:block;"> <div id = "enter"><i class="fa-solid nine" style="color: #ffffff; cursor:pointer; display:block;"></i></div> <span id = 'number-correct'>Number Correct: 0</span> <br> <span id = 'streak'>Streak: 0</span></div>`, 
  "types-of-triangles" : 
    `<h2>Based on Sides: </h2><br><br><br>
    <ul style = "margin-left:0;"><li>Equilateral Triangle: All three sides are equal in length.</li> <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-Bxcd04xu4cr_7hhytI3H_jJ4-1e2yY6qg&s"> <br>
    <li>Isosceles Triangle: Two sides are equal in length.</li> <img src = "https://geometryhelp.net/wp-content/uploads/2019/03/Isosceles-Triangle.jpg"><br>
    <li>Scalene Triangle: All three sides are of different lengths. </li> <img src = "https://cdn1.byjus.com/wp-content/uploads/2020/03/Scalene-Triangle-4.png"></ul> <br>
    <h2>Based on Angles:</h2><br><br><br>
    <ul style = "margin-left:0;"> <li>Acute Triangle: All three interior angles are less than 90 degrees.</li> <img src = "https://cdn1.byjus.com/wp-content/uploads/2020/08/Acute-Angle-Triangle-01.png"><br>
    <li>Right Triangle: One interior angle is exactly 90 degrees.</li> <img src = "https://cdn1.byjus.com/wp-content/uploads/2019/10/isosceles-right-triangle.png"><br>
    <li>Obtuse Triangle: One interior angle is greater than 90 degrees. </li><img src = "data:image/jpeg;base64,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"></ul><br>
    Note: A triangle can also be classified based on both its sides and angles. For example, an equilateral triangle is also an acute triangle because all its angles are less than 90 degrees.`,
  "absolute-value-graphs": 
    `
    <h1>Absolute Value Graphs</h1><br>
    <h3>Review</h3>
    Absolute value is the distance from 0. Absolute values can also never be negative because distance can never be negative. Absolute value is shown by this symbol: |x| <br><br>
    <h3>Lesson</h3>
    Absolute value graphs are two rays starting from the origin (0, 0) with same slopes. The default slope is 1. The default equation to graph this is: <h4>y = |x|</h4> <br>
    An image of a default absolute value graph is this: <img src = "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/mahima-absolute-value-graph-02-1604926581.png"> <br>
    <h4>Absolute value graphs can be moved by using transformations. </h4> <br>
    If a number is outside the absolute value, that is either adding or subtracting, tells us the y point of the vertex. <br>
    Example: y = |x| + 5 <img src = "images/lessons/absolute-value-graphs/absolute1.png"><br>
    Example: y = |x| - 5 <img src = "images/lessons/absolute-value-graphs/absolute2.png"><br> <br>

    <h3>Determining x placement of absolute value graph</h3>
    If you know how to solve linear equations, this will be easy for you. If you don't, please review this: <span style = "color:rgb(0, 150, 255); cursor:pointer;" onclick = "setURLParameter('place', 'subtraction')">Linear Equations</span>
    To find where the x point of the vertex is, you just plug in the the inside of the absolute value and try to see what makes it equal to zero.
    Example: <br>
    Equation: y = |3x + 3| - 9<br>
    Finding x placement:<br><br>
    <div>
    3x + 3 = 0 <br>
    3x + 3<span style = "color:red;"> - 3</span> = 0 <span style = "color:red;">- 3</span> <br>
    3x<span style = "color:red;">/3</span> = -3<span style = "color:red;">/3 </span><br>
    x = -1
    </div>
    <h4>Now the x point is 1 unit to the left. If the solution were positive, it would be however many units to the right.</h4>
    Since in the original absolute value equation there was a -9 outside of the absolute value, the graph's vertex would be at (-1, -9) <br>
    <h4>Review: </h4>
    <span style = "color:rgb(0, 150, 255); cursor:pointer;" onclick = "setURLParameter('place', 'slope')"> Slope </span>
    Now to figure out the slope of the rays in the absolute value, we just take the number in front of the x: 3. 
    The final graph is this: <br>
    <img src = "images/lessons/absolute-value-graphs/absolute3.png">

    `
  ,

  "slope" : `
    
    <h1>Slope</h1>
    <div>
    Slope is the steepness of a line on a graph. It is figured out by finding the rise over the run. For example, when given two points, you would do (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>) <br>
    </div>
    Example: <br>
    Two points: (2, 2) and (4, 4) <br>
    Plugging in the numbers <br>
    (4 - 2) / (4 - 2) = 2/2 = 1<br>
    The slope of the line is 1. <br> <br>
    Note: The variable for slope is "m". <br>
    So for the above equation, m = 1.
  `,
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
          <div id = "info">${linksValues[i]}</div>
      `
    location.reload(true)
    }
  }
}

for (var i = 0; i < linksKeys.length; i++){
  if (params.get('place') == linksKeys[i]){
    console.log('there')
    document.getElementById('Activities').innerHTML = ` <div id = "info">${linksValues[i]} </div>`
  
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
userAnswer.addEventListener('keyup', (e) => {
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
