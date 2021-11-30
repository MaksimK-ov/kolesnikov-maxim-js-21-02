const gulp = require('gulp')
const browserify = require('browserify')
const tsify = require('tsify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')
const fancyLog = require('fancy-log')
const browserSync = require('browser-sync').create()
const path = {
    pages: ["./src/*.html", "./src/*.css"]
}

gulp.task('copy-file', () => gulp.src(path.pages)
    .pipe(gulp.dest('./dist'))
)

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000,
    })
    gulp.watch(['./dist/*']).on('change', browserSync.reload)
    gulp.watch(['./src/*.html', './src/*.css']).on('change', gulp.series('copy-file'))
})
const whatchifyBrowserify = watchify(browserify(
    {
        basedir: '.',
        entries: ["./src/main.ts"],
        cache: {},
        debug: true,
        packageCache: {}
    })
    .plugin(tsify))

const bundle = () => whatchifyBrowserify
    .bundle()
    .on('error', fancyLog)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'))

gulp.task('default', gulp.series(gulp.parallel('copy-file'), bundle))
whatchifyBrowserify.on('update', bundle)
whatchifyBrowserify.on('log', fancyLog)
