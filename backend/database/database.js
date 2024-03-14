import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const url = "mongodb://localhost:27017/midterm";

    try {
        const connection = await mongoose.connect(url,
            {
                useUnifiedTopology: true,
            });
            console.log("Database has been connected successfully");
    } catch (error) {
        console.log("Failed to connect to database:", error);
    }
};

export default connectDB;
