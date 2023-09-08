from pydantic import BaseModel


class SocialMediaPostRequest(BaseModel):
    social_media_platform: str
    brand: str
    product_or_service: str
    product_or_service_name: str
    product_service_description: str
    department: str
    age_demographic_min: str = ""
    age_demographic_max: str = ""
    use_emojis: bool = False
