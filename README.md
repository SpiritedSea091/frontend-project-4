# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](solution/desktop.png)

### Links

- Solution URL: [https://github.com/SpiritedSea091/frontend-project-4/](https://github.com/SpiritedSea091/frontend-project-4/)
- Live Site URL: [https://spiritedsea091.github.io/frontend-project-4/](https://spiritedsea091.github.io/frontend-project-4/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Javascript


### What I learned

Using javascript to manipulate the DOM. 
```js
function displayValues(){
  if(slider.value==='1'){
    // console.log("Hi");
    viewsText.innerHTML = "10K";
    // console.log(viewsText.innerHTML);
    costText.innerHTML = "$" +8.00 * (1-(yearly()*0.25)) + ".00 ";
  }
```
Getting the HTML input elements styled

```css
input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      background: hsl(174, 86%, 45%);
      background-image: url("images/icon-slider.svg");
      background-repeat: no-repeat;
      background-position: center;
      box-shadow: 0 20px 30px 0 hsl(174, 77%, 80%);
    }
```

### Continued development

Improvement is needed with ease of writing CSS code. 



## Author

- Frontend Mentor - [@SpiritedSea091](https://www.frontendmentor.io/profile/SpiritedSea091)
- Twitter - [@spiritedsea091](https://www.twitter.com/spiritedsea091)

