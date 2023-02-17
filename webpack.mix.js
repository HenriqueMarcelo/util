const mix = require('laravel-mix');

mix
    .js('src/js/main.js', 'js')
    .sass('src/sass/main.scss', 'css')
    .setPublicPath('./')
    ;
    