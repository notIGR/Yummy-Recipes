DELETE FROM Recipe
DELETE FROM Chef
INSERT INTO Chef (id, name, yoe)
VALUES ("1", "Iguccirod", 9 ), ("2", "Israel", 10)
INSERT INTO Recipe (id, title, type, ingredients, instructions, chefId)
VALUES ("1","Soup","dinner", "{\"value\":[\"onion\",\"garlic\",\"salt\",\"tomato\"]}","hot water, add ingredients, boiled, done.", "1"),
("2","toast","breakfast", "{\"value\":[\"bread\",\"butter\"]}", "put in toaster, turn on toaster, add butter, eat empty calories,done.", "2"),
("3","pbj","lunch", "{\"value\":[\"bread\",\"pb\",\"j\"]}","2 bread slices, One side pb, other side jelly, adhear together, eat.", "1");