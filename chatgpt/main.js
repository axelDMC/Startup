const { Configuration, OpenAIApi } = require("openai");

async function run() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "What is a dog?",
      max_tokens: 1024
    });
    console.log(completion.data.choices[0].text);
  } catch (error) {
    console.log(error);
  }
}

run();