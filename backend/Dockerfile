FROM python:3.11.1

WORKDIR /app/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expose the port that your application will run on
EXPOSE 8080

# Define the command to run your application
CMD ["python",  "main.py"]