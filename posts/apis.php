<?php

$app->delete('/posts/:id_post/comments/:id_comment/replies/:id_reply/like', function ($id_post, $id_comment, $id_reply) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post/comments/:id_comment/replies/:id_reply/like', function ($id_post, $id_comment, $id_reply) use($db, $config) {
    echo "Not yet implemented.";
});

$app->delete('/posts/:id_post/comments/:id_comment/like', function ($id_post, $id_comment) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post/comments/:id_comment/like', function ($id_post, $id_comment) use($db, $config) {
    echo "Not yet implemented.";
});

$app->delete('/posts/:id_post/comments/:id_comment/replies/:id_reply', function ($id_post, $id_comment, $id_reply) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post/comments/:id_comment/replies/:id_reply', function ($id_post, $id_comment, $id_reply) use($db, $config) {
    echo "Not yet implemented.";
});

$app->post('/posts/:id_post/comments/:id_comment/reply', function ($id_post, $id_comment) use($db, $config) {
    echo "Not yet implemented.";
});

$app->get('/posts/:id_post/likes', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->delete('/posts/:id_post/like', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post/like', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->get('/posts/:id_post/comments/most_liked/:max', function ($id_post, $max) use($db, $config) {
    echo "Not yet implemented.";
});

$app->get('/posts/:id_post/comments/:per_page/:page', function ($id_post, $per_page, $page) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post/comments/:id_comment', function ($id_post, $id_comment) use($db, $config) {
    echo "Not yet implemented.";
});

$app->delete('/posts/:id_post/comments/:id_comment', function ($id_post, $id_comment) use($db, $config) {
    echo "Not yet implemented.";
});

$app->post('/posts/:id_post/comments/new', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->delete('/posts/:id_post', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->put('/posts/:id_post', function ($id_post) use($db, $config) {
    echo "Not yet implemented.";
});

$app->post('/posts/new', function () use($db, $config) {
    echo "Not yet implemented.";
});