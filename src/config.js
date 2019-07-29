const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-b0mzhb4lrvmc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3oywbay6x8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_x5pDFfqTu",
    APP_CLIENT_ID: "40fsho63o41vs3rjdlmic9o1kv",
    IDENTITY_POOL_ID: "us-east-1:942a271d-cf97-40ee-bf62-209b7703d388"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-geqmab686ill"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5tfxe0op93.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_9sRv3udsb",
    APP_CLIENT_ID: "25d2b3nppc7um6eu8ohkqmm28p",
    IDENTITY_POOL_ID: "us-east-1:2fffb0b9-a7cc-4200-975d-ef942fc7f5e4"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
