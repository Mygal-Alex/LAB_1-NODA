const handler = async (event, context) => {
  const i = 2 * 2;
  console.log(i);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: i }),
  };
};

module.exports = { handler };
