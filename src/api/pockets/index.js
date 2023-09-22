import PocketBase from "pocketbase";

const PB_URL = "https://jijo-cafe.pockethost.io";

const pb = new PocketBase(PB_URL);

pb.autoCancellation(false);

export default pb;

export async function getProducts(page = 1, perPage = 50, options) {
  return await pb.collection("products").getList(page, perPage, options);
}

export async function getBeverage(page = 1, perPage = 50, options) {
  return await pb.collection("beverage").getList(page, perPage, options);
}

export async function getFoods(page = 1, perPage = 50, options) {
  return await pb.collection("foods").getList(page, perPage, options);
}

export async function getNotices(page = 1, perPage = 50, options) {
  return await pb.collection("notices").getList(page, perPage, options);
}

export async function getEvents(page = 1, perPage = 30, options) {
  return await pb.collection("events").getList(page, perPage, options);
}
