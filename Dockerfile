# Use an official Python runtime as a parent image
FROM python:3.11.1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Copy the .env file into the container at /app (assumes it's in the same directory as Dockerfile)
COPY .env /app/

# Read environment variables from .env file and set them as build-args
ARG API_KEY
ARG DB_PASSWORD

# Set environment variables inside the image
ENV OPENAI_API_KEY=$OPENAI_API_KEY

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app/

# Expose the port that your application will run on
EXPOSE 8080

# Define the command to run your application
CMD ["python", "main.py"]
