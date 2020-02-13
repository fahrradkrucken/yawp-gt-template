const gulp = require('gulp'),
    imagemin = require('gulp-imagemin')
;

const tasks = {
    // --
    // -- IMG
    // --
    img() {
        return gulp.src('./app/modules/static/img/**')
            .pipe(imagemin([
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.mozjpeg({progressive: true}),
                    imagemin.optipng({optimizationLevel: 5}),
                    imagemin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false},
                            {removeXMLProcInst: false},
                        ]
                    })
                ],
                {
                    verbose: true
                })
            )
            .pipe(gulp.dest('./static/img/'));
    }
};

gulp.task('img', gulp.series(tasks.img));