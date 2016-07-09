'use strict';
import mongoose from 'mongoose';

var QuestionTypeSchema = mongoose.Schema({
  code: String,
  detail: String,
  sub_types: []
}, {
  collection: 'question_type'
});

export default mongoose.model('QuestionType', QuestionTypeSchema);
