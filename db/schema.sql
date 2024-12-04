CREATE TABLE IF NOT EXISTS linie(
    line_ID integer PRIMARY KEY, 
    start varchar(100) NOT NULL, 
    ende varchar(100) NOT NULL,
    hbf boolean NOT NULL
);

create table if not exists haltestelle(
    haltestelle_id integer primary key,
    name varchar(100) not null,
    latitude float,
    longitude float 
);

create table if not exists linie_haltestelle(
    linie_haltestelle_id integer primary key,
    linie_id integer not null,
    haltestelle_id integer not null,
    reihenfolge integer not null,
    zeit TIMESTAMP not null,
    foreign key(linie_id) references linie(linie_id),
    foreign key(haltestelle_id) references haltestelle(haltestelle_id)
);

create table if not exists employee(
    employee_id integer primary key autoincrement,
    name varchar(100) not null unique, 
    password varchar(200) not null,
    admin_key varchar(300)
);




