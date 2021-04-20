/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class QuestionAnswerModel {
    constructor(id, question, answer) {
        this._id = id;
        this._question = question;
        this._answer = answer;
    }
    get id() {
        return this._id;
    }
    get question() {
        return this._question;
    }
    get answer() {
        return this._answer;
    }
}
//# sourceMappingURL=product-question-answer.model.js.map