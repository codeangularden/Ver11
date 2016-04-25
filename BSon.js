        public bool SaveDocumentBsonArray(string objectToSave, string collectionName)
        {
            var collection = mongoDB.GetCollection<BsonArray>(collectionName);
            //collection.RemoveAll();
            var netxMessageBatch = BsonSerializer.Deserialize<BsonArray>(objectToSave);
            collection.InsertBatch(netxMessageBatch);   
            return true;
            //var collection1 = mongoDB.GetCollection<BsonDocument>(collectionName);
            //MongoCursor<BsonDocument> cursor = collection1.FindAll();
            //List<BsonDocument> entities = cursor.ToList();
            //JavaScriptSerializer Json = new JavaScriptSerializer();
            //string returnDocs = Json.Serialize(entities);

        }

