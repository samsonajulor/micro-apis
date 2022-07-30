This folder contains applications built with nodejs.

1. blogger: A blog application with posts, comments and and comments moderation features.
Each service has been containerized.
 To create an image run the following command:
  "docker build -t <name of the container> ." e.g "docker build -t posts:0.0.1 ."
 To start the container, run the following command:
  "docker run <name of the image >"

 To start a kubernetes cluster, run the following command from the required infra/k8s:
  "k apply -f <name of deployment configuration file>" e.g. "k apply -f posts-depl.yaml"

  to get all deployments use: "kubectl get deployments"

  to describe a deployment by name, use: "kubectl describe deployment <deployment name>"
  
  to delete a deployment by name, use: "kubectl delete deployment <deployment name>"

  to get pods created by a deployment, use: "kubectl get pods"
