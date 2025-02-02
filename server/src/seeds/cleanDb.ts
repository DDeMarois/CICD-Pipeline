import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let collections = await models[modelName].db.listCollections(); // Removed argument & toArray()
    let modelExists = collections.some((collection: { name: string }) => collection.name === collectionName);

    if (modelExists) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
