# Fall2016Swe573cant
See docs folder for Project Management Exceprts, Software Requirements Specification and Design Specification Documnet

[Piazza Link](https://piazza.com/boun.edu.tr/fall2016/swe573/home)

# Checkout Introduction Video

[![Click to open youtube](https://j.gifs.com/oYn6mX.gif)](https://www.youtube.com/watch?v=wqgXcJUfd_g)

# Installation Prerequisites

Install mysql-server mysql-client

apt-get update
apt-get upgrade
apt-get install mysql-server
apt-get install mysql-client

//good tools to fiddle with mysql
apt-get install mysql-utilities
apt-get install mysql-workbench

//mysql-python is needed by the SQLAlchemy. mysql_config cli tool is needed by mysql-python so that it can read the socket location of mysql db connection.

//install mysql-python from pip instead of conda because conda's version does not use the mysql_config

//otherwise you would have to find where the socket is yourself and concatanate it using the: '?unix_socket=/usr/local/mysql5/mysqld.sock' syntax to your connection string.

sudo apt-get install libmysqlclient-dev

## Frontend App Preperation

[Install NodeJS Following the Docs](https://nodejs.org/en/download/package-manager/)

!!Make sure to give read write exection rights to the globally installed packages folder.
 
## Backend App Preperation

[Install Anaconda Following the Docs](https://docs.continuum.io/anaconda/install)

