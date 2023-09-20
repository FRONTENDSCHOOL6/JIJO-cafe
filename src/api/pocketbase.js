import PocketBase from 'pocketbase';

const pb = new PocketBase('https://jijo-cafe.pockethost.io/');
pb.autoCancellation(false);

export default pb;
