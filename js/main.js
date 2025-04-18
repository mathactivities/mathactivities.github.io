const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
params.delete("place")

let activities
window.onload = function(){
  activities = document.getElementById("Activities").innerHTML;
}

function random(){
  return Math.floor(Math.random()*12)
}
var randomFactor1 = random()
var randomFactor2 = random()
const links = {
  "mials":
  `
  Polynomials are expressions that have more than 3 terms. <br>
  Trionomials are expressions that have three terms. <br>
  Bionomials are expressions that have 2 terms. <br>
  Monomials are expressions that have one term.
  `
  ,
  "quadratic-equation":
  `
  <h1>What are quadractic equations and how to factor and solve them</h1>

  Quadratic equations are trionomials, bionomials, or polynomials. Review what they are <span style = "cursor:pointer; color:blue;" onclick = "setURLParameter('place', 'mials')">HERE</span>
  

  <br>
  <br>
  A base quadratic trionomial equation: <span>ax<sup>2</sup> + bx + c = 0</span> <br>
  A quadratic equation has a degree (highest power) of 2. <br>
  A quadratic equation also can't have a = 0. <br><br>

  A bionomial quadratic equation will look like this: <span>ax<sup>2</sup> + bx = 0</span> or <span>ax<sup>2</sup> + c = 0</span><br>

  A monomial quadratic equation will look like this: <span>ax<sup>2</sup> = 0</span>

  <h1>How to solve and factor them:</h1>

  <h2>Factoring</h2>

  Here's a sample equation:
  <span>x<sup>2</sup> + 7x + 12 = 0</span><br>


  We can see that 3x + 4x = 7x and 3 * 4 = 12.
  the factored form: <span>(x+3)(x+4)</span>
  This is a trionomial equation. <br>
  `
  ,
  "proportions":
  `
  <h2>What are Proportions?</h2>
    <em>Definition:</em> A proportion is an equation that states two ratios are equal.<br>
    The general form is: <br>
    \[
    \frac{a}{b} = \frac{c}{d}
    \]<br>
    This means \( a \times d = b \times c \) (cross multiplication).<br><br>

    <h2>Rules for Proportions</h2>
    <ul style="list-style: none; padding: 0;">
      <li>1. Ratios must involve the same units (e.g., miles to miles, dollars to dollars).</li>
      <li>2. Cross multiplication helps verify or solve a proportion.</li>
      <li>3. Ratios can be simplified before comparison or solving.</li>
    </ul><br>

    <h2>Examples of Proportions</h2>
    <em>Example 1:</em> Are the ratios \( \frac{2}{3} \) and \( \frac{4}{6} \) proportional?<br>
    Cross multiply: \( 2 \times 6 = 3 \times 4 \). Since \( 12 = 12 \), they are proportional.<br><br>

    <em>Example 2:</em> Solve for \( x \): \( \frac{3}{4} = \frac{x}{8} \).<br>
    Cross multiply: \( 3 \times 8 = 4 \times x \), giving \( 24 = 4x \). Solve: \( x = 6 \).<br><br>

    <h2>What are Inverse Proportions?</h2>
    <em>Definition:</em> Two quantities are inversely proportional if their product is constant.<br>
    The general form is: <br>
    \[
    x \times y = k
    \]<br>
    This means as \( x \) increases, \( y \) decreases, and vice versa.<br><br>

    <h2>Rules for Inverse Proportions</h2>
    <ul style="list-style: none; padding: 0;">
      <li>1. The product \( x \times y \) remains constant.</li>
      <li>2. Write the equation \( x_1 \times y_1 = x_2 \times y_2 \) to compare situations.</li>
      <li>3. The graph of an inverse proportion forms a hyperbola.</li>
    </ul><br>

    <h2>Examples of Inverse Proportions</h2>
    <em>Example 1:</em> If \( x = 4 \), \( y = 6 \), and \( x \times y = 24 \), find \( y \) when \( x = 8 \).<br>
    Use \( x \times y = 24 \): \( 8 \times y = 24 \), so \( y = 3 \).<br><br>

    <em>Example 2:</em> A car takes 4 hours to travel a distance at 60 mph. How long will it take at 80 mph?<br>
    \( x_1 \times y_1 = x_2 \times y_2 \): \( 60 \times 4 = 80 \times y \). Solve for \( y \): \( y = 3 \) hours.<br><br>

    <h2>Key Differences Between Proportions and Inverse Proportions</h2>
    <table border="1" style="margin: auto; text-align: center;">
      <tr>
        <th>Proportions</th>
        <th>Inverse Proportions</th>
      </tr>
      <tr>
        <td>Ratios are equal (\( \frac{a}{b} = \frac{c}{d} \)).</td>
        <td>Products are constant (\( x \times y = k \)).</td>
      </tr>
      <tr>
        <td>As one value increases, the other also increases.</td>
        <td>As one value increases, the other decreases.</td>
      </tr>
      <tr>
        <td>Graph is a straight line (if plotted correctly).</td>
        <td>Graph is a hyperbola.</td>
      </tr>
    </table><br>

    <h2>Real-World Applications</h2>
    <em>Proportions:</em> Scaling recipes, map distances, unit conversions.<br>
    <em>Inverse Proportions:</em> Speed vs. time, workers vs. completion time.<br><br>

    <h2>Practice Problems</h2>
    <em>1.</em> Solve: \( \frac{5}{x} = \frac{15}{12} \).<br>
    <em>2.</em> If \( x \) and \( y \) are inversely proportional and \( x = 2 \), \( y = 10 \), find \( y \) when \( x = 5 \).<br>
    <em>3.</em> A train travels 180 miles in 3 hours. How far will it travel in 5 hours at the same speed?<br>
  `
  ,
  "functions":
  `
  <h2>1. Linear Functions</h2>
    <em>Rules:</em> Represent straight lines on a graph. The general form is \( f(x) = mx + b \), where \( m \) is the slope and \( b \) is the y-intercept.<br>
    <em>Example:</em> \( f(x) = 2x + 1 \) (a line with slope 2 and y-intercept 1).<br><br>

    <h2>2. Quadratic Functions</h2>
    <em>Rules:</em> Represent parabolas on a graph. The general form is \( f(x) = ax^2 + bx + c \), where \( a, b, \) and \( c \) are constants.<br>
    <em>Example:</em> \( f(x) = x^2 - 4x + 3 \) (a parabola opening upwards).<br><br>

    <h2>3. Exponential Functions</h2>
    <em>Rules:</em> Have the form \( f(x) = a^x \), where \( a > 0 \) and \( a \neq 1 \).<br>
    <em>Example:</em> \( f(x) = 2^x \) (grows exponentially as \( x \) increases).<br><br>

    <h2>4. Logarithmic Functions</h2>
    <em>Rules:</em> The inverse of exponential functions, with the general form \( f(x) = \log_a(x) \), where \( a > 0 \) and \( a \neq 1 \).<br>
    <em>Example:</em> \( f(x) = \log_2(x) \) (the base-2 logarithm).<br><br>

    <h2>5. Trigonometric Functions</h2>
    <em>Rules:</em> Relate angles of a triangle to their ratios, including sine (\( \sin \)), cosine (\( \cos \)), and tangent (\( \tan \)).<br>
    <em>Example:</em> \( f(x) = \sin(x) \), \( f(x) = \cos(x) \), \( f(x) = \tan(x) \) (wave-like periodic functions).<br><br>

    <h2>6. Rational Functions</h2>
    <em>Rules:</em> Formed by the ratio of two polynomials, \( f(x) = \frac{P(x)}{Q(x)} \), where \( Q(x) \neq 0 \).<br>
    <em>Example:</em> \( f(x) = \frac{1}{x} \) (undefined at \( x = 0 \)).<br><br>

    <h2>7. Piecewise Functions</h2>
    <em>Rules:</em> Defined by different expressions for different intervals of \( x \).<br>
    <em>Example:</em> 
    \[
    f(x) =
    \begin{cases} 
      x + 2 & \text{if } x < 0 \\
      x^2 & \text{if } x \geq 0 
    \end{cases}
    \]<br><br>

    <h2>8. Absolute Value Functions</h2>
    <em>Rules:</em> Represent the distance of \( x \) from zero, \( f(x) = |x| \).<br>
    <em>Example:</em> \( f(x) = |x - 3| \) (a V-shaped graph shifted 3 units right).<br><br>
  `,
  'fractions': `<h2>Adding, Subtracting, Multiplying, and Dividing Fractions</h2>
        <p>Here are some basic operations with fractions along with examples:</p>
        <ul>
            <li><strong>Adding Fractions:</strong> Make the denominators the same, then add the numerators.<br>
                Example: <span class="fraction-wrapper"><span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span> + <span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span> = <span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span> + <span class="fraction"><span class="numerator">2</span><span class="denominator">4</span></span> = <span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span></span></li>
            <li><strong>Subtracting Fractions:</strong> Make the denominators the same, then subtract the numerators.<br>
                Example: <span class="fraction-wrapper"><span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span> - <span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span> = <span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span> - <span class="fraction"><span class="numerator">2</span><span class="denominator">4</span></span> = <span class="fraction"><span class="numerator">1</span><span class="denominator">4</span></span></span></li>
            <li><strong>Multiplying Fractions:</strong> Multiply the numerators together and the denominators together.<br>
                Example: <span class="fraction-wrapper"><span class="fraction"><span class="numerator">2</span><span class="denominator">3</span></span> × <span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span> = <span class="fraction"><span class="numerator">6</span><span class="denominator">12</span></span> = <span class="fraction"><span class="numerator">1</span><span class="denominator">2</span></span></span></li>
            <li><strong>Dividing Fractions:</strong> Flip the second fraction (reciprocal) and multiply.<br>
                Example: <span class="fraction-wrapper"><span class="fraction"><span class="numerator">2</span><span class="denominator">3</span></span> ÷ <span class="fraction"><span class="numerator">3</span><span class="denominator">4</span></span> = <span class="fraction"><span class="numerator">2</span><span class="denominator">3</span></span> × <span class="fraction"><span class="numerator">4</span><span class="denominator">3</span></span> = <span class="fraction"><span class="numerator">8</span><span class="denominator">9</span></span></span></li>
        </ul>`,
  'about': `<h1>About</h1><p>mathactivities.github.io is a fun and effective learning website designed for kids to enhance their math skills in an engaging way. Our platform offers a variety of interactive math activities and games that make learning mathematics enjoyable and educational.</p><br>
    <p>Through a blend of fun games, puzzles, and quizzes, MathActivities.github.io aims to make math learning an exciting adventure for kids of all ages. Our activities are designed to improve mathematical abilities and foster a love for numbers and problem-solving.</p><br>
            <p>Join us on MathActivities.github.io to explore a world of mathematical wonders and embark on a journey towards mastering math in a fun and interactive manner!</p> <br>`,
  'contact': `<h1> Contact</h1> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOvo9GrtAmumULvweK-K9CqkcagvGKHRWxiGcGQ9q4pAqrGg/viewform?embedded=true" width="640" height="406" scrolling="no"frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`,
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
  "multiplication" : `<div style = "font-size:50px;" onload="multiplication()"><span id = '1'>${randomFactor1}</span> x <span id = 2>${randomFactor2}</span> = <input style = "font-size:50px; background:none; border:5px solid #ffff; color:white; border-radius:50px; padding:20px; outline:none;" type = 'text' id = 'answer' style = "display:block;"> <div id = "enter"><i class="fa-solid nine" style="color: #ffffff; cursor:pointer; display:block;"></i></div> <span id = 'number-correct'>Number Correct: 0</span> <br> <span id = 'streak'>Streak: 0</span><br> <span id = 'totalquestions'>Total Questions Answered: 0</span></div>`, 
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
    Absolute value graphs are two rays starting from the origin (0, 0) with opposite slopes. The default slope is 1. The default equation to graph this is: <h4>y = |x|</h4> <br>
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
    Now to figure out the slope of the right side of the graph, in the absolute value, we just take the number in front of the x: 3. On the left side will be -3.
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

  "exponents":

    `
    <h1>Exponents</h1>
    Exponents are confusing and are powers of numbers. A power means that the base (the lower number) is muliplied by the power. You can say a number as an exponent by saying "[Base] to the power of [exponent]".<br><br>
    
    <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAA3lBMVEX///9IsE///v/i9eRLr1BetmH9//3A5cLd89/79f6s3K9ftmNFrUr38P/gz/93S/lGAP/8+f/v5f/z6v/Uwf7n2v7h0v5WGfWMZfemh/j6//vo+OlCAPC7n//Bq/k7APdlNPPs4P9suHDD5MZuPvTOuf/07f98UffayP9Vs1mY0pv0/fTs4v88AO1dJfZuPPi/pv2FXfqdev1TEvSnh/uc06B2wXqBxYXW8djDrvllMPiRbPa5oPmSb/CIYPawlfx7Tvamgv1zRe6wkf6wlPZ4v33I7Mqp2qqZ05y+4L+tS+9jAAAKHklEQVR4nO2biXaiSBSGCeKCG6C4REsrKi6IwYWoqOkktlmm3/+F5lahZumYdKKtLd7vnD6DSBD+c/eqEQQEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDkqBEP/QDIZkKHfoD9I6YyKyryDm+7u1sdB3KfrMjVd3XT9CS9q1sdC7JCp4ZHs7WjeyZmdmZHtzoaZIXsSr41KSN34jpqGg9soqzBP1FIdBqrQCenUvLyEkF8Pg+HaY0fwHkt3eHXVAw7q+3rBf4RXuvYm12DAFpvNhFbP/Ry32guUux8onxjGPmyzL67ypaaRvOWR8D0bd9QBkk4Sp1fZ+c/jZuJJmRmDu2fn1iEBB2Tz5/qxNEFQXdyLaF02XWmTZv0QZDEgJBul5ArWUjkHYXYU0p/gOCpG5JTLsgU/iZrXxhkalNnIrQuVDXXrBzunQ4B5JlF3SMjCtqcNuX0HbkXhRKl+YycbJKFKFyT6SSVKtukBzqqzn2mUnKcpCDPST/Z6CyI0RGyU2rUO5kZvZO1VjdX75yIY6eW7wk60mXdM4BTHYWUQJ2EADpesGTRIt10QqE9du01aSYSecquk2/oBGzQzrJb5EHfrE1Y2ZTN2WnIMyeSr2X9ypgsDxWq9D16TNq6k3OmTJ0S11VIK04ra0877NrMNJeV81xTcU7LQpn0U4lGo3FLZ0xT5snpi1znRHSUM6U7h9LB8pNC6nKCwy1UG1B6yw5KlyWWk8HY6rqjJNipRpO22Gd2fA463lLngpGjdyw+sowEOlb8rOOq4xVT5bwNnqzcL9/0bf0IhkYX7KB0ec2/n4GO4M/sOMF1pGsdF9S+azLurkBHg2Vov+vokdAHU0KpcZVkuvAS8K2OkKsdm50pXd6yCxJNorcco8G+Sxkk+dIeS3TWYIYsQ7l5OjrK2YUCItqzeurFFOGNjmnIMwsvz5A8K6oz9rTSmTosYgotZ1p5qWOdKLxK1Of6qeioZXp9CIpOv5R5Lkh4/FOILi+BTuUKXDil0BKre3JQFsrnJK9pMzpI8CpypiVe+HXFICW4WwW0Bx27zzpCbvLjwEdM12dQOdOu58+vgHzdvfupAD9/lsGrWR1eJ3aS1Y/Tkj4nUJILSZvk6/U8O514YY/iNXHm+qRJlcqzjk5FSNxQZeG7fibROjfAn6dz/b354vPcjJJb+YacgyHJg8sfconcGZeX5IKrphsEju9abJbDzFQQFpdQOGklm51vgtdnL36yGNowoEQSew7JJd/5sWNDW3uVDM0w+LOd721oMMSsvqYjt3RusGk9CTrOK+VFueNdlq4vFnVmYlqmxS+p6OyTmOktbnUmoJxMsh/Qki3WoLeuJ42/+oZ7IX3L04KgVXiR4yj3ya+PukHHE2ntNpHtk3swlUZ9cMGC4lz/LSj+CR/r6Mc08hptMqVqP9VaQFAk09mk8+rbP3p/flHpcq3jl0QTv/wXh+GTR2ycO6qqOkoOgmL/mhU531y8071++wQQ35E0k6cqg5K7xe9FzlfQGjtcPvx3SbTur67KmdcmI+qGJ6N6UU8fgW8dHDF5AyUhpbn5y/An3+fUJd3U1j+x7Q2OAZ21J1ObqrT5LFhnRlcyqtC8nYQQ2wEdMG3qmcykq9LBKoxV8o6TW+Hco4yfc01VhU9UWrbqjWKARvIlHdTxU+Q+pWWBhTA2db0/9OMcLek70l0ua16rdP7OFaET3PH1dcRUcjW7uVfp1WEfxhfINyr3cGQrEguqGr4bmO6ZTL3UhCJSP/RzHDuQqlXVRq/eEjlPCPQzd/UTmcr8LbSW3uqBYzsTrLi3pjGAROPXteJ90jFUby8YshXaFeX76JDvoMlr6cpUzZ/E4PovkBn071dC9lDHb9O6pMZyfMu2K56jX3+P1FQly+202QvV2dn/hnVqiPPVHLdyQ2kfG+wv8aLcznRVqvSyyZ5C1Rw22G9wwx9Qs15eqrMdJ44DfaE9OdTj/rO049JmYoGXl4rJmc3WXe28Lzdsbkc7fraR+Gsd2T653u1tb7stEz7lIx3P1jqK6x077+1LQb5oj8hG2vH3WAo5tj6/AcKpRd9jJDFzrEYO/XRHROgtcM6Nca9+PJGNSzvgXZ0CD8yxpSiu629F4T/u1W0MjtsRDnKvxuC4HYER9+rwoZ/jyCkMeenISx7MMt9FFB5NZo4x99BPsksO0IRZY16EPxX2/st/k5BV5LC32o+mYa8C91lDWHyoch6iHxYhuyv0iiNflo4BU4pVqzFTkjZUc9/y/A/+JsrNcVT8xl3/WeB1I2bMBbcOhGPS4y5uWSh+HPcCVWaOps9qHpHpyE0j9BQfeq5WsNYFiWWtRQlZVuhPImjxoe1ujhDi0hzHvjJHRmCpoxCOt5logWh73I7yTqMYhsOwp7L7NB5HI6HPhQwE4+a4VtwU/YrVM26OPouOwtoeC8N4FP5Tq0rBmBlnxV1xDIdBaQyJtRANSrGYVK19/vqBWPwsbo6igffdO+zD6MgJmMHHSMR1n2IPRWYuZjRQdMdshBCV2pFiZBx/AnXNWLgYiJqrcWGhGNhA8THIm5Wz2PA997Z82xFCvjaDwaAZD7I041Z51nbNkSW0z1jH4Y5/hawxf/PQk/TkGWTgIRjbQFBarhicBce1NzYpCjWvdvSfOTIdR4yYOQLZrEiRJZrHILzqMA5xriAUQuCrsQhkH+vRhJ6YRcjAKLgJU1otvZi/6bhuZXwXHXmeiYBEVqQdZ44NyQUSTYyZjBuLm9X/WJ5xTXPMGJ0tLakQiGziMRj3/Lr9+Ltfu3xeFvTjvGyVZyA0SjVIKFVJio3GEhPMbVeluARmWjNNr+mpfj555XlGGkUjni2+zu9P3FjHPjTHZx0L43gYFAsOH13LDXLDswKPw6o0slxIMF4Xbn0qAdQ9wXH4nWJcZC3hmQ9rcI+1jtZICkPxw8cwIJxVqP0qsMKxaroQH/k11i/3cx0/qMNrJtPRh0WP8KyjFZViAat9xowF5Kxa1thk+bo4MiOQHthYofAktT8ddvG+cEO1PuRuPfSjW0OeMcdtYCRJ0YIQjY/cots2WUKJSqNwxG1LkKNrQfMJSkzz27NXr8vkxaNZ2+HT/zsETG9/g1llgzPoYcxYsPo0Alu02qYJZcwDaFcIx6QgtDThrWavrufW/lwkLNQ8XK8lLoaHw3CkEKiBs1u16PCp5vXXAX7+zz3yHc8ORXkv40+3/p3CC5sLFdhLi7+d/xZeES75alnma+xgvUH0Kkt/9oT75dHkeyj8tby1f0K8mZGih36OY8cLj+YJh8fd4C3MxDA8bonLB0G4/3ZbvBWFU6ke/xoFb2bmy1nPPim0Mc3sAm9IgVtHt6VYxW5mF0R4V+jTYc8e8Za4xtgVbknNjJ/F420se7bE5fss/bbrcf8UvPXGQz8GgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIghwB/wMk3R1RaMSpnAAAAABJRU5ErkJggg==">
    
    For example, take this expression: <br>
    <div>
    x<sup>10</sup>
    </div>
    This shows that x is being multiplied 10 times by itself. <br>
    The expanded form is x * x * x * x * x * x * x * x * x * x <br> <br>
    <div>That is <i><bold>preeeeety</bold></i> tedious to write for big numbers.</div>
    That's why they created exponents. <br>
    The thing is, people get very confused when adding, subtracting, multiplying, or even dividing exponents. <br>
    That's why there is a rule for exponents: <br>
    <br>
    <ul id = "exponents">
      <li>a<sup>x</sup> * a<sup>y</sup> = a<sup>x+y</sup></li>
      <li>a<sup>1</sup> = a</li>
      <li>a<sup>0</sup> = 1 </li>
      <li>a<sup>x</sup> / a<sup>y</sup> = a<sup>x-y</sup></li>
      <li>a<sup>-x</sup> = 1/ a<sup>x</sup></li>
      <li>(a<sup>x</sup>)<sup>y</sup> = a<sup>xy</sup></li>
      <li>(ab)<sup>x</sup> = a<sup>x</sup>b<sup>x</sup></li>
      <li>(a/b)<sup>x</sup> = a<sup>x</sup>/b<sup>x</sup></li>
    </ul>
    
    You might be wondering: <br>
    <i>Why is a<sup>0</sup> = 1???</i>
    That is because as a exponent goes higher, the base is multiplied by itself that many times. So to go down, you would have to divide by that number that many times. <br>
    When you reach 1 as the power, as the second rule says: <br><div> a<sup>1</sup> = a </div><br>
    So, <br >a/a = 1. <br>
    `

  ,
  'graphing-straight-lines': 
  `
  <h1>Graphing Straight Lines</h1>
  The way to identify an equation of a line is by seeing if it has these three things:
  <ul style = "list-style:disc;">
  <li><span style = "color:rgb(0, 150, 255); cursor:pointer; text-decoration: underline;" onclick = "setURLParameter('place', 'slope')"> Slope </span></li>
  <li>The constant</li>
  <li>Variables x and y</li>
  </ul>
  <h2>First equation for Graphing: Slope Intercept Form.</h2>
  <h3>What is Slope Intercept Form?</h3>
  This is one of two ways to show equation of a line. 
  <b>General Equation:</b>
  y = mx + c <br>
  Step by step breakdown: <br>
  As review, the "m" in the equation is the slope. So the x value given would be multiplied by the slope of the line. The c is the constant, which is the y-intercept of the line. All of this equals the value of y. <br> 
  <h4>Example<h4>
  Given this graph of a line, find the slope intercept form of it. <br>
  <img src = "images/lessons/graphing-straight-lines/img_1.png"><br>
  The slope of this is 3, and the y-intercept is -2. The equation would be <br>
  y = 3x - 2
  <br><br> <br>
  <h2>Second Equation for Graphing: Point Slope Form</h2>
  <h3>What is Point Slope Form?</h3>
  This is the second of two ways to show equation of a line. <br>
  Given two points of a line, or one point with the slope of a line, you can make an equation out of it.
  <b>General Equation:</b>
  <div>y - y<sub>1</sub> = m(x - x<sub>1</sub>)</div> <br>
  Step by step breakdown: <br>
  <div>
  The y<sub>1</sub> is the y coordinate of a point given. The m is the slope of the line. The x<sub>1</sub> is the x coordinate of the graph.
  </div>
  <b>Note: By simplifying an equation in point slope form, you can make it into slope intercept form.</b> <br> 
  <h4>Example 1</h4>
  Using these two coordinates, find the point slope form: (2, 5) and (4, 9) <br>
  Answer: <br>
  <ul>
  
  <li>Find slope: slope is 2</li>
  <li>Choose one point to use for equation. (We will be using (2, 5), but you can use anyone)</li>
  <li>Plug in numbers: <br> y - 5 = 2(x - 2) </li>
  <li>(Dependent on what the question is asking, so we would end right here) Simplify: <br> y - 5 = 2x - 4 <br>y - 5 <span style = "color:red;">+ 5</span> = 2x - 4 <span style = "color:red;">+ 5</span> <br> Equation in slope intercept form: y = 2x + 1</li>
  
  </ul>
  `
  ,
  "absolute-values":
  
  `
  
  <h1>Absolute Values</h1>
  Absolute values are numbers that cannot be negative. It is the transformation of one number to another, if negative. Absolute value is the distance from 0. It is represented with a "|" as the start of absolute value expression and "|" at the end. (Can be shown by pressing the key above the enter key with shift)
  <h2>Parameters of Absolute Values</h2>
  <div>If x > 0:    |x| = x</div>
  <div>If x < 0:    |x| = -x</div>
  <div>If x = 0:    |x| = 0</div>
  <h2>Rules of Absolute Values</h2>
  <ol>
  Absolute values can never be negative <br> Explanation: This is because absolute value means the distance from 0. Since distance can never be negative, absolute value is therefore, always positive
  </ol>
  <h2>Examples with Equations</h2>
  <b>First example:</b>
  Equation: |x| = 5 <br>
  When you are solving absolute values, you have to create two equations that have two answers— one is negative, and the other is positive:<br>
  |x| = 5 --> x = 5, x = -5 <br>
  In this case, this was a simple equation with only one step. Let's try a more complex equation: <br>
  |x| + 3 = 5 <br>
  <b>Step 1: Create two equations:</b>
   <br>
  1. x + 3 = 5 <br>2. x + 3 = -5 <br>
  <b>Step 2: Solve both equations:</b>
  For more info on how to solve equations, visit this page: <span style = "color:rgb(0, 150, 255); cursor:pointer;" onclick = "setURLParameter('place', 'subtraction')"> Solving Linear Equations </span>
  If you solve the equations, the first equation's answer is x = 2, and for the second one: x = -8. <br>
  <br><br>
  <h2>Recap and additional notes:</h2>
  You might sometimes get an equation like this: <br>
  |x| = -3 <br>
  it has no solutions (∅) because an absolute value cannot be negative. <br>
  An absolute value is always positive.
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
      window.scrollTo({
        top: 0,
        left: 0,
      });
      document.getElementById("searchInput").classList.add("hide")
      if (paramValue == "multiplication"){
        multiplication()
      }
    }
  }
}
window.addEventListener('popstate', () => {
  for (var i = 0; i < linksKeys.length; i++){
    if (params.get('place') == linksKeys[i]){
      console.log('there')
      console.log(params.get("place"))
      document.getElementById('Activities').innerHTML = `
            <div id = "info">${linksValues[i]}</div>
        `
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    else if (params.get('place') !== linksKeys[i]){
      document.getElementById("info").innerHTML = ""
      document.getElementById("Activities").innerHTML = activities
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    
  }
});


// search bar function
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
function multiplication(){
  var answer = randomFactor1*randomFactor2
  console.log(randomFactor1*randomFactor2, randomFactor1, randomFactor2)
  const userAnswer = document.getElementById('answer')
  userAnswer.focus()

  var correct = 0
  var streak = 0
  let questions = 0
  userAnswer.addEventListener('keyup', (e) => {
    if (e.key == 'Enter'){
      console.log("enter")
      questions++
      document.getElementById('totalquestions').innerHTML = 'Total Questions Answered: ' + questions
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
}

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('Activities');
const items = Array.from(itemList.getElementsByClassName('item'));
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase()
  items.forEach(function(item) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
        item.classList.remove('hide');
    } else {
        item.classList.add('hide');
    }
});
})
