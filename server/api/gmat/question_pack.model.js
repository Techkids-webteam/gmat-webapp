'use strict';
import mongoose from 'mongoose';

var QuestionPackSchema = mongoose.Schema({
    available_time: String,
    question_ids: [],
    level : String
  },
  {
    collection : 'question_pack'
  }
);

export default mongoose.model('QuestionPack', QuestionPackSchema);
