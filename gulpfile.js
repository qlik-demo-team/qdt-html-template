var gulp = require('gulp');
var exec = require('child_process').exec;
const liveServer = require("live-server");
const fs = require('fs');

gulp.task('default', ['copy-qdt','server']);

gulp.task('watch', function() {
    gulp.watch(['*.html','*.css','*.js'], []);
    console.log('Waiting for changes...')
})
gulp.task('copy-qdt', function() {    
    return gulp.src([
        'node_modules/qdt-components/dist/*.*'
    ])
    .pipe(gulp.dest('./js/'));
})
gulp.task('server', function() {
    var params = {
        port: 3000, // Set the server port. Defaults to 8080. 
        host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. usrad-jvs02.qliktech.com
        root: "./", // Set root directory that's being served. Defaults to cwd. 
        open: true, // When false, it won't load your browser by default. 
        verbose: true,
        ignore: 'less, node_modules', // comma-separated string for paths to ignore 
        file: "index.html", // When set, serve this file for every 404 (useful for single-page applications) 
        wait: 0, // Waits for all changes, before reloading. Defaults to 0 sec. 
        https: {
            key: fs.readFileSync('C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\localhost\\server_key.pem'),
            cert: fs.readFileSync('C:\\ProgramData\\Qlik\\Sense\\Repository\\Exported Certificates\\localhost\\server.pem')
        },
        logLevel: 2, // 0 = errors only, 1 = some, 2 = lots 
        middleware: [function(req, res, next) { next(); }], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack 
        watch: "*.*"
    };
    liveServer.start(params);
})
gulp.task('aws', function() {
    exec('aws s3 sync . s3://qlikmarketing-webapps/qdt-components/plain-html --cache-control "max-age=3600" --exclude "node_modules/*" --exclude ".git/*"', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        exec(`aws cloudfront create-invalidation --distribution-id E1TXZE4I5DIDHP --paths /qdt-components/plain-html/*`, (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            // cb(err);
        });
    });
})