<h1>OpenAI API Demo</h1>
<h2> Tools Used </h2>
<ul>
    <li>FastAPI</li>
    <li>React.js</li>
    <li>Amazon ECS</li>
    <li>Docker</li>
    <li>Langchain</li>
    <li>OpenAI API</li>
</ul>
<h2>Getting Started</h2>
<p>To start, clone the repository and install the software necessary to run the project. You will need
<ul>
    <li>Python 3.11</li>
    <li>Node.js 14</li>
    <li>Docker</li> 
</ul>
Next, you will need to install the dependencies to run locally, you can do this by first creating a virtual environment and then running <code>pip install -r "requirements.txt"</code>. Next, do the same in the frontend directory by entering <code> npm install </code> while in the directory. Locally run the backend server by running <code> main.py </code> and run the frontend server by entering <code> npm start </code> in the frontend directory. URL values in the source code may need to be changed depending on where things are being run. As of writing this, the URLs on the frontend are hard-coded to point towards the deployment, so to have things run smoothly locally change the URL values in <code>SocialMedia.js</code> and <code>Email.js</code> to <code>127.0.0.1/</code>. The backend API will be running on port 8080 and the frontend UI will be running on port 3000. The backend will respond with a hello wold message if the root endpoint is accessed.
</p> 
<h2>
Run everything with docker-compose
</h2>
<p> Included at the top level is a docker compose file, this can be run to activate both the frontend and backend containers at once, to do this, navigate to the top level of the application and run <code> docker compose up </code> and both the frontend and backend application containers will be built.

<h2>Deployment</h2>
<p>There is currently an active deployment on ECS for both the frontend and backend of this application, the application can be deployed (from my account) with the <code>docker compose up</code> command while in the Docker ECS context. AWS Cloudwatch monitors the application for logs and error messages. The order of operations for deployment are as follows:</p>
<ol>
    <li> Build the docker images locally </li>
    <li> Push the docker images to DockerHub or any image repository of your choosing</li>
    <li> Switch to the ECS context (with your IAM account setup) with <code> docker context use *yourECScontextnamehere*</code> then run <code> docker compose up </code> while in the same directory as the <code>docker-compose.yml</code> file. This will build and deploy the application to ECS.
</ol>

<p> Finally, the frontend endpoint deployment can be accessed at inolv-LoadB-FGA7K0OPYOZB-2053e03bfd630ded.elb.us-east-1.amazonaws.com:3000 and the backend endpoint can be accessed at inolv-LoadB-FGA7K0OPYOZB-2053e03bfd630ded.elb.us-east-1.amazonaws.com:8080.</p>


