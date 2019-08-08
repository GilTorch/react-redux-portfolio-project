# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user=User.create(username:"TheBoss",email:"boss@gmail.com",admin: true,password:"12345678")

14.times do |index|
    User.create(username:"user#{index}",email:"user#{index}@gmail.com",password:"12345678")
end

track = Track.create(title:"Full Stack Web Development",description:"Start as a beginner and become an engineer that knows both about Front End and Backend development")

course = Course.create(title:"Javascript from 0 to 1",description:"Javascript basics",track_id:track.id)
chapter1=Chapter.create(title:"Intro to Javascript",track_id:track.id,course_id:course.id)

lesson1 = Lesson.create(title:"Introduction",content:"JavaScript, commonly abbreviated as JS, is the programming language of the web. Along with HTML and CSS, it's used to create virtually all the web pages and apps you interact with, from Google to Facebook to Wikipedia to Amazon to Netflix.

    Each of these three main web technologies plays a role in creating the content you see on a website:
    
        HyperText Markup Language (HTML) provides structure to the content, arranging it in a nested, tree-like way, and allows us to mark up the content with attributes like id and class.
        Cascading Style Sheets (CSS) adds styling to the page, letting us customize the look of the content, often using id and class attributes, in addition to the semantic elements, to target the elements we want to style.
        JavaScript does pretty much everything else and handles most of the dynamic behavior of a website. For example: reacting to user events (like clicking a button), changing the page's content without reloading, and executing network requests in the background. Like CSS, the joining of HTML elements and changes that happen when they're interacted with (clicked on, moused over, etc.) often happens by targeting elements by their id or class attribute.
    ",course_id:course.id,chapter_id:chapter1.id,track_id:track.id)

lesson2=Lesson.create(title:"Variables",content:"A variable is a container in which we can store values for later retrieval.

    Imagine a box that can hold any type of data: a number, string, true/false, object — even an undefined. We take some data that we want to store, place it inside the box, and hand the box off to JavaScript, which stores it in memory. All done! Our data is safely stored until we need to access it again.
    
    Raiders of the Lost Ark warehouse. But wait! When we ask for the data back, how will JavaScript know which box to retrieve? We need to assign a name to our variable — a label for our box — so that we can tell the engine exactly which piece of stored data we want. Name Variables in JavaScript

    Variable names in JavaScript can sometimes be complicated, but if you follow these three rules you'll be fine:
    
        Start every variable name with a lowercase letter. Variable names starting with a number are not valid.
        Don't use spaces — camelCaseYourVariableNames (see the camel humps?) instead of snake_casing_them (like the underscore is a snake that swallowed the words).
        Don't use JavaScript reserved words or future reserved words.
    
    It's important to note that case matters, so javaScript, javascript, JavaScript, and JAVASCRIPT are four different variables.",
    course_id:course.id,chapter_id:chapter1.id,track_id:track.id)

lesson3=Lesson.create(title:"Comparisons",content:"We've talked about performing basic mathematical functions, and assigning values to variables, but how would we check to see if a value is what we're expecting? In addition to performing arithmetic and assigning value to variables, JavaScript has additional operators for comparing values. The value returned by a comparison is always true or false. There are four equality operators built into JavaScript:

    loose equality operator (==)
    strict equality operator (===)
    loose inequality operator (!=)
    strict inequality operator (!==)

When writing JavaScript, you strongly prefer the strict operators, as the loose operators will return true even if the data types aren't the same. A string '42' is not the same as an integer 42. As developers we want to ensure that not only are the values the same, but also the data types.
",track_id:track.id,course_id:course.id)