export default async (request) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}
