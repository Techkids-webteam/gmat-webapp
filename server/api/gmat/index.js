/**
 * Created by Admin on 10/06/2016.
 */
'use strict';

var express = require('express');
var controller = require('./gmat.controller.js');

var router = express.Router();
//get all
router.get('/questions', controller.getQuestions);
router.get('/question_types', controller.getQuestionType);
router.get('/question_packs', controller.getQuestionPacks);
router.get('/types', controller.getTypes);

//get one
router.get('/questions/:id', controller.getQuestionById);
router.get('/question_packs/:id',controller.getQuestionPackById);
router.get('/types/:code', controller.getTypeByCode);

//post
router.post('/post-question', controller.postQuestion);
router.post('/post-question-pack', controller.postQuestionPack);
router.post('/login', controller.login);
//delete
router.post('/delete-question/:id', controller.deleteQuestion);
router.post('/delete-question-pack/:id', controller.deleteQuestionPack);
//edit
router.post('/edit-question/:id', controller.editQuestion);
router.post('/edit-question-pack/:id', controller.editQuestionPack);

module.exports = router;
