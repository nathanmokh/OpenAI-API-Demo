import os
from langchain import OpenAI
from utils.request_objects import EmailRequest, SocialMediaPostRequest


class ContentGenerator:
    llm = OpenAI(
        openai_api_key="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",
        temperature=0.7,
    )

    def generate_email_outreach(self, request_data: EmailRequest):
        sender_name = request_data.sender_name

        sender_company_name = request_data.sender_company_name
        sender_email = request_data.sender_email
        sender_phone_number = request_data.sender_phone_number
        sender_occupation = request_data.sender_occupation
        prospect_company = request_data.prospect_company
        prospect_name = request_data.prospect_name
        prospect_industry = request_data.prospect_industry
        prospect_occupation = request_data.prospect_occupation
        is_cold_email = request_data.is_cold_email
        product = request_data.product
        product_description = request_data.product_description

        if is_cold_email:
            cold_clause = "has not"
        else:
            cold_clause = "has"

        if product_description:
            product_description_clause = (
                f"This is a description of the problem: {product_description}"
            )
        else:
            product_description_clause = ""

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
        {product_description_clause}
        """

        result = self.llm.predict(template)
        return result

    def generate_social_media_post(self, request_data: SocialMediaPostRequest):
        social_media_platform = request_data.social_media_platform
        brand = request_data.brand
        product_or_service = request_data.product_or_service
        product_or_service_name = request_data.product_or_service_name
        product_service_description = request_data.product_service_description
        department = request_data.department
        age_demographic_min = request_data.age_demographic_min
        age_demographic_max = request_data.age_demographic_min
        use_emojis = request_data.use_emojis

        # specify if a product or service is being promoted
        if product_or_service.lower() == "product":
            subject_being_promoted = "product"
        else:
            subject_being_promoted = "service"

        if age_demographic_min and age_demographic_max:
            age_demographic_clause = f"""This post will be meant to target people 
            between the ages of {age_demographic_min} and {age_demographic_max}. 
            Gear the post to them without explicitly mentioning the demographic."""
        else:
            age_demographic_clause = (
                "This post will be meant to target people from any age demographic."
            )

        if social_media_platform.lower() == "instagram":
            image_creation_clause = "Include a suggestion for an image with the post."
        else:
            image_creation_clause = ""

        if use_emojis:
            use_emojis_clause = "Use emojis in the post."
        else:
            use_emojis_clause = "Do not include emojis in the post."
        template = f"""
        Create a social media post on the platform {social_media_platform} on from the point of view
        of the {department} team promoting the {brand} brand.
        The post should promote the {subject_being_promoted} called {product_or_service_name}.
        This is a description of the {subject_being_promoted}: {product_service_description}. 
        Make it funny, relatable, and persuasive. 
        Make sure to mention the name of the brand being promoted in the post.
        {age_demographic_clause}
        {use_emojis_clause}
        {image_creation_clause}
        """

        result = self.llm.predict(template)
        return result
