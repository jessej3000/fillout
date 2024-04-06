export interface IResponse {
    submissionId: string
    submissionTime: string
    lastUpdatedAt: string
    questions: IQuestion[]
    calculations: any[]
    urlParameters: any[]
    quiz: Quiz
    documents: any[]
}

export interface IQuestion {
    id: string
    name: string
    type: string
    value: any
}
  
interface Quiz {}