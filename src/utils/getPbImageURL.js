export const getPbImageURL = (item, fileName = 'photo') =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[fileName]
  }`;

//https://jijo-cafe.pockethost.io/_/#/collections?collectionId=f1bi1c2yw07q7q7&filter=&sort=%2BfaqTitle
