const gulp = ('gulp');
const browserSync = ('browser-sync').create();

gulp.task('serve', function (){
browserSync.init({
            server: {
            baseDir: './'
            },
            port: 3000
});
gulp.watch('./**/*').on('change', browserSync.reload)
})
