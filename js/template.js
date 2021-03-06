//HEAD 
(function(app) {
try { app = angular.module("myApp.templates"); }
catch(err) { app = angular.module("myApp.templates", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("pages/backend.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "<div class=\"row align-justify\">\n" +
    "\n" +
    "    <div class=\"column small-12 medium-9 large-8\">\n" +
    "        <h1>Back-End Development</h1>\n" +
    "        <p>I've been working with PHP and mySQL since about 2001. And in 2004, I built my own content management\n" +
    "            system and honed it for many years. While I was running my own freelance shop full-time, I put\n" +
    "            nearly all my clients on it, some of which are still enjoying to this day. The CMS was a wonderful learning\n" +
    "            platform and it instilled in me the love of building software, and by extension, making work easier for the people that use it.</p>\n" +
    "\n" +
    "        <p>During most of 2010, I did a lot of back-end development in support of Facebook applications. My\n" +
    "            framework of choice at that time was CodeIgniter, but I've since started building apps with\n" +
    "            Laravel. I'm also experienced at building sites with Drupal 7, including those with RESTful web\n" +
    "            services that serve separate front-ends. I also build smaller sites with Wordpress, coupled with the Timber framework for custom theming.</p>\n" +
    "\n" +
    "        <p>While I'm very comfortable working with PHP, I consider myself first and foremost a front end developer. I'm happy to assist\n" +
    "        on the back end where needed, but prefer to focus on the UI side these days.</p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"small-12 medium-3\">\n" +
    "        <div class=\"tricks\">\n" +
    "            <h3>Bag of Tricks</h3>\n" +
    "            <ul>\n" +
    "                <li>PHP</li>\n" +
    "                <li>mySQL</li>\n" +
    "                <li>Laravel/Jigsaw</li>\n" +
    "                <li>Wordpress</li>\n" +
    "                <li>Drupal 7</li>\n" +
    "                <li>PHPStorm</li>\n" +
    "                <li>Git</li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>")

$templateCache.put("pages/contact.html","\n" +
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

$templateCache.put("pages/frontend.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <div class=\"row align-justify\">\n" +
    "\n" +
    "        <div class=\"column small-12 medium-9 large-8\">\n" +
    "            <h1>Front-End Development</h1>\n" +
    "\n" +
    "            <p>To me, frontend development (HTML, CSS, JavaScript) is more about solving problems than anything else.\n" +
    "                I love getting my hands on a great design and figuring out interesting solutions for making them living,\n" +
    "                breathing (accessible) sites and web apps.</p>\n" +
    "\n" +
    "            <p>I was previously a frontend dev at <a href=\"http://bignerdranch.com\" target=\"_blank\">Big Nerd Ranch</a>\n" +
    "                building web apps with HTML5, CSS3 and JavaScript. I also wrote\n" +
    "                <a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">several blog\n" +
    "                articles</a> for BNR and was their designated expert in the area of web accessibility.</p>\n" +
    "\n" +
    "            <p>Most recently, I've been at If/Then, where I've built VUE.js components in support of large Drupal 8 sites.\n" +
    "                I've also performed web component accessibility reviews for major brands like Coca-Cola, with\n" +
    "                recommendations on how to mediate compliance issues. I also contribute to React components and front end\n" +
    "                development for National Geographic’s CMS platform.\n" +
    "            </p>\n" +
    "\n" +
    "            <p>I also do (very) occasional speaking, most recently at CSS Summit 2016,\n" +
    "                where I gave <a href=\"https://www.slideshare.net/AtlantaJones/adventures-in-atomic-design\" target=\"_blank\">a talk on Atomic Design.</a></p>\n" +
    "\n" +
    "            <p>See more on my talks and writings <a ui-sref=\"words\">here</a>.</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"small-12 medium-3\">\n" +
    "            <div class=\"tricks\">\n" +
    "                <h3>Bag of Tricks</h3>\n" +
    "                <ul>\n" +
    "                    <li>JavaScript</li>\n" +
    "                    <li>jQuery</li>\n" +
    "                    <li>Angular</li>\n" +
    "                    <li>Vue.js</li>\n" +
    "                    <li>React</li>\n" +
    "                    <li>CSS3</li>\n" +
    "                    <li>HTML5</li>\n" +
    "                    <li>Canvas</li>\n" +
    "                    <li>SASS</li>\n" +
    "                    <li>Foundation</li>\n" +
    "                    <li>Bootstrap</li>\n" +
    "                    <li>Git</li>\n" +
    "                    <li>Gulp</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("pages/home.html","\n" +
    "\n" +
    "<div class=\"paper home\">\n" +
    "    <h1>Greetings!</h1>\n" +
    "    <p>My name is Andrew Jones, and I'm what you'd call a jack-of-all-trades web developer. I've been doing this professionally for the past 20+ years.</p>\n" +
    "\n" +
    "    <p>My specialty is frontend development, but I have some experience with PHP and mySQL.</p>\n" +
    "\n" +
    "    <p>My ideal gig is to work with developers and designers that are passionate about creating, building and improving web sites and apps for small to medium-sized businesses and organizations. I believe in code as art, and I sweat the details. I'm drawn to working environments where people genuinely love what they do and care that it's done right.</p>\n" +
    "\n" +
    "    <p>Click around to see my skillset and select projects.</p>\n" +
    "\n" +
    "    <p>Or <a href=\"pdf/Andrew_Jones_Resume-2018.pdf\" target=\"_blank\">click here</a> to download a PDF resume.</p>\n" +
    "\n" +
    "    <p>Feel free to <a href=\"https://github.com/AtlantaJones/andrewwesleyjones.com\" target=\"_blank\">view the source code of this site on Github.</a></p>\n" +
    "</div>")

$templateCache.put("pages/illustration.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "    <div class=\"row align-justify\">\n" +
    "\n" +
    "        <div class=\"column small-12 medium-9 large-8\">\n" +
    "            <h1>Illustration</h1>\n" +
    "            <p>While I've been a developer over 20 years now, I've been an artist my entire life.</p>\n" +
    "\n" +
    "            <p>I use multiple mediums, from digital to pencil to watercolor to airbrush. I've created everything from sketch cards to\n" +
    "                avatars to paintings to full-size movie posters, and I'm always looking for a new artistic challenge</p>\n" +
    "\n" +
    "            <p><a href=\"https://www.behance.net/atlantajones\" target=\"_blank\">See the most up-to-date illustration portfolio here.</a></p>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"column small-12 medium-3\">\n" +
    "            <div class=\"tricks\">\n" +
    "                <h3>Bag of Tricks</h3>\n" +
    "                <ul>\n" +
    "                    <li>Photoshop</li>\n" +
    "                    <li>Adobe XD</li>\n" +
    "                    <li>Manga Studio</li>\n" +
    "                    <li>Wacom Cintiq</li>\n" +
    "                    <li>Pen & Ink</li>\n" +
    "                    <li>Prismacolor Markers</li>\n" +
    "                    <li>Watercolors</li>\n" +
    "                    <li>Airbrush</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <img class=\"thumbnail\" src=\"http://res.cloudinary.com/firebox/image/upload/q_70/v1489348137/Resume/art-olaf.jpg\" alt=\"Count Olaf Digital Painting\">\n" +
    "            <img class=\"thumbnail\" src=\"http://res.cloudinary.com/firebox/image/upload/q_70/v1489348136/Resume/art-arcadia.jpg\" alt=\"Arcade movie poster\">\n" +
    "            <!--<img class=\"thumbnail\" src=\"http://res.cloudinary.com/firebox/image/upload/q_70/v1489348136/Resume/art-lyle.jpg\" alt=\"Mr Lyle from Penny Dreadful\">-->\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>")

$templateCache.put("pages/projects.html","\n" +
    "\n" +
    "<div class=\"paper straight\">\n" +
    "\n" +
    "    <h1>Web Dev Projects</h1>\n" +
    "\n" +
    "    <p>A lot of the work I've done the past few years have either been under strict NDA, are no longer online, or no longer reflect my\n" +
    "        current skillset. But here's some stuff I'm proud of.</p>\n" +
    "\n" +
    "    <h2>Caire Medical</h2>\n" +
    "    <p>While at Morrison Agency, I built the majority of the front end for a new site for Caire, a company that sells\n" +
    "    oxygen equipment and supplies. </p>\n" +
    "\n" +
    "    <p>The project used HTML5, Sass and Bootstrap 4 to put together fully responsive prototype pages from a series of Sketch files.\n" +
    "     Any components that required JavaScript functionality were built as modular components with the VUE.js library.</p>\n" +
    "\n" +
    "    <p>To start the project, I did a complete audit of all the page designs to identify all common and reusable components, and\n" +
    "    compiled them into a component reference, complete with suggested naming conventions. I then built out each component in HTML\n" +
    "    partials, with CSS conforming to the BEM naming system.</p>\n" +
    "\n" +
    "    <p>This project was all about creating page prototypes, and are not yet integrated into a live, working site. But here are a\n" +
    "    few select pages to demonstrate features and responsiveness:\n" +
    "        <ul>\n" +
    "            <li><a href=\"http://chart-caire-production.herokuapp.com/\" target=\"_blank\">Homepage</a></li>\n" +
    "            <li><a href=\"http://chart-caire-production.herokuapp.com/products/\" target=\"_blank\">Products</a></li>\n" +
    "            <li><a href=\"http://chart-caire-production.herokuapp.com/cart/\" target=\"_blank\">Cart</a></li>\n" +
    "            <li><a href=\"http://chart-caire-production.herokuapp.com/wizard/\" target=\"_blank\">Checkout Wizard</a></li>\n" +
    "        </ul>\n" +
    "    </p>\n" +
    "\n" +
    "    <h2><a href=\"http://frighteneering.com/\" target=\"_blank\">Frighteneering.com</a></h2>\n" +
    "    <p>A personal project, this site started out on the Ghost CMS platform. I didn't like Ghost that much, but loved the\n" +
    "    theme I'd bought for it. So I ported it to a custom Wordpress theme using the Timber framework, and converted the CSS\n" +
    "    to SASS and JavaScript to ES6. </p>\n" +
    "\n" +
    "    <h2><a href=\"http://pbt.fireboxstudios.com/\" target=\"_blank\">Peoples Bank Theatre Website</a></h2>\n" +
    "    <p>I've been working with a group dedicated to renovating and reopening this 1919 theatre since 1997. As they\n" +
    "        got close to their grand opening in January 2016, they were in need of a\n" +
    "        <a href=\"http://pbt.fireboxstudios.com/\" target=\"_blank\">new site</a> (I'd also built every previous\n" +
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
    "    <p>I also built and maintained the Drupal-based CMS that acts as an API for serving wine, cocktail and other data, customized\n" +
    "        to each restaurant location.</p>\n" +
    "    <p>You can view the live app <a href=\"http://flemingssteakhouse.com/WiNEPAD\" target=\"_blank\">here</a>. NOTE: It may take quite a while to load,\n" +
    "    depending on your location. This is sadly because the main wine database is still coming from on old, inefficient CMS system the client\n" +
    "    has still not migrated away from :(</p>\n" +
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

$templateCache.put("pages/words.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <div class=\"row align-justify\">\n" +
    "\n" +
    "        <div class=\"column small-12 medium-9 large-8\">\n" +
    "            <h1>Writing and Speaking</h1>\n" +
    "            <p>While I'm certainly not as prolific with writing as I am with art and development, it's something I\n" +
    "                really enjoy doing. I try to write as much as I can for my\n" +
    "                <a href=\"http://atlantajones.com/\" target=\"_blank\">personal blog</a>, and I wrote\n" +
    "                <a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">several posts</a> for Big Nerd\n" +
    "                Ranch's (very) popular blog.</p>\n" +
    "\n" +
    "            <ul>\n" +
    "                <li><a href=\"https://atlantajones.com/on-introverts-and-conferences/\" target=\"_blank\">On Introverts and Conferences</a></li>\n" +
    "                <li><a href=\"https://atlantajones.com/blank-page-syndrome/\" target=\"_blank\">Regarding Blank Page Syndrome</a></li>\n" +
    "                <li><a href=\"https://www.bignerdranch.com/blog/css-sprite-management-with-gulp/\" target=\"_blank\">CSS Sprite Management with Gulp</a> | <a href=\"https://www.bignerdranch.com/blog/css-sprite-management-with-gulp-part2/\" target=\"_blank\">Part Two</a></li>\n" +
    "                <li><a href=\"https://www.bignerdranch.com/blog/image-optimization-with-adobe-fireworks/\" target=\"_blank\">Image Optimization with Adobe FireWorks</a></li>\n" +
    "                <li><a href=\"https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/\" target=\"_blank\">Web Accessibility: Skip Navigation Links</a></li>\n" +
    "                <li><a href=\"https://www.bignerdranch.com/about/the-team/andrew-jones/\" target=\"_blank\">More articles written for Big Nerd Ranch...</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <p>I also do the occasional tech talk: </p>\n" +
    "\n" +
    "            <ul>\n" +
    "                <li><a href=\"https://www.slideshare.net/AtlantaJones/adventures-in-atomic-design\" target=\"_blank\">Adventures in Atomic Design</a> at\n" +
    "                    <a href=\"http://environmentsforhumans.com/2016/css-summit/\" target=\"_blank\">CSS Summit 2016</a></li>\n" +
    "                <li><a href=\"https://youtu.be/gulNlIbmzvE\" target=\"_blank\">Regarding Blank Page Syndrome</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"small-12 medium-3\">\n" +
    "            <div class=\"tricks\">\n" +
    "                <h3>Bag of Tricks</h3>\n" +
    "                <ul>\n" +
    "                    <li>Scrivener</li>\n" +
    "                    <li>Scapple</li>\n" +
    "                    <li>Markdown</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>")
}]);
})();