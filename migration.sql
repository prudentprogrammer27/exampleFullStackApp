DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS warehouses;

create table warehouses (
	id SERIAL PRIMARY KEY,
	size VARCHAR(50),
	address VARCHAR(50)
);


insert into warehouses (id, size, address) values (1, 'S', '4054 Trailsway Place');
insert into warehouses (id, size, address) values (2, '2XL', '1431 Petterle Pass');
insert into warehouses (id, size, address) values (3, 'L', '9 Derek Plaza');
insert into warehouses (id, size, address) values (4, 'M', '3811 Algoma Way');
insert into warehouses (id, size, address) values (5, 'XS', '33620 Weeping Birch Junction');
insert into warehouses (id, size, address) values (6, '3XL', '5 Goodland Road');

create table items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	price VARCHAR(50),
	warehouse_id INT REFERENCES warehouses(id)
);


insert into items (id, name, price, warehouse_id) values (1, 'Basil - Pesto Sauce', 'Yuan Renminbi', 4);
insert into items (id, name, price, warehouse_id) values (2, 'Coffee Cup 16oz Foam', 'Euro', 3);
insert into items (id, name, price, warehouse_id) values (3, 'Eggroll', 'Rial', 1);
insert into items (id, name, price, warehouse_id) values (4, 'Appetizer - Lobster Phyllo Roll', 'Ruble', 5);
insert into items (id, name, price, warehouse_id) values (5, 'Cheese - Gouda Smoked', 'Yuan Renminbi', 5);
insert into items (id, name, price, warehouse_id) values (6, 'Boogies', 'Euro', 5);
insert into items (id, name, price, warehouse_id) values (7, 'Capers - Pickled', 'Yuan Renminbi', 1);
insert into items (id, name, price, warehouse_id) values (8, 'Leeks - Baby, White', 'Manat', 5);
insert into items (id, name, price, warehouse_id) values (9, 'Bread Base - Goodhearth', 'Lek', 3);
insert into items (id, name, price, warehouse_id) values (10, 'Brandy - Orange, Mc Guiness', 'Shekel', 5);