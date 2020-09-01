// simple function to collections id's and docs
export const collectIdsAndDocs = doc => {
  return { id: doc.id, ...doc.data() };
};
