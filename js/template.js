//HEAD 
(function(app) {
try { app = angular.module("myApp"); }
catch(err) { app = angular.module("myApp", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("backend.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Back-End Development</h1>\n" +
    "\n" +
    "    <p>I've been working with PHP and mySQL since about 2001. And in 2004, I built my own content management\n" +
    "        system and honed it for many years. While I was running my own freelance shop full-time, I put\n" +
    "        nearly all my clients on it, some of which are still enjoying to this day. The CMS was a wonderful learning\n" +
    "        platform and it instilled in me the love of building software.</p>\n" +
    "\n" +
    "    <p>During most of 2010, I did a lot of back-end development in support of Facebook applications. My\n" +
    "        framework of choice at that time was CodeIgniter, but I've since started building apps with\n" +
    "        Laravel. I've also become skilled at building sites with Drupal 7, including those with RESTful web\n" +
    "        services. And I've also begun building smaller sites with Wordpress, coupled with the Timber framework. </p>\n" +
    "\n" +
    "    <p>Later in 2017, I'll be building a new web app aimed at cartoonists and comic artists. Called\n" +
    "        <a href=\"http://OpenForCommissions.com\" target=\"_blank\">OpenForCommissions.com</a>, it will be a new\n" +
    "        platform for artists to more easily announce, sell, track and deliver art commissions to customers. This tool\n" +
    "        will also likely be built on Laravel and Angular</p>\n" +
    "</div>")

$templateCache.put("contact.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Contact Me!</h1>\n" +
    "\n" +
    "    <p>Looking for a well-rounded front-end developer? Got an interesting freelance project? Need a custom illustration? </p>\n" +
    "\n" +
    "    <p>Give me a shout!</p>\n" +
    "\n" +
    "    <p>andrew<i class=\"fa fa-at\" aria-hidden=\"true\"></i>atlantajones.com</p>\n" +
    "\n" +
    "</div>")

$templateCache.put("frontend.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Front-End Development</h1>\n" +
    "\n" +
    "    <p>To me, frontend development (HTML, CSS, JavaScript) is more about solving problems than anything else.\n" +
    "        Some developers are about placing constraints on designers, trying to keep designs boxed into something\n" +
    "        they can easily build. Their first answer is often \"no\". I prefer to start with a great design and\n" +
    "        figure out interesting solutions to the problems they pose.</p>\n" +
    "\n" +
    "    <p>I was previously a frontend dev at <a href=\"http://bignerdranch.com\" target=\"_blank\">Big Nerd Ranch</a>\n" +
    "        building web apps with HTML5, CSS3 and JavaScript. I worked on various projects, focusing on the visual\n" +
    "        UI side of frontend, responsive design, etc. I'm also skilled with jQuery, LESS and Sass, plus frameworks\n" +
    "        like Zurb Foundation and Bootstrap.</p>\n" +
    "\n" +
    "    <p>I also wrote <a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">several blog\n" +
    "        articles</a> for Big Nerd Ranch and contribute chapters to our upcoming book on HTML5 web apps. I was also\n" +
    "        a contributor to their Mobile Design course, in addition to being BNR's designated expert in the area of web\n" +
    "        accessibility.</p>\n" +
    "\n" +
    "    <p>Most recently, I was senior frontend developer for MoZeus Worldwide, where I built interactive experiential\n" +
    "        web apps for Fortune 500 companies. I led and mentored a team of frontend developers, facilitated team meetings\n" +
    "        and in-house training sessions. I also did a lot of R&D work to develop new techniques for delivering\n" +
    "        new and unique customer experiences.</p>\n" +
    "\n" +
    "    <p>I also do (very) occasional speaking, most recently at CSS Summit 2016,\n" +
    "        where I gave <a href=\"https://www.slideshare.net/AtlantaJones/adventures-in-atomic-design\" target=\"_blank\">a talk on Atomic Design.</a></p>\n" +
    "</div>")

$templateCache.put("home.html","\n" +
    "\n" +
    "<div class=\"paper home\">\n" +
    "    <p>Hi, my name is Andrew Jones, and I'm what you'd call a jack-of-all-trades web developer. I've been doing this professionally for the past 20 years.</p>\n" +
    "\n" +
    "    <p>My specialty is frontend development, but I've done a lot of back-end work with PHP and mySQL.</p>\n" +
    "\n" +
    "    <p>I'm looking for a casual atmosphere, working with like-minded geeks dedicated to building cool products and perfecting their craft. I believe in code as art, and I sweat the details. I'm drawn to working environments where people genuinely love what they do and care that it's done right.</p>\n" +
    "\n" +
    "    <p>Click around to see my skillset and select projects.</p>\n" +
    "\n" +
    "    <p>Or <a href=\"pdf/Andrew_Jones_Resume-2017.pdf\" target=\"_blank\">click here</a> to download a PDF resume.</p>\n" +
    "</div>")

$templateCache.put("illustration.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Illustration</h1>\n" +
    "\n" +
    "    <p>While I've been a developer over 20 years now, I've been an artist my entire life.</p>\n" +
    "\n" +
    "    <p>I use multiple mediums, from digital to pencil to watercolor to airbrush. I've created everything from sketch cards to\n" +
    "    avatars to paintings to full-size movie posters, and always looking for a new artistic challenge</p>\n" +
    "\n" +
    "    <p><a href=\"https://www.behance.net/atlantajones\" target=\"_blank\">See the most up-to-date illustration portfolio here.</a></p>\n" +
    "</div>")

$templateCache.put("projects.html","\n" +
    "\n" +
    "<div class=\"paper straight\">\n" +
    "\n" +
    "    <h1>Web Dev Projects</h1>\n" +
    "\n" +
    "    <p>Unfortunately, most of the work I've done the past few years have either been under strict NDA, or are no longer online. But here's some recent stuff I'm proud of.</p>\n" +
    "\n" +
    "    <h2><a href=\"http://peoplesbanktheatre.com/\" target=\"_blank\">Peoples Bank Theatre Website</a></h2>\n" +
    "    <p>I've been working with a group dedicated to renovating and reopening this 1919 theatre since 1997. As they\n" +
    "        got close to their grand opening in January 2016, they were in need of a <a\n" +
    "                href=\"http://peoplesbanktheatre.com/\" target=\"_blank\">new site</a> (I'd also built every previous\n" +
    "        version).</p>\n" +
    "\n" +
    "    <p>Due to the timeline, I ended up designing and building a new site in about 6 days. Built on Wordpress, I used the\n" +
    "        <a href=\"http://upstatement.com/timber/\" target=\"_blank\">Timber framework</a> to allow for totally custom templating,\n" +
    "        bypassing a lot of the usual headaches of using Wordpress's own functions.</p>\n" +
    "\n" +
    "    <p>The site is completely responsive for mobile, using the Zurb Foundation framework, and every aspect is totally controllable\n" +
    "        by the client within Wordpress.</p>\n" +
    "\n" +
    "    <h2>Fleming's WiNEPAD App</h2>\n" +
    "    <p>This is an HTML5 web app that runs from the home screen on iPads in every Fleming's Steakhouse across the country.</p>\n" +
    "    <p>A single-page app running AngularJS, WiNEPAD is optimized for performance and can run completely offline, thanks\n" +
    "        to localstorage and the HTML5 application cache.</p>\n" +
    "    <p>I also built and maintain the Drupal-based CMS that acts as an API for serving wine, cocktail and other data, customized\n" +
    "        to each restaurant location.</p>\n" +
    "\n" +
    "    <h2><a href=\"http://www.tcarms.com/\" target=\"_blank\">TC Arms Responsive Site</a></h2>\n" +
    "    <p>While I don't endorse the subject matter, I'm supremely proud of <a href=\"http://www.tcarms.com/\" target=\"_blank\">this responsive site</a> I did almost all the frontend code on. (note: that was 3 years ago, so things may have changed)</p>\n" +
    "\n" +
    "\n" +
    "    <h2><a href=\"http://emag.fireboxstudios.com\" target=\"_blank\">Wells Fargo eMags</a></h2>\n" +
    "    <p>I built this “<a href=\"http://emag.fireboxstudios.com\" target=\"_blank\">e-Magazine</a>” for Wells Fargo Bank as a single-page experience using JavaScript and jQuery.\n" +
    "        With the exception of the calculator, I built out all the HTML, CSS and scripting.</p>\n" +
    "\n" +
    "    <p>Accessibility is also a huge factor for Wells Fargo, so I also made the entire experience completely\n" +
    "        keyboard and screen reader accessible, a feat that we originally thought would be unattainable. </p>\n" +
    "\n" +
    "    <!--<h2>Wells Fargo Envision Tool</h2>-->\n" +
    "    <!--<p>This is a <a href=\"https://www.wellsfargoadvisors.com/envisionyourgoals/envision-tool.htm\" target=\"_blank\">card-sorting tool</a> I built for Wells Fargo as well. It features drag-and-drop sorting of cards that prioritize-->\n" +
    "        <!--your goals and concerns about retirement.</p>-->\n" +
    "\n" +
    "    <!--<p>As with their eMags, accessibility is a major priority, and this tool is also totally keyboard and screen reader accessible.-->\n" +
    "        <!--And let me tell you, making drag-and-drop accessible is no easy feat.</p>-->\n" +
    "\n" +
    "\n" +
    "    <h2>Sports Illustrated GameFlash</h2>\n" +
    "    <p>At Turner Sports, I did front-end development on the Sports Illustrated website. I\n" +
    "        was part of a small team dedicated to building a web app called \"GameFlash\", which is a\n" +
    "        real-time \"second screen\" experience for watching live sports.</p>\n" +
    "\n" +
    "    <p>We built two versions of GameFlash, one for NCAA football, and one for NFL games.\n" +
    "        The apps utilize Turner's high-capacity data centers to pull JSON-formatted game stats\n" +
    "        every few seconds and dynamically update the entire page, which includes a graphical\n" +
    "        representation of the playing field.</p>\n" +
    "\n" +
    "    <p>My parts of the app included polling for data every few seconds, parsing it and\n" +
    "        populating things like scoreboards, box scores, play-by-plays, player stats and more. All\n" +
    "        this utilizing object-oriented javascript and jQuery for fast data population.</p>\n" +
    "\n" +
    "    <p>Unfortunately, Gameflash has since morphed into something else so there's no working version to show. But trust me, it was cool :)</p>\n" +
    "\n" +
    "</div>")

$templateCache.put("words.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Writing and Speaking</h1>\n" +
    "\n" +
    "    <p>While I'm certainly not as prolific with writing as I am with art and development, it's something I\n" +
    "        really enjoy doing. I try to write as much as I can for my\n" +
    "        <a href=\"http://atlantajones.com/\" target=\"_blank\">personal blog</a>, and I wrote\n" +
    "        <a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">several posts</a> for Big Nerd\n" +
    "        Ranch's (very) popular blog.</p>\n" +
    "\n" +
    "        <ul>\n" +
    "            <li><a href=\"https://atlantajones.com/on-introverts-and-conferences/\" target=\"_blank\">On Introverts and Conferences</a></li>\n" +
    "            <li><a href=\"https://atlantajones.com/blank-page-syndrome/\" target=\"_blank\">Regarding Blank Page Syndrome</a></li>\n" +
    "            <li><a href=\"https://www.bignerdranch.com/blog/css-sprite-management-with-gulp/\" target=\"_blank\">CSS Sprite Management with Gulp</a> | <a href=\"https://www.bignerdranch.com/blog/css-sprite-management-with-gulp-part2/\" target=\"_blank\">Part Two</a></li>\n" +
    "            <li><a href=\"https://www.bignerdranch.com/blog/image-optimization-with-adobe-fireworks/\" target=\"_blank\">Image Optimization with Adobe FireWorks</a></li>\n" +
    "            <li><a href=\"https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/\" target=\"_blank\">Web Accessibility: Skip Navigation Links</a></li>\n" +
    "            <li><a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">More articles written for Big Nerd Ranch...</a></li>\n" +
    "        </ul>\n" +
    "\n" +
    "    <p>I also do the occasional tech talk: </p>\n" +
    "\n" +
    "    <ul>\n" +
    "        <li><a href=\"https://www.slideshare.net/AtlantaJones/adventures-in-atomic-design\" target=\"_blank\">Adventures in Atomic Design</a> at\n" +
    "            <a href=\"http://environmentsforhumans.com/2016/css-summit/\" target=\"_blank\">CSS Summit 2016</a></li>\n" +
    "        <li><a href=\"https://youtu.be/gulNlIbmzvE\" target=\"_blank\">Regarding Blank Page Syndrome</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "</div>")
}]);
})();