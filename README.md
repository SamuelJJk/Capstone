READ ME

Overview:

For this project, I want to create a choose-your-adventure game where the user can pick their class, character model, and name. Once inside the game you can go on adventures and equip items found through enemy drops or buy items through the store.

Backend:

Inside the backend, I have 3 schemas. The first is a character model, for a user to create their character, next is the item schema, and enemy schema. For my server.js I have all my routes and Crud setup.

Frontend: 

I have 2 pages in my front end, a Character creation page, and a Game page. On my Creation page, the user can pick a name, class, and character model/image for their character. Once they’re done, the user has to hit enter to start the game which will navigate them to the game page. On the game page, as of now, the user has 2 options go to the store or adventure. When either button is clicked the screen component rerenders and displays the store or adventure component.    
