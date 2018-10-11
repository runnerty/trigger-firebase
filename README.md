#Firebase Realtime Database Trigger for [Runnerty]:

With this trigger you can stream Firebase Realtime Database documents. It gets fired when a new record is stored in the document

### Configuration sample:

```json
{
  "id":"firebase_default",
  "type":"@runnerty-trigger-firebase",
  "serviceAccount": "/path-to-your-firebase-adminsdk.json",
  "databaseURL": "https://your-firebase-project.firebaseio.com"
}
```

### Plan sample to Stream a hashtag
```json
{
  "id":"firebase_default",
  "document":"/example/"
}
```

### Chain input
This trigger sends to the input of the chain all the data that is recorded in the database document.

[Runnerty]: http://www.runnerty.io