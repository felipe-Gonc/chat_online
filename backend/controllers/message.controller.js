import Conversation from "../models/conversation.models.js";
import Message from "../models/message.models.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    //await newMessage.save();
    //await conversation.save();

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error em sendMessage controller: ", error.message);
    res.status(500).json({ error: "Error interno no server" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToCharId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToCharId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const message = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("error em getMessages controller: ", error.message);
    res.status(500).json({ error: "Error interno no server" });
  }
};
