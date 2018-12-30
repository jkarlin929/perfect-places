const express = require('express');

const { Place } = require('../models');

const placeRouter = express.Router();

placeRouter.use((req, res, next) => {
  console.log('Hello Friend');
  next();
});

placeRouter.get('/', async (req, res) => {
  try {
    const places = await Place.findAll();
    res.json(places);
  } catch(e) {
    console.error(e);
    res.status(404).json({message: e.message});
  };
});

placeRouter.get('/:id', async(req, res) => {
  try {
    const places = await Place.findByPk(req.params.id);
    res.json(places);
  } catch(e) {
    console.error(e);
    res.status(404).json({message: e.message});
  }
});

placeRouter.post('/', async(req, res) => {
  try {
    const places = await Place.create(req.body);
    res.json(places);
  } catch(e) {
    res.status(404).json({message: e.message})
  };
});

placeRouter.put('/:id', async(req, res) => {
  try {
    const places = await Place.update({
      location: req.body.location,
      description: req.body.description
    },
    {
      returning: true,
      where: {
        id: req.params.id
        }
      })
      .then(place => res.json(place)
    )} catch(e) {
    res.status(404).json({message: e.message})
  };
});

placeRouter.delete('/:id', async(req, res) => {
  try {
    const places = await Place.findByPk(req.params.id);
    places.destroy();
    res.json({message: `Place with id ${req.params.id} destroyed.`});
  } catch(e) {
    console.error(e);
    res.status(404).json({message: e.message});
  };
});

module.exports = {
  placeRouter
};
