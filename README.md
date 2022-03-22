# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User selects number of buttons

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://github.com/AutonomousDev/MemoryGame/blob/main/2022-03-22%2014-16-44_2.gif?raw=true)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I looked up some documentation on W3 schools for CSS/JS

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

When I added a feature to change the number of buttons based on the user's choice I forgot forms have a submit behavior that refreshes the page. After checking if it was a CSS property issue I remembered I needed to set the form action to do nothing when I press the button. 
Overall this wasn’t a very challenging assignment. I feel like my skill level is significantly beyond the target audience of beginner HTML/CSS/JS. I’m used to working in a framework like react so it was a good refresher on using just JS with a web page.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I want to learn more about best practices for deploying web apps. So far I can host my own apps on pretty much any platform with a little bit of following tutorials and documentation. I’m pretty sure there are things I’m doing that are sloppy or bad practices. It’s challenging to identify good or bad practices when you're self learning or only making projects to the assignment spec.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had more time I would look at refactoring the functions from the tutorial to be more dynamic. A lot of constants are hard coded which makes it harder to make quick changes. 
I used a lot of copy paste for repetitive things like buttons. A better practice would be to componentize the button and fill the page with the correct number of buttons using a for loop. I know how to do this in a framework but I would have to do some research on how to do it with just HTML/JS.
I would also clean up the CSS to make the game look better. The margins between button rows do not match column margins. Adding CSS breakpoints would give me more control over how the app looks on a page. 
I would also try to add an endless mode where the game goes on forever. Next I would need to give the player a score since the game is now endless. Once I have a score the logical next step is to connect it to build an API to record high scores and return a leader board. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
