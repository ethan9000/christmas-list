const fetchProductData = async (url) => {
  const urlMetadata = require("url-metadata");
  try {
    const metadata = await urlMetadata(url);
    console.log(metadata);
    return metadata;
  } catch (err) {
    console.log(err);
  }
};

export default fetchProductData;
