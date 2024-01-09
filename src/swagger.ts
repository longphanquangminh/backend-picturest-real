export default {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Capstone API",
    description: "API for Capstone project",
  },
  basePath: "/api/v1",
  tags: [
    { name: "Authentication", description: "Endpoints related to user authentication" },
    { name: "Users", description: "Endpoints related to user management" },
    { name: "Pictures", description: "Endpoints related to pictures" },
    { name: "Comments", description: "Endpoints related to comments on pictures" },
    { name: "Saving", description: "Endpoints related to saving" },
  ],
  paths: {
    "/register": {
      post: {
        summary: "Register a new user",
        consumes: ["application/json"],
        parameters: [
          {
            name: "body",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                hoTen: { type: "string" },
                tuoi: { type: "number" },
                matKhau: { type: "string" },
              },
              required: ["email", "hoTen", "tuoi", "matKhau"],
            },
          },
        ],
        responses: {},
        tags: ["Authentication"],
      },
    },
    "/login": {
      post: {
        summary: "User login",
        consumes: ["application/json"],
        parameters: [
          {
            name: "body",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                matKhau: { type: "string" },
              },
              required: ["email", "matKhau"],
            },
          },
        ],
        responses: {},
        tags: ["Authentication"],
      },
    },
    "/pictures": {
      get: {
        summary: "Get all pictures",
        responses: {},
        tags: ["Pictures"],
      },
      post: {
        summary: "Upload a picture",
        consumes: ["multipart/form-data"],
        parameters: [
          { name: "token", in: "header", required: true, type: "string" },
          { name: "file", in: "formData", required: true, type: "file" },
          { name: "moTa", in: "formData", required: true, type: "string" },
          { name: "tenHinh", in: "formData", required: true, type: "string" },
        ],
        responses: {},
        tags: ["Pictures"],
      },
    },
    "/pictures/search-by-name/{name}": {
      get: {
        summary: "Search pictures by name",
        parameters: [{ name: "name", in: "path", type: "string", required: true }],
        responses: {},
        tags: ["Pictures"],
      },
    },
    "/pictures/{id}": {
      get: {
        summary: "Get picture by ID",
        parameters: [{ name: "id", in: "path", type: "integer", required: true }],
        responses: {},
        tags: ["Pictures"],
      },
      delete: {
        summary: "Delete picture by ID",
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", required: true, type: "string" },
        ],
        responses: {},
        tags: ["Pictures"],
      },
    },
    "/comments/{id}": {
      get: {
        summary: "Get comments for a picture",
        parameters: [{ name: "id", in: "path", type: "integer", required: true }],
        responses: {},
        tags: ["Comments"],
      },
      post: {
        summary: "Add a comment to a picture",
        consumes: ["application/json"],
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", required: true, type: "string" },
          {
            name: "body",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                noiDung: { type: "string" },
              },
              required: ["noiDung"],
            },
          },
        ],
        responses: {},
        tags: ["Comments"],
      },
    },
    "/saved/{id}": {
      get: {
        summary: "Determine whether the user has saved a picture or not",
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", required: true, type: "string" },
        ],
        responses: {},
        tags: ["Saving"],
      },
      post: {
        summary: "Save a picture for a user",
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", required: true, type: "string" },
        ],
        responses: {},
        tags: ["Saving"],
      },
    },
    "/users/{id}": {
      get: {
        summary: "Get user by ID",
        parameters: [{ name: "id", in: "path", required: true, type: "integer" }],
        responses: {},
        tags: ["Users"],
      },
      put: {
        summary: "Update user information",
        consumes: ["application/json"],
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", type: "string", required: true },
          {
            name: "body",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                hoTen: { type: "string" },
                tuoi: { type: "number" },
                matKhau: { type: "string" },
              },
              required: ["email", "hoTen", "tuoi", "matKhau"],
            },
          },
        ],
        responses: {},
        tags: ["Users"],
      },
    },
    "/saved-by-user/{userId}": {
      get: {
        summary: "Get pictures saved by user ID",
        parameters: [{ name: "userId", in: "path", required: true, type: "integer" }],
        responses: {},
        tags: ["Saving"],
      },
    },
    "/created-by-user/{userId}": {
      get: {
        summary: "Get pictures created by user ID",
        parameters: [{ name: "userId", in: "path", required: true, type: "integer" }],
        responses: {},
        tags: ["Saving"],
      },
    },
    "/users/avatar/{id}": {
      post: {
        summary: "Upload user avatar",
        consumes: ["multipart/form-data"],
        parameters: [
          { name: "id", in: "path", required: true, type: "integer" },
          { name: "token", in: "header", required: true, type: "string" },
          { name: "file", in: "formData", required: true, type: "file" },
        ],
        responses: {},
        tags: ["Users"],
      },
    },
  },
};
