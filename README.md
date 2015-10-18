Socialize
===========

# Backend for a social network application

--------------

## ACCEPTING PULL REQUESTS!
I am accepting pull requests implementing one of [these APIs](https://github.com/mattmezza/socialize/issues?utf8=✓&q=is%3Aopen+label%3Ahigh-priority+label%3AAPI).

Check out the full list of APIs to develop here [https://github.com/mattmezza/socialize/issues?utf8=✓&q=is%3Aopen+label%3AAPI](https://github.com/mattmezza/socialize/issues?utf8=✓&q=is%3Aopen+label%3AAPI) and please consider the low/high priority label.

-------------

### Instructions

- open up a browser window and go to [Neo4J download page](http://neo4j.com/download/) to get a copy of the most famous graph db;
- start Neo4J using `~/Downloads/neo4j_dir/bin/neo4j start` command;
- go to `http://localhost:7474` and set up a new password as suggested by Neo4J;
- clone this project with your preferred method;
- change params into `config.yml` accordingly;
- run `php -r "readfile('https://getcomposer.org/installer');" | php` from the project root dir;
- run `php composer.phar install` from the same dir;
- run `php -S 0.0.0.0:8000 -t ~/project_dir` to start a webserver with document root set into project dir;
- go to `http://localhost:8000/index.php/` to see the app running.
