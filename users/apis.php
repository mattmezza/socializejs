<?php

$app->get('/users', function () use($db, $config) {
    echo "Users related APIs";
});