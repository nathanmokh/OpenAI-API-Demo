from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI

import os



llm = OpenAI(openai_api_key=os.environ.get('OPENAI_API_KEY'))
chat_model = ChatOpenAI() 

c = 3