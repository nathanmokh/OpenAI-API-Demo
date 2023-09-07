from fastapi import FastAPI
from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
import os

load_dotenv()


app = FastAPI()
llm = OpenAI(openai_api_key=os.environ.get("OPENAI_API_KEY"))
chat_model = ChatOpenAI()

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


@app.get("/")
async def test():
    return {"message": "hello world"}


@app.get("/api/email")
async def generate_email_outreach(
    sender_name,
    sender_company_name,
    sender_email,
    sender_phone_number,
    sender_occupation,
    prospect_company,
    prospect_name,
    prospect_industry,
    prospect_occupation,
    is_cold_email,
    product,
):
    if is_cold_email:
        cold_clause = "has not"
    else:
        cold_clause = "has"
    template = f"""
    You are a helpful assistant that creates outreach emails for 
    {sender_name} working at {sender_company_name} with the role of {sender_occupation} targeting
    someone named {prospect_name} working in the {prospect_industry} industry at the company {prospect_company}. 
    The person's occupation is {prospect_occupation}, 
    and {cold_clause} been contacted by the company before.
    The objective of this email is to secure a meeting with the 
    targeted prospect to discuss their potential purchase of {product}.
    The email should be attention grabbing, persuasive, and should also emphasize how
    the product will ultimately benefit the prospective buyer in accomplishing their goals. It should sound like
    it was written by a human with years of experience in their profession.
    Include the sender's contact information in the signature. The email address is {sender_email}
    and the phone number is {sender_phone_number}.
    """

    result = llm.predict(template)
    return result
