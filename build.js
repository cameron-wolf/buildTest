var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('init', function(){
	git.init(function (err) {
		if (err) throw err;
	});
});

gulp.task('pull',function(){
	git.checkout('development', function (err) {
		if (err) throw err;
	});
});



gulp.task('pullVersions',function(){
	gulp.src().pipe(gulp.dest());
});


gulp.task('pullVersionsDep',['dependencies'],function(){
	
});