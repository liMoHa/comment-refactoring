import faunadb from 'faunadb';

const secretKey = 'fnAEWh1OJzAAxp6DCscO17KkYU2bHnnmsAQoo9v5';

const serverClient = new faunadb.Client({ secret: secretKey });

export default serverClient;
