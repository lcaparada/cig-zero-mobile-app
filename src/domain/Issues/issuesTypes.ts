export type CreateIssue = {
  id?: string;
  issueTitle: string;
  issueDescription: string;
  issuePhotos: string[];
  userId: string;
};

export type UploadIssuePhoto = {
  filePath: string;
  base64: string;
  contentType: string;
};
