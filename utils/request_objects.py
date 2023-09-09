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


class EmailRequest(BaseModel):
    sender_name: str
    sender_company_name: str
    sender_email: str
    sender_phone_number: str
    sender_occupation: str
    prospect_company: str
    prospect_name: str
    prospect_industry: str
    prospect_occupation: str
    is_cold_email: bool
    product: str
    product_description: str = ""
