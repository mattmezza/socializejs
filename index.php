<?php
require 'vendor/autoload.php';

use Neoxygen\NeoClient\ClientBuilder,
	Symfony\Component\Yaml\Yaml;

$env = "development";
$config_all = Yaml::parse(file_get_contents(__DIR__.'/config.yml'));
$config = $config_all{$env};

$db_config=$config['db'];
$db = ClientBuilder::create()
    ->addConnection('default',$db_config['proto'],$db_config['host'],(int) $db_config['port'], true, $db_config['user'], $db_config['pass'])
    ->build();

$app = new \Slim\Slim();
$app->get('/hello/:name', function ($name) {
    echo "Hello, " . $name;
});
$app->get('/', function() use($db) {
	echo "Hello world";
	echo $db->getNeo4jVersion();
});
$app->run();