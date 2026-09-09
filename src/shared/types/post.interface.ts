export interface ICreatePostDto {
  title: string
  dashBoardId: string
  description: string | undefined
}

export interface IUploadPostTextDto {
  title: string
  dashBoardId: string
  description: string | undefined
  imageURL: string | undefined
}


