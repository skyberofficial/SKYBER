Introduction
Lenis ("smooth" in latin) is a lightweight, robust, and performant smooth scroll library. It's designed by @darkroom.engineering to be simple to use and easy to integrate into your projects. It's built with performance in mind and is optimized for modern browsers. It's perfect for creating smooth scrolling experiences on your website such as WebGL scroll syncing, parallax effects, and much more, see Demo and Showcase.

Read our Manifesto to learn more about the inspiration behind Lenis.


Sponsors
Packages
Installation
Setup
Settings
Properties
Methods
Events
Considerations
Limitations
Troubleshooting
Tutorials
Plugins
Lenis is Use
License

Sponsors
If you’ve used Lenis and it made your site feel just a little more alive, consider sponsoring.

Your support helps us smooth out the internet one library at a time—and lets us keep building tools that care about the details most folks overlook.

User avatar: cachet.studioUser avatar: Scott SunartoUser avatar: Mario Sanchez MaselliUser avatar: ΛRKUser avatar: Federico VallaUser avatar: Iron VelvetUser avatar: UX By UsUser avatar: User avatar: Alex CinovojUser avatar: Æ

Vercel OSS Program
Packages
lenis
lenis/react
lenis/vue
lenis/framer
lenis/snap

Installation
Using a package manager:

npm i lenis
import Lenis from 'lenis'

Using scripts:

<script src="https://unpkg.com/lenis@1.3.8/dist/lenis.min.js"></script> 

Setup
Basic:
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
Custom raf loop:
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
Recommended CSS:
import stylesheet

import 'lenis/dist/lenis.css'
or link the CSS file:

<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.8/dist/lenis.css">
or add it manually:

See lenis.css stylesheet

GSAP ScrollTrigger:
// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
React:
See documentation for lenis/react.


Settings
Option	Type	Default	Description
wrapper	HTMLElement, Window	window	The element that will be used as the scroll container.
content	HTMLElement	document.documentElement	The element that contains the content that will be scrolled, usually wrapper's direct child.
eventsTarget	HTMLElement, Window	wrapper	The element that will listen to wheel and touch events.
smoothWheel	boolean	true	Smooth the scroll initiated by wheel events.
lerp	number	0.1	Linear interpolation (lerp) intensity (between 0 and 1).
duration	number	1.2	The duration of scroll animation (in seconds). Useless if lerp defined.
easing	function	(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))	The easing function to use for the scroll animation, our default is custom but you can pick one from Easings.net. Useless if lerp defined.
orientation	string	vertical	The orientation of the scrolling. Can be vertical or horizontal.
gestureOrientation	string	vertical	The orientation of the gestures. Can be vertical, horizontal or both.
syncTouch	boolean	false	Mimic touch device scroll while allowing scroll sync (can be unstable on iOS<16).
syncTouchLerp	number	0.075	Lerp applied during syncTouch inertia.
touchInertiaExponent	number	1.7	Manage the strength of syncTouch inertia.
wheelMultiplier	number	1	The multiplier to use for mouse wheel events.
touchMultiplier	number	1	The multiplier to use for touch events.
infinite	boolean	false	Enable infinite scrolling! syncTouch: true is required on touch devices (See example).
autoResize	boolean	true	Resize instance automatically based on ResizeObserver. If false you must resize manually using .resize().
prevent	function	undefined	Manually prevent scroll to be smoothed based on elements traversed by events. If true is returned, it will prevent the scroll to be smoothed. Example: (node) => node.classList.contains('cookie-modal').
virtualScroll	function	undefined	Manually modify the events before they get consumed. If false is returned, the scroll will not be smoothed. Examples: (e) => { e.deltaY /= 2 } (to slow down vertical scroll) or ({ event }) => !event.shiftKey (to prevent scroll to be smoothed if shift key is pressed).
overscroll	boolean	true	Similar to CSS overscroll-behavior (https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior).
autoRaf	boolean	false	Wether or not to automatically run requestAnimationFrame loop.
anchors	boolean, ScrollToOptions	false	Scroll to anchor links when clicked. If true is passed, it will enable anchor links with default options. If ScrollToOptions is passed, it will enable anchor links with the given options.
autoToggle	boolean	false	Automatically start or stop the lenis instance based on the wrapper's overflow property, ⚠️ this requires Lenis recommended CSS. Safari > 17.3, Chrome > 116 and Firefox > 128 (https://caniuse.com/?search=transition-behavior).
allowNestedScroll	boolean	false	Allow nested scrolls. If true is passed, it will allow nested scrolls. If false is passed, it will not allow nested scrolls. ⚠️ To be used with caution since this can lead to performance issues, prefer using prevent or data-lenis-prevent instead.

Properties
Property	Type	Description
animatedScroll	number	Current scroll value
dimensions	object	Dimensions instance
direction	number	1: scrolling up, -1: scrolling down
emitter	object	Emitter instance
options	object	Instance options
targetScroll	number	Target scroll value
time	number	Time elapsed since instance creation
actualScroll	number	Current scroll value registered by the browser
lastVelocity	number	last scroll velocity
velocity	number	Current scroll velocity
isHorizontal (getter)	boolean	Whether or not the instance is horizontal
isScrolling (getter)	boolean, string	Whether or not the scroll is being animated, smooth, native or false
isStopped (getter)	boolean	Whether or not the user should be able to scroll
limit (getter)	number	Maximum scroll value
progress (getter)	number	Scroll progress from 0 to 1
rootElement (getter)	HTMLElement	Element on which Lenis is instanced
scroll (getter)	number	Current scroll value (handles infinite scroll if activated)
className (getter)	string	rootElement className

Methods
Method	Description	Arguments
raf(time)	Must be called every frame for internal usage.	time: in ms
scrollTo(target, options)	Scroll to target.	target: goal to reach
number: value to scroll in pixels
string: CSS selector or keyword (top, left, start, bottom, right, end)
HTMLElement: DOM element
options
offset(number): equivalent to scroll-padding-top
lerp(number): animation lerp intensity
duration(number): animation duration (in seconds)
easing(function): animation easing
immediate(boolean): ignore duration, easing and lerp
lock(boolean): whether or not to prevent the user from scrolling until the target is reached
force(boolean): reach target even if instance is stopped
onComplete(function): called when the target is reached
userData(object): this object will be forwarded through scroll events
on(id, function)	id can be any of the following instance events to listen.	
stop()	Pauses the scroll	
start()	Resumes the scroll	
resize()	Compute internal sizes, it has to be used if autoResize option is false.	
destroy()	Destroys the instance and removes all events.	
Events
Event	Callback Arguments
scroll	Lenis instance
virtual-scroll	{deltaX, deltaY, event}

Considerations
Nested scroll
Using Javascript
<div id="modal">scrollable content</div>
const lenis = new Lenis({
  prevent: (node) => node.id === 'modal',
})
See example

Using HTML
<div data-lenis-prevent>scrollable content</div>
See example

prevent wheel events only

<div data-lenis-prevent-wheel>scrollable content</div>
prevent touch events only

<div data-lenis-prevent-touch>scrollable content</div>
Anchor links
By default, Lenis will prevent anchor links, click while scrolling, to fix that you must set anchors: true.

new Lenis({
  anchors: true
})
You can also use scrollTo options.

new Lenis({
  anchors: {
    offset: 100,
    onComplete: ()=>{
      console.log('scrolled to anchor')
    }
  }
})

Limitations
no support for CSS scroll-snap, you must use (lenis/snap)
capped to 60fps on Safari (source) and 30fps on low power mode
smooth scroll will stop working over iframe since they don't forward wheel events
position fixed seems to lag on MacOS Safari pre-M1 (source)
touch events may behave unexpectedly when syncTouch is enabled on iOS < 16
nested scroll containers require proper configuration to work correctly

Troubleshooting
Make sure you use the latest version of Lenis
Include recommended CSS.
Remove GSAP ScrollTrigger.
Remove Lenis and be sure that your element/page is scrollable anyway.
Be sure to use autoRaf: true or to manually call lenis.raf(time).

Tutorials
Scroll Animation Ideas for Image Grids by Codrops
How to Animate SVG Shapes on Scroll by Codrops
The BEST smooth scrolling library for your Webflow website! (Lenis) by Diego Toda de Oliveira
Easy smooth scroll in @Webflow with Lenis + GSAP ScrollTrigger tutorial by También Studio

Plugins
r3f-scroll-rig by 14islands
locomotive-scroll by Locomotive

Lenis in use
DeSo by Studio Freight
Sculpting Harmony by Resn
Superpower
Daylight Computer by Basement Studio
Lifeworld by Olafur Eliasson by Nicolas Garnier, Simon Riisnæs Dagfinrud, Lumír Španihel, Everton Guilherme, Diana Alcausin, Cristiana Sousa