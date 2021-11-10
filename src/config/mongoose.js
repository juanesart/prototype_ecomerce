import { connect } from 'mongoose';
import { MONGODB_URL } from '../config';

(async () => {
    const db = await connect(MONGODB_URL);
    console.log(db.connection.name);
})();