// // ProductSnippet.js
// // app/components/ProductSnippet.jsx

// import React from "react";
// import "server-only";
// import { fetchProductInfo } from "@/utils/fetchProductInfo";
// export default async function ProductSnippet({ url }) {
//   const productInfo = await fetchProductInfo(url);

//   if (!productInfo) {
//     return <div>Error: Product information not found.</div>;
//   }

//   return (
//     <div className="product-snippet">
//       <h2>{productInfo.title}</h2>
//       {productInfo.image && (
//         <img src={productInfo.image} alt={productInfo.title} />
//       )}
//       {productInfo.price && <p>Price: {productInfo.price}</p>}
//     </div>
//   );
// }
