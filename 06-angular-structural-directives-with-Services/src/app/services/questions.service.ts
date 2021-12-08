import { Injectable } from '@angular/core';
import { IQuestions } from '../models/IQuestions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  public questions:any[] = [
    {
      QuestionID: 1,
      Category: "Surgical Details",
      Question: "Surgery Mode",
      QuestionOptionsType: "single",
      questionoptions: [
        {
          QuestionID: 1,
          QuestionOptionId: 11,
          QuestionOption: "Elective", ///
          QuestionSubOptionsType: "Single",
          questionsuboptions: [
            {
              QuestionID: 1,
              QuestionOptionId: 11,
              QuestionsSubOptionId: 111,
              QuestionsSubOption: "Cancer",
              OptionsType: "multiple",
              questionsubsuboption: [
                {
                  QuestionID: 1,
                  QuestionOptionId: 11,
                  QuestionsSubOptionId: 111,
                  QuestionsSubSubOptionId: 1111,
                  QuestionsSubSubOption: "Curative"
                },
                {
                  QuestionID: 1,
                  QuestionOptionId: 11,
                  QuestionsSubOptionId: 111,
                  QuestionsSubSubOptionId: 1112,
                  QuestionsSubSubOption: "Debulking"
                },
                {
                  QuestionID: 1,
                  QuestionOptionId: 11,
                  QuestionsSubOptionId: 111,
                  QuestionsSubSubOptionId: 1113,
                  QuestionsSubSubOption: "Diagnostic"
                },
                {
                  QuestionID: 1,
                  QuestionOptionId: 11,
                  QuestionsSubOptionId: 111,
                  QuestionsSubSubOptionId: 1114,
                  QuestionsSubSubOption: "Staging"
                }
              ]
            },
            {
              QuestionID: 1,
              QuestionOptionId: 12,
              QuestionsSubOptionId: 112,
              QuestionsSubOption: "Non-Cancer",
              OptionsType: "None",
              questionsubsuboption: [
                
              ]
            }
          ]
        },
        {
          QuestionID: 1,
          QuestionOptionId: 12,
          QuestionOption: "Emergency",
          QuestionSubOptionsType: "None"
        }
      ],
      
    },
    {
      QuestionID: 2,
      Category: 'Surgical Details',
      Question: 'Duration',
      QuestionType: 'single',
      questionoptions: [
        {
          QuestionID: 2,
          QuestionOptionId: 2.1,
          QuestionOption: 'Less than 1 hour',
          QuestionOptionType: 'Less than 1 hour',
        },
        {
          QuestionID: 2,
          QuestionOptionId: 2.1,
          QuestionOption: '1-2 hours',
          QuestionOptionType: '1-2 hours',
        },
        {
          QuestionID: 2,
          QuestionOptionId: 1.1,
          QuestionOption: '2-4 hours',
          QuestionOptionType: '2-4 hours',
        },
        {
          QuestionID: 2,
          QuestionOptionId: 1.2,
          QuestionOption: 'More than 4 hours',
          QuestionOptionType: 'More than 4 hours ',
        },
    ],
    },
    {
      QuestionID: 3,
      Category: 'Surgical Details',
      Question: 'Incision Site',
      QuestionType: 'multiple',
      questionoptions: [
        {
          QuestionID: 3,
          QuestionOptionId: 2.1,
          QuestionOption: 'Upper Abdominal',
          QuestionOptionType: 'Upper Abdominal',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 2.1,
          QuestionOption: 'Lower Abdominal',
          QuestionOptionType: 'Lower Abdominal',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 1.1,
          QuestionOption: 'Intrathoracic',
          QuestionOptionType: 'Intrathoracic',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 1.2,
          QuestionOption: 'Peripheral(limbs)',
          QuestionOptionType: 'Peripheral(limbs)',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 2.1,
          QuestionOption: 'Head and Neck',
          QuestionOptionType: 'Head and Neck',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 2.1,
          QuestionOption: 'Skull',
          QuestionOptionType: 'Skull',
        },
        {
          QuestionID: 3,
          QuestionOptionId: 1.1,
          QuestionOption: 'Laparoscopic(keyhole)',
          QuestionOptionType: 'Laparoscopic(keyhole)',
        },
      ]
    }
    
  ]
  

  public duration:any[] =[
    {
      _id: "60ec229fa04a35555e90ds",
      questionId: "Duration_A",
      question: "Duration",
      questions: [
        {
          answer: "Less than 1 hour",
        },
        {
          answer: "1-2 hours",
        },
        {
          answer: "2-4 hours",
        },
        {
          answer: "More than 4 hours",
        },
      ],
    },
  ];

  public incision:any[] = [
    {
      _id: "60ec229fa04a35555e90ds",
      questionId: "Incition_A",
      question: "Incition",
      questions: [
        {
          answer: "Upper Abdominal",
        },
        {
          answer: "Lower Abdominal",
        },
        {
          answer: "Intrathoracic",
        },
        {
          answer: "Peripheral(limbs)",
        },
        {
          answer: "Head and Neck",
        },
        {
          answer: "Skull",
        },
        {
          answer: "Laparoscopic(keyhole)",
        },
      ],
    },
  ];
  

  constructor() { }

  public fetchAllQuestions(){
      return this.questions
  }
  public fetchDuration(){
    return this.duration
}
public fetchIncision(){
  return this.incision
}


}
