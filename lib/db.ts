import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    const connectState = mongoose.connection.readyState;

    if (connectState === 1) {
        console.log('already connected')
        return;

    }
    if (connectState === 2) {
        console.log('connecting....')
        return;

    }
       
    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: 'restapis-nextjs',
            bufferCommands: true,

        });
        console.log('connected');
    } catch (err: any) {
        console.log("Error: ", err);
        throw new Error("Error: ", err);
        
    }
}; 


export default connect;

