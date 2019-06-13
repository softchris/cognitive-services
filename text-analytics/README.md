# README

1. Create a Cognitive services account.
Go to the Azure Portal and enter `Cognitive Services`. Once you have an account, go to the resource and click `Keys` tab and use either `KEY 1` or `KEY 2`.

2. Install all dependencies
Make sure you have installed Node.js and run the command `npm install` in the root

3. Run the API
Run the api by calling `npm start`

You need to create and `.env` file in the root looking like this:

```
BASE_URL=https://[replace with the region you created your account in].api.cognitive.microsoft.com
API_KEY=[add your key here]
```

an example might look like:

```
BASE_URL=https://westeurope.api.cognitive.microsoft.com
API_KEY=my-key
```

