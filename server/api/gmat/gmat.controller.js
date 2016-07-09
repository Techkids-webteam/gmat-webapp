/**
 * Created by Admin on 10/06/2016.
 */

'use strict';
import Question from './question.model';
import QuestionPack from './question_pack.model'
import User from './user.model'
import QuestionType from './question_type.model'

//Question

export function getQuestions(req, res) {
    Question.find(function (err, questions) {
        if(err){
            res.send(404);
        }else{
            res.json({questions});
        }
    });
}

export function getQuestionType(req,res){
    var question_type = []
    Question.find(function(err, questions){
        if(err){
            res.send(404);
        }else{
            for(var i = 0; i < questions.length; i++){
                question_type.push(questions[i].type)
            }
            res.json({question_type});
        }
    });
}

export function getQuestionById(req, res) {
  Question.findById(req.params.id,function (err, data) {
      if(err){
          res.send(404);
      }else{
          res.json({data})
      }
  })
}


export function postQuestion(req, res) {
    var post = {
        type : req.body.type,
        sub_type: req.body.sub_type,
        stimulus: req.body.stimulus,
        stem: req.body.stem,
        answer_choices: req.body.answer_choices,
        right_answer: req.body.right_answer
    };
    Question.create(post, function(err,data) {
        if(err){
            res.send(404);
        }else{
            return res.json({data});
        }
    })
}

export function deleteQuestion(req, res) {
    Question.findById(req.params.id, function (err, product) {
        if(err){
            res.send(404);
        }else{
            product.remove(function (err, product) {
                res.json({product});
            })
        }
    })
}

export function editQuestion(req, res) {
    Question.findById(req.params.id, function (err,product) {
        if(err){
            res.send(404);
        }else{
            product.type = req.body.type;
            product.sub_type = req.body.sub_type;
            product.stimulus = req.body.stimulus;
            product.stem =  req.body.stem;
            product.answer_choices = req.body.answer_choices;
            product.right_answer = req.body.right_answer;
            product.save(function(err,product){
                res.json({product})
            });
        }
    })
}

// Question Pack

export function getQuestionPacks(req, res) {
    QuestionPack.find(function (err, question_packs) {
        if(err){
            res.send(404);
        }else{
            res.json({question_packs});
        }
    });
}

export function getQuestionPackById(req, res) {
    QuestionPack.findById(req.params.id,function (err, data) {
        if(err){
            res.send(404);
        }else{
            res.json({data});
        }
    })
}

export function postQuestionPack(req, res) {
    var post = {
        available_time: req.body.available_time,
        question_ids: req.body.question_ids,
        level : req.body.level
    };
    QuestionPack.create(post, function(err,data) {
        if(err){
            res.send(404);
        }else{
            return res.json({data});
        }
  })
}

export function deleteQuestionPack(req, res) {
    QuestionPack.findById(req.params.id, function (err, product) {
        if(err){
            res.send(404);
        }else{
            product.remove(function (err, product) {
                res.json({product});
            });
        }
    })
}

export function editQuestionPack(req, res) {
    QuestionPack.findById(req.params.id, function (err,product) {
        if(err){
            res.send(404);
        }else{
            product.available_time = req.body.available_time;
            product.question_ids = req.body.question_ids;
            product.level = req.body.level;
            product.save(function(err,product){
                res.json({product})
            });
        }
    })
}

export function login(req, res){
    var isLogin= false;
    User.findOne( {user_name:req.body.user_name},function (err, data) {
        if(data.password == req.body.password){
            isLogin= true;
        }
    }).then(function(){
        if(isLogin){
            res.json({
                login_message: "Login Success",
                login_status: 1
            });
        } else {
            res.json({
                login_message: "Login Failed",
                login_status: 0
            });
        }
    });
}

export function getTypes(req, res){
    QuestionType.find(function(err, question_types){
        if(err){
            res.send(404);
        }else{
            res.json({question_types});
        }
    })
}

export function getTypeByCode(req, res){
    QuestionType.findOne({code:req.params.code}, function(err, question_type){
        if(err){
            res.send(404);
        }else{
            res.json(question_type);
        }
    })
}
