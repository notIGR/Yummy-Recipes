DELETE FROM Recipe
DELETE FROM Chef
INSERT INTO Chef (id, name, yoe)
VALUES ("1", "Iguccirod", 9 ), ("2", "Israel", 10)
INSERT INTO Chef (id, name, yoe)
VALUES ("3", "Nandor", 21 ), ("4", "Colin", 13)
INSERT INTO Recipe (id, title, type, ingredients, instructions, chefId)
VALUES ("1","Soup","dinner", "{\"value\":[\"onion\",\"garlic\",\"salt\",\"tomato\"]}","hot water, add ingredients, boiled, done.", "1"),
("2","toast","breakfast", "{\"value\":[\"bread\",\"butter\"]}", "put in toaster, turn on toaster, add butter, eat empty calories,done.", "2"),
("3","pbj","lunch", "{\"value\":[\"bread\",\"pb\",\"j\"]}","2 bread slices, One side pb, other side jelly, adhear together, eat.", "1");
INSERT INTO Recipe (id, title, type, ingredients, instructions, chefId)
VALUES ("4","Chopped Cheese","dinner", "{\"value\":[\"Hero Roll\",\"Ketup\",\"Mayo\",\"ground beef\",\"sazon\",\"tamato\",\"lettus\",\"onion\",\"bell peppers\"]}" ,"Chop up all ingrideinets seperatly. Fully cook meat, then add seasoning and other ingredients.", "3"),
("5","Fried Egg","breakfast", "{\"value\":[\"oil\",\"eggs\",\"salt\",\"Pepper\"]}" , "Oil and heat Pan. Apply egg direcly into pan on high heat till cooked. Serve with toast", "2"),
("6","Fried Rice","lunch", "{\"value\":[\"rice\",\"eggs\",\"Red Pepper flakes\",\"soy sauce\",\"jalapeno peppers\",\"chopped vegitables of choice\",\"onion\",\"seasame oil\"]}" ,"Cook eggs and rice seperatly, add all raw ingredients into pan with oil. Once raw ingredients are cooked add rice and egg and soy sauce.", "4");