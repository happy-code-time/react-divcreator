var gulp = require('gulp');

// images compression 

var imagemin = require('gulp-imagemin');

var imageminJpegRecompress = require('imagemin-jpeg-recompress');

var IMAGES_SOURCE = '_original-images/*.{png,jpg,jpeg,gif}';

var IMAGE_DESCTINATION = 'src/static/images';

gulp.task('images', function () {
    return gulp.src(IMAGES_SOURCE)
        .pipe(imagemin( 
            [
                imagemin.gifsicle(),
                imagemin.jpegtran(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest(IMAGE_DESCTINATION))
});

// default gulp task
gulp.task('default', gulp.series('images'));