This folder contains applications built with nodejs.

1. blogger: A blog application with posts, comments and and comments moderation features.
Each service has been containerized.
 To create an image run the following command:
  "docker build -t <name of the container> ." e.g "docker build -t posts:0.0.1 ."
 To start the container, run the following command:
  "docker run <name of the image >"

 To start a kubernetes cluster, run the following command from the required infra/k8s:
  "k apply -f <name of deployment configuration file>" e.g. "k apply -f posts-depl.yaml"

  to get all services use: "kubectl get services"

  to get all deployments use: "kubectl get deployments"

  to describe a deployment by name, use: "kubectl describe deployment <deployment name>"
  
  to delete a deployment by name, use: "kubectl delete deployment <deployment name>"

  to get pods created by a deployment, use: "kubectl get pods"

  to check the status of a pod i.e. which pod it is listening on, use: "kubectl logs <pod name from the get pods command>"

- How to Update Images used by a deployment
 1. Make sure that the deployment is using a latest tag
 2. Update the code
 3. Build the image using the command: "docker build -t <image name>"
 4. Push the image to docker hub using the command: "docker push <image name>"
 5. Run the command: "kubectl rollout restart deployment <deployment name>"


