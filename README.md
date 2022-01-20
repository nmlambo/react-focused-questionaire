# React-focused-questionaire
A react assessment for A24 Group

## JavaScript:

<br>

1) What is your favourite new javascript feature and why?

    💡: I'm going with Numeric Separators. Why? convinience. Let's say you're working with large numbers, it can be hard reading them out sometimes, however with a Numeric Separator you can easily add underscores between values and get the best experience, for example:

    ```js

    // Without a Numeric Separator

    const value = 100000000;


    // When we apply a Numeric Separator, we can easily read out the value 🤗:

    const value = 100_000_000;


    ```

<br>

2) Explain an interesting way in which you have used this javascript feature.

    💡: This is obviously from a readability stand point, as I pride myself with submitting clean, readable code. My job is to make it easier for the next person going through my code.

<br>

3) Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)

    💡: Yes. There are several differences, but i'll keep it simple by stating the obvious. With the ES5 Version, the regular function syntax was a bit tedious as you needed to add a function keyword along with parentheses and a return keyword to execute your code. With arrow functions, there are more benefits, plus the code is cleaner and shorter, for example:

    ```js

    // The ES5 Version. This is a bit tedious.

    const assesmentDuration = function() {
        console.log('1:30hr')
    };

    assesmentDuration();


    //  Shorter arrow function syntax. One line function and no need for a function keyword & braces:

    const assesmentDuration = () => console.log('1:30hr');

    assesmentDuration();


    ```

<br>

4) What is the difference between ‘myFunctionCall(++foo)’ and ‘myFunctionCall(foo++)’

    💡: The first one is a normal function call, the second one is a function call with a postfix increment.

<br>

5) In your own words, explain what a javascript ‘class’ is and how it differs from a function.

    💡: A class is a blueprint for creating objects. It's a way to create objects that share the same properties and methods. The difference between a class and a function is that a class is a blueprint for creating objects, while a function is a blueprint for creating functions.

<br>

##  CSS:

<br>

6) In your own words, explain css specificity.

    💡: If you've ever tried to apply a style to an element and found that for some reason it just won’t apply, it's most likely due to specificity. Some css selelectors are more specific and will override other selectors. So learning specificity is crucial to effectively using css in our projects. It's one of the most important aspects to understanding css if you want to know how to apply styles to elements efficiently. That's all it reallly is actually.

<br>

7) In your own words, explain, what is ‘!important’ in css. Also how does it work? Are there any speciaL circumstances when using it, where it’s behaviour might not be what you
expect?

    💡: !important is a special css property that allows us to override other styles. It's a very important property to know, as it can be very useful when trying to apply styles to elements. I use it to override other styles, for example, if I want to override the color of an element, I use !important.

<br>

8) What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?
And why?

    💡: inline-block. I like it because it's the most simple and easy to understand. It's also the most common layout system.

<br>

9) Are negative margins legal and what do they do (margin: -20px)?

    💡: Some people might be confused about this, but it's actually legal. It's a shorthand property that allows us to set negative margins.
<br>

10) If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this? What are the different things that can be done to prevent it?

    💡: The margin from the <p/> tag will show up on the div instead, because the margin from the <p/> tag is not inside of the <div/>. The different things that can be done to prevent this is to add a margin to the <div/>, or to add a margin to the <p/> tag.

<br>

## Unit tests:

<br>

11) What technologies do you use to unit test your react components?

    💡: I usualy use Jest and the React Testing Library. Depending on the project, I might use Enzyme or other testing libraries.
<br>


12) Are there any pitfalls associated with this technology that have caused you difficulty in the past?

    💡: Yes. I've had some issues with both Jest and Enzyme, but I usually use Jest as i've been able to get the most out of it using the React Testing Library, it really is a great tool to test components. 

<br>

13) How do you test in your unit tests to see if the correct properties are being passed to child components?

    💡: I usually use the snapshot testing method, it's a great way to test if the component is rendering the correct properties.

<br>
