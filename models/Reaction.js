const { Schema, Types } = require('mongoose');
const timestamp = require("../utils/timestamp");
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: time => timestamp(time)
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;