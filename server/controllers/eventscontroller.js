const express = require("express");
const Events = require("./../models/eventsmodel");

exports.getallevents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      status: "sucsess",
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.Createevents = async (req, res) => {
  const {
    Eventname,
    shortdescription,
    description,
    startDate,
    Eventregion,
    Tag,
    location,
  } = req.body;

  try {
    const newEvent = new Events({
      Eventname,
      shortdescription,
      description,
      startDate,
      Eventregion,
      Tag,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json({
      status: "success",
      data: { savedEvent },
    });
  } catch (error) {
    console.error("Error adding events:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to create event",
      error: error.message || "Internal Server Error",
    });
  }
};
