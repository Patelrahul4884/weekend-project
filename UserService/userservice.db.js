import mongoose from "mongoose";

const ROLE_ENUM = ['admin', 'teacher', 'monitor', 'student'];

const userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: {
                values: ROLE_ENUM,
                message: "User validation failed : User role should be one of 'admin', 'teacher', 'student', 'monitor' !"
            },
            required: [true, "User validation failed : User role should be one of 'admin', 'teacher', 'student', 'monitor' !"]
        },
        name: {
            type: String,
            minlength: [5, "User validation failed : User name should be minimum 5 character long !"],
            maxlength: [20, "User validation failed : User name should be maximum 20 character long !"],
            required: [true, "User validation failed : User name is required !"],
        },
        email: {
            type: String,
            minlength: [6, "User validation failed : User email should be atleast 6 character long!"],
            maxlength: [254, "User validation failed : User email should be atmost 254 character long!"],
            required: [true, "User validation failed : User email is required!"],
        },
        password: {
            type: String,
            minlength: [6, "User validation failed : User password should be atleast 6 character long!"],
            maxlength: [20, "User validation failed : User password should be atmost 20 character long!"],
            required: [true, "User validation failed : User password is required!"],
        },
        roll_no: {
            type: Number,
            default: 0,
            min: [0, "User validation failed : Minimum user roll_no should be 0 !"],
        }
    },
    {
        timestamps: true
    }
)
userSchema.index({email:'text'})
const User = mongoose.model('User', userSchema);

export default User;