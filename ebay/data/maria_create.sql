use ebay;
drop table if exists parts;
create table parts (id int auto_increment primary key,operator varchar (8),asin varchar (20),dup tinyint (1),used tinyint (1),date_mod date);
quit
