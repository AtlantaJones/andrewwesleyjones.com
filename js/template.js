//HEAD 
(function(app) {
try { app = angular.module("myApp"); }
catch(err) { app = angular.module("myApp", []); }
app.run(["$templateCache", function($templateCache) {
"use strict";

$templateCache.put("frontend.html","\n" +
    "\n" +
    "<div class=\"paper\">\n" +
    "\n" +
    "    <h1>Front-End Development</h1>\n" +
    "\n" +
    "    <p>Frontend text here</p>\n" +
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
    "    <p>Or <a href=\"\">click here</a> to download a PDF resume.</p>\n" +
    "</div>")
}]);
})();