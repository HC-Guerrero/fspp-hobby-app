\c dbqfb9cp8lsavb

DROP TABLE IF EXISTS vidya;

CREATE TABLE vidya (id SERIAL PRIMARY KEY, editing_rights BOOLEAN,  name TEXT NOT NULL, type TEXT, price INT, language TEXT, 
Store_Link TEXT, publisher TEXT, developer TEXT, platform TEXT, 
thumbnail TEXT, screenshot1  TEXT, screenshot2 TEXT, screenshot3 TEXT, video TEXT, description TEXT); 