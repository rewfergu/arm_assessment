# React Assessment

To run this project:
1. Download the zip or clone repo
2. Inside the project folder run `npm install`
3. After installation finishes run `npm start`
4. Visit `localhost:3000` in a browser

## About My Submission

My solution consists of 3 main parts:

1. The actual donut itself, written in d3 with svg output
2. The legend at the bottom
3. The stats inside the donut ring

## Why D3 / SVG
I could have built the entire thing as one big D3 script, but D3 and React fight over control of the DOM, and because this is a react assessment I felt like it was a better demonstration of my React skills to break things apart. 

[D3](https://d3js.org/) is one of the most (if not the most) powerful and flexible libraries for data visualization, but some care does need to be taken so that the library can share access to the DOM without conflicts. For my solution I isolated D3 code inside its own component, and created a ref to the container inside the render function.  Using this ref D3 can inject its svg inside without issue.  I also set `shouldComponentUpdate` to return `false` so that react would ignore changes and let d3 manage it.

I also chose to output SVG code because of the accessibility and usability benefits its provides. SVG is injected as DOM elements, so they are accessible like any other tag inside the document.  Text inside a canvas element is similar to text inside an image, and doesn’t provide the same level of access to screen readers and keyboard users.  This also gives us an advantage when styling elements since CSS can access that information with normal selectors.  

## Downsides of D3
D3 is a powerful library, but it’s also very large and has a complicated API, so there is a learning curve there. There are lots of React charting libraries out there, and many of them just use D3 under the surface.  Taking the time to learn and use D3 directly gives a team the flexibility to make any tweaks necessary in the future.  It’s possible to paint yourself into a corner using a bunch of abstracted convenience features with a different library.

## My Additions to the Test 
I added a circle icon in the center of the donut to represent no change. I felt it was a good add from a cognitive load perspective to have the same 4 elements presented in the same order each time, even if there is no change.  

I also added some animated transitions on `mouseover`, in alignment with the previous conversation we had around guiding users through information and focusing their attention. Animation is one good way to do that. It also ties the parts of the chart together.  When one segment of the donut is moused over, the other corresponding elements of the chart are highlighted, reinforcing that connection for the user.

For the most part I did try to mimic the styles in the pdf as closely as I could, but I did add a slight text shadow to the text inside the donut segments to boost the contrast and readability of the light yellow background segment.

## Emotion for Styles
[Emotion](https://emotion.sh/docs/introduction) is a library for react that allows you to write your CSS inside your javascript files, but keep the traditional syntax of CSS.  This is helpful if you are migrating styles from an older library or traditional CSS files.  It also provides you some advantages in sharing data, like passing props from React into CSS.  I used that trick when staggering the animation delay inside the donut, for example.

## What I Would Do to Take It Further
If I was to spend more time and improve the component further, I would add more accessibility features for low vision and keyboard users.  I set myself up well starting with D3 and SVG, but there is still more to do in terms of using labels for screen readers and tooltips to describe areas further. 

I didn’t add any unit tests in Jest, and before production use of the component those would be a good idea to add also.

For prototyping purposes the animations work on Safari, Firefox and Chrome on my system, but I didn’t evaluate the performance and if there were performance issues on slower browsers they might need to be adjusted.


