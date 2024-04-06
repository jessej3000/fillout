import { FilterClauseType } from "../types/FilterClauseType"
import { filterResponse } from "./filterResponse"

const responseData = {
    responses: [
      {
        submissionId: "ab9959b2-73e8-4994-85b9-56e780b89ce3",
        submissionTime: "2024-02-27T19:37:08.228Z",
        lastUpdatedAt: "2024-02-27T19:37:08.228Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Johnny"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "johnny@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 2
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-02-01"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Nothing much to share yet!"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "f9b8b405-6ca9-41f3-a03f-d5a563dfa0f6",
        submissionTime: "2024-02-27T20:49:43.783Z",
        lastUpdatedAt: "2024-02-27T20:49:43.783Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Jane"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "jane@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Recruiting"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 10
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2021-08-23"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "I'm excited for it!"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "e837e306-d4bc-429e-b540-3c5ec9605eab",
        submissionTime: "2024-02-27T21:11:29.857Z",
        lastUpdatedAt: "2024-02-27T21:11:29.857Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: null
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: null
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Human resources"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: null
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: null
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: null
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "1602a627-7846-4073-8eec-da61a81f7abd",
        submissionTime: "2024-02-27T21:12:23.199Z",
        lastUpdatedAt: "2024-02-27T21:12:23.199Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Bobby"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "bobby@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: null
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 0
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-02-10"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Nope!"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "17e08db1-d685-48a2-b88c-b4486a57cfa7",
        submissionTime: "2024-02-27T21:21:15.587Z",
        lastUpdatedAt: "2024-02-27T21:21:15.587Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Tom"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "tom@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Upper management"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 50
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-02-24"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Nope"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "a3551874-2554-4070-b636-f18a0b1281e4",
        submissionTime: "2024-02-27T21:21:42.823Z",
        lastUpdatedAt: "2024-02-27T21:21:42.823Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Billy"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "billy@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Human resources"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: -5
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "1999-10-10"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Nah"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "fefcd911-4622-4547-a634-23f2c3cd9973",
        submissionTime: "2024-03-04T03:58:51.669Z",
        lastUpdatedAt: "2024-03-04T03:58:51.669Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: null
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "nope@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: null
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: null
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: null
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: null
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "d25c76c4-0ad6-4418-acca-39809b98cb9e",
        submissionTime: "2024-03-04T04:00:02.025Z",
        lastUpdatedAt: "2024-03-04T04:00:02.025Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Duplicate submission"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "billy@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Upper management"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 5
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-02"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Nope"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "fde2a9bd-872e-46f3-b42d-80788171762c",
        submissionTime: "2024-03-04T04:00:19.160Z",
        lastUpdatedAt: "2024-03-04T04:00:19.160Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Admin"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "admin@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 1
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-04-02"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Not really"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "07e5d3d8-94c6-46a1-9793-e1f4c542b0ae",
        submissionTime: "2024-03-04T04:00:42.461Z",
        lastUpdatedAt: "2024-03-04T04:00:42.461Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Dev"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "dev@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 0
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-06-15"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Thank you!"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "4f6c50c9-b25e-4398-95e6-9817bab431df",
        submissionTime: "2024-03-04T05:04:08.102Z",
        lastUpdatedAt: "2024-03-04T05:04:08.102Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Test"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "test@test.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 2.5
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-01"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "500"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "a8f0bf99-f13c-4b13-b98f-89b851a1d702",
        submissionTime: "2024-03-13T13:58:36.902Z",
        lastUpdatedAt: "2024-03-13T13:58:36.902Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Database"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "xousavucrukei-5377@yopmail.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 10
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2000-02-02"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "No"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "4a7fac06-2359-4867-bc4b-e6ae66f9c1f6",
        submissionTime: "2024-03-13T13:59:44.908Z",
        lastUpdatedAt: "2024-03-13T13:59:44.908Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "data"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "xousavucrukei-5377@yopmail.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 24
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2020-03-11"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: null
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "6f92a8c1-1066-421b-a948-12f81dce84ac",
        submissionTime: "2024-03-14T19:43:44.277Z",
        lastUpdatedAt: "2024-03-14T19:43:44.277Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Adnan"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "syedadnandev@gmail.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 5
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-14"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: null
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "4409d176-d890-41b2-bf27-8642602748d8",
        submissionTime: "2024-03-25T16:52:59.456Z",
        lastUpdatedAt: "2024-03-25T16:52:59.456Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Abhinaya"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "r_abhinaya@yahoo.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 2
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-28"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "NA"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "095a0ff9-4cc9-4f65-979d-8fe2ef73595d",
        submissionTime: "2024-03-26T00:06:30.980Z",
        lastUpdatedAt: "2024-03-26T00:06:30.980Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Demo"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "demo@gmail.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 10
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-21"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "Demon"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "a30b684b-da1c-491e-89a0-4e86b22e464a",
        submissionTime: "2024-03-26T00:32:14.825Z",
        lastUpdatedAt: "2024-03-26T00:32:14.825Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "demo 2"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "demo2@gmail.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Engineering"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 50
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-13"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "demo 2"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "ec42f74a-198a-4a8c-a72b-266501d1bce8",
        submissionTime: "2024-03-26T03:05:55.967Z",
        lastUpdatedAt: "2024-03-26T03:05:55.967Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Demo"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "demoRecruiting@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: "Recruiting"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 525
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-25"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: null
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      },
      {
        submissionId: "d9fbf314-8331-4ebf-bb6a-ccbd8c592b16",
        submissionTime: "2024-03-26T03:07:33.815Z",
        lastUpdatedAt: "2024-03-26T03:07:33.815Z",
        questions: [
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: "ShortAnswer",
            value: "Demo"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: "EmailInput",
            value: "demoHR@fillout.com"
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: "MultipleChoice",
            value: null
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: "NumberInput",
            value: 222
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: "DatePicker",
            value: "2024-03-25"
          },
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: "LongAnswer",
            value: "N/a"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      }
    ],
    totalResponses: 19,
    pageCount: 1
}

const filter1: FilterClauseType[] = [
	{
		id: "bE2Bo4cGUv49cjnqZ4UnkW",
		condition: "equals",
		value: "Johnny",
	},
	{
		id: "jB2qDRcXQ8Pjo1kg3jre2J",
		condition: "equals",
		value: "Engineering"
	}
]

const filter2: FilterClauseType[] = [
	{
		id: "bE2Bo4cGUv49cjnqZ4UnkW",
		condition: "equals",
		value: "Johnny",
	},
	{
		id: "jB2qDRcXQ8Pjo1kg3jre2J",
		condition: "equals",
		value: "Spy Manager"
	}
]

describe('filterResponse', () => {
    it('should return filtered responses when all filters validates to true', () => {
        const result = filterResponse(responseData.responses, filter1)
        
        expect(result).toHaveLength(1)
    })
    it('should not return anything if one single filter is false', () => {
        const result = filterResponse(responseData.responses, filter2)
        
        expect(result).toHaveLength(0)
    })
})