import faunadb from 'faunadb';

const secretKey = 'fnAEWhydsJAAxrzqYQicQ7lyabik0oIa8Uwt1_rM';

const serverClient = new faunadb.Client({ secret: secretKey });

export default serverClient;
