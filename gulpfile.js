// Good reference: http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Gulp

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var watch        = require('gulp-watch');
var clean        = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var html2js      = require('gulp-html2js');
var connect      = require('gulp-connect');



var paths = {
    pages: ['index.html'],
    images: ['img/*.png','img/**/*.jpg','img/**/*.gif','img/**/*.svg'],
    fonts: ['fonts/**/*.eot', 'fonts/**/*.svg', 'fonts/**/*.ttf'],
    scripts: ['js/app.js'],
    styles: ['css/app.css']
};



gulp.task('default', ['server', 'watch', 'scripts', 'sass']);



// Watch for changes to js and scss files
gulp.task('watch', function () {
    gulp.watch(['sass/**/*.scss'], ['sass']);
    gulp.watch(['js/**/*.js','!js/**/app.js'], ['scripts']);
    gulp.watch(['pages/**/*.html'], ['ngtemplates']);
});



gulp.task('sass', function() {
    return gulp.src('sass/app.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'iOS 6'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});



// concatenate js scripts
gulp.task('scripts', function() {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'js/main.js',

        // Angular Controllers
        'js/controllers/main.ctrl.js',

        // Angular Services


        // Angular Filters


        // Angular Directives


        // Angular Templates
        'js/template.js'

    ])
    // concatenate and save
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});



// build for distribution
gulp.task('build', ['scripts', 'sass', 'sprite', 'clean'], function() {

    // minify js
    gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    // minify css
    gulp.src(['css/app.css'])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));

    // copy html files for pages
    gulp.src(paths.pages)
        .pipe(gulp.dest('dist/pages'));

    // copy fonts
    gulp.src(paths.fonts)
        .pipe(gulp.dest('dist/fonts'));

    // copy images (but not sprite source files)
    gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});



// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});



gulp.task('server', function() {
    connect.server({
        livereload: true
    });
});



gulp.task('ngtemplates', function() {
    gulp.src('pages/*.html')
        .pipe(html2js('angular.js', {
            adapter: 'angular',
            base: 'pages',
            name: 'myApp',
            useStrict: true
        }))
        .pipe(concat('template.js'))
        .pipe(gulp.dest('js'))
});
