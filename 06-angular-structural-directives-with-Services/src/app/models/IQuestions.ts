export interface IQuestions {
        questionId: string,
        question: string,
        answers: [
          {
            answer: string,
            followUp: string,
          },
          {
            answer: string,
            followUp:string,
          },
        ],
        points:string,
        questionType: string,
        subCategory:string,
        category:string,
        status: boolean,
}