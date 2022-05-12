## Table of Contents
- [Description](#description)
- [Concept](#concept)
- [User scenario](#User)
- [Exclusive design](#ExclusiveDesign)
  - [Study situation](#study)
  - [Prioritise identity](#identity)
  - [Ignore conventions](#coventions)
  - [Add nonsense](#nonsense)

- [User testing](#Testing)
  - [Week 1](#1)
  - [Week 2](#2)
  - [Week 3](#3)
- [Issues](#Issues)

## Description
For this course we have to make a site for one specific person, in my case Eric. Eric is someone who is in a wheelchair and is limited to his arm movement. For him we have to make a site that copies, paste and selects text on the site using speech. This way he doesn't have to use his fingers for specific movements to select the text he wants to copy and paste. 

## Concept
My concept is making a site where he can select, copy and paste using speech. His talking is being listened to, so that he can use it for commands. I want multiple options for him:
- He can select one word from the text using speech.
- He can select a whole area saying copy start word....to....ending words using speech.
- He can copy the selected text using speech.
- He can paste the copied text using speech.

## User scenario <a name="User">
### Who?
Eric is 49 years old, lives in Amsterdam-zuid and studies Interaction Design at HKU. Since childhood, his limbs have grown together and he is therefore physically limited. That's why he sat in a wheelchair at a young age. 

Eric is a great guy, with a good sense of humor. He is currently working on accessibility for public environments. He loves music, reading, playing games and riding through nature. 

Eric suprisingly uses his mouse very well. Having to use multiple keys on the keyboard is a struggle that's why he always uses right click to copy and paste text. Only the friend off Eric cannot select text with her mouse very well, so that's why he also wants us to look at that as well. 

### What?
Eric wants us to avoid using key combinations because that is not possible for him. He wants us to find a new solution for it using speech. The commands he wants in there are the simple copy and paste, but also to select text. Selecting text can be hard, because you need precise mouse movement for it, and for some people that can be almost impossible. 

### How?
I want the user to be able to copy and paste using the web speech api (https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).
As I said in my concept chapter, I want the user to have multiple commands. One of them is selecting text, the others copy and paste. 

### Why?
With this concept it would be easier for Eric, but also for a lot of other people, to select/copy/paste without having to use key combinations and precize movement with the mouse. 
  
## Exclusive design <a name="ExclusiveDesign">
  
  ### Study situation <a name="study">
  
  ### Prioritise identity <a name="identity">
  
  ### Ignore conventions <a name="coventions">

  ### Add nonsense <a name="nonsense">
  

## User testing <a name="Testing">
  
### Week 1 <a name="1">

https://user-images.githubusercontent.com/44086608/166654549-1cf3cb62-de08-47cf-b1bd-03b6edd8cc44.mp4
  
Feedback about Eric:
  - Eric is 49 years old and lives in Amsterdam-Zuid.
  - Loves reading, movies, games, music and going to nature.
  - Eric uses Microsoft Edge, which in my case is perfect (my software is supported there).
  - Eric has full control over his muscles, they only got deformed because some muscles were stronger than the other. 
  - Selecting using the mouse and mousepad went well, but his friend cannot so we need to make it possible without using the mouse. 
  

Feedback about product:
  - Buttons to start recording is a bit unuser friendly. It needs a lot of actions and can be a bit frustrating. Maybe start listening at the start and have an option to turn of the recording. 
 - Searching words in the text could be a nice option.
  - Copy from...to...end is great. You don't have to select a long text yourself. 
  - A chrome extension is very handy. 
  - A way to change text when copying would be a great feature as well. 

### Week 2 <a name="2">
  
Improvements from week 1:
  - I replaced the copy/paste buttons with a record check button option. 
  - The recording starts when you open the site and using the check button, can be disabled again.
  - I made an option to select one word from the text (not perfect yet)
   
https://user-images.githubusercontent.com/44086608/166654577-69ba5651-bc74-47ab-9673-918c5a8d153c.mp4

Feedback about Eric:
  - He likes D&D.
  - He can use both buttons from the mouse.

Feedback about product:
  - Make it clear that when you open the site, you are being recorded. 
  - Make it clear what you are saying and if it goes correctly (add pop-ups..?)
  - If something goes wrong with the command, add a pop-up saying it went wrong. 
  - The instruction were pretty unclear, maybe let it popout using brighter colors. 
  - the microphone color when it was on was pretty unclear, change it to green. 
  - Something Lisanne had, was adding a next or previous when there are multiple words in the text. (add it when I have time left)

The feedback that I think is most important, is making clear to the user what is happening with the commands. Make it clear what he is saying and if something went wrong. 

### Week 3 <a name="3">
  
  
  
  
  
  
## Issues <a name="Issues">
If you see any issues in my code or spots that need improvements let me know. You can file an issue in this repository. Thank you!






