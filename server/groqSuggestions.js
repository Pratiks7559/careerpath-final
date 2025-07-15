import axios from 'axios';

const GROQ_API_KEY = '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'; // Replace if regenerated

export const getAISuggestions = async (partial) => {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama3-70b-8192', // ✅ Updated model
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that suggests 5 career-related questions based on partial input.',
          },
          {
            role: 'user',
            content: `Suggest 5 career-related questions starting with: "${partial}"`,
          },
        ],
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const suggestions = response.data.choices[0].message.content
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^\d+\.\s*/, '').trim());

    return suggestions;
  } catch (error) {
    console.error('Groq Suggestion Error:', error.response?.data || error.message);
    return [];
  }
};
