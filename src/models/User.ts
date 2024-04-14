import { Schema, model, models, Document } from "mongoose"

type User = Document & {
    email: string
    password: string
    createdAt: Date
}

const UserSchema: Schema<User> = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
})

const UserModel = models.User || model<User>("User", UserSchema)

export default UserModel
