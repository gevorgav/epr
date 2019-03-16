/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class QuestionAnswerModel {
  private _id: number;
  private _question: string;
  private _answer: string;

  constructor(id: number, question: string, answer: string) {
    this._id = id;
    this._question = question;
    this._answer = answer;
  }

  get id(): number {
    return this._id;
  }

  get question(): string {
    return this._question;
  }

  get answer(): string {
    return this._answer;
  }
}
