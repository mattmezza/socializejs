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

include("account/apis.php");
include("feeds/apis.php");
include("follow/apis.php");
include("friends/apis.php");
include("posts/apis.php");
include("profile/apis.php");
include("users/apis.php");

$app->get('/', function() use($db, $config) {
	echo "Socialize... using neo4j version ";
	echo $db->getNeo4jVersion();
	echo " on ".$config['db']['proto']."://".$config['db']['user'].":".$config['db']['pass']."@".$config['db']['host'].":".$config['db']['port'];
});
$app->run();