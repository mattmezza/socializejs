<?php

$app->get('/feeds/friends/:per_page/:page', function ($per_page, $page) use($db, $config) {
    echo "Users related APIs";
});

$app->get('/feeds/following/:per_page/:page', function ($per_page, $page) use($db, $config) {
    echo "Users related APIs";
});

$app->get('/feeds/:per_page/:page', function ($per_page, $page) use($db, $config) {
    echo "Users related APIs";
});