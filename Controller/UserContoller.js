const express = require("express");
const userModel = require("../Model/UserModel");

//get all users
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "gotten all users",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all users",
    });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNum } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
    });
    res.status(201).json({
      message: "created a new user",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create  user",
    });
  }
}; // create a new user
