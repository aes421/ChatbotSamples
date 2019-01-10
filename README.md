# Running Hello World Bot
1. Navigate to HelloWorldBot folder.
2. Run `npm install` to get the required dependencies
3. Run `node index.js` to start the bot
4. In the Bot Framework Emulator create a new bot with an endpoint at `http://localhost:3978/api/messages`

# Running Intelligent Bot
1. Navigate to IntelligentBot folder.
2. In LUIS, click "Import new app" and load the included IntelligentBot.json file
3. Train the newly created model
4. In the "Manage" Tab under "Keys and Endpoint" copy the endpoint url
5. Open index.js and paste the endpoint as a string into LUIS_URL
6. Run `npm install` to get the required dependencies
7. Run `node index.js` to start the bot
8. In the Bot Framework Emulator create a new bot with an endpoint at `http://localhost:3978/api/messages`