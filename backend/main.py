from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from src.models import ContentGenerator

from utils.request_objects import SocialMediaPostRequest, EmailRequest
from fastapi.responses import JSONResponse


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# use to test frontend up and running
@app.get("/")
async def test():
    """Use to test application

    Returns:
        dict: hello world message
    """
    return {"message": "hello world"}


@app.post("/api/email")
async def create_email_outreach(
    request_data: EmailRequest,
):
    """
    Creates an email from the perspective of a marketing, sales, or customer service role

    Args:
        request_data (EmailRequest): Request object with detials for GPT template

    Returns:
        JSONResponse: response payload for frontend
    """
    response = ContentGenerator().generate_email_outreach(request_data)
    return JSONResponse(
        content=response,
        headers={"Access-Control-Allow-Origin": "*"},
    )


@app.post("/api/socialMedia")
async def create_social_media_post(request_data: SocialMediaPostRequest):
    """
    Creates a social media post from perspective of a marketing, sales, or customer service role,

    Args:
        request_data (SocialMediaPostRequest): Request object with details for GPT template

    Returns:
        JSONResponse: response payload for frontend
    """
    response = ContentGenerator().generate_social_media_post(request_data)
    return JSONResponse(
        content=response,
        headers={"Access-Control-Allow-Origin": "*"},
    )


@app.get("/api/marketingStrategy")
async def generate_marketing_strategy():
    pass


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
