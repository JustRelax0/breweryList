# breweryList

Here are the steps to run this application on your local Unix machine:

1. Obtain a Google API key via the instructions in this link: https://developers.google.com/maps/documentation/javascript/get-api-key

2. Ensure that you have internet connection, open a terminal window, and navigate to wherever you cloned the breweryList repo, then navigate into breweryList

3. Run command 'touch key.js' 

4. Use Vim to add the following lines to the newly-created key.js file:

const key = 'Paste your Google API key within these quotes';

export default key;

5. Navigate back into root directory and run command 'npm install'

6. Run command 'npm start & npm run build'

7. To open the webpage view, you can either type 'http://127.0.0.1:3000' into your browser's top search bar, or run the terminal command 'live-server'

8. If you have chosen to run command 'live-server', wait for your browser to open the new page and click 'client', then click 'main'
