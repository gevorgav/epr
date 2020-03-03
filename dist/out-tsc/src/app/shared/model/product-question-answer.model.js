/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
var QuestionAnswerModel = /** @class */ (function () {
    function QuestionAnswerModel(id, question, answer) {
        this._id = id;
        this._question = question;
        this._answer = answer;
    }
    Object.defineProperty(QuestionAnswerModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionAnswerModel.prototype, "question", {
        get: function () {
            return this._question;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionAnswerModel.prototype, "answer", {
        get: function () {
            return this._answer;
        },
        enumerable: true,
        configurable: true
    });
    return QuestionAnswerModel;
}());
export { QuestionAnswerModel };
//# sourceMappingURL=product-question-answer.model.js.map