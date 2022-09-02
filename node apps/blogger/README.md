**Instructions**

_To create an image run the following command:_
  "**docker build -t <name of the container> .**" e.g "docker build -t posts:0.0.1 ."

_To start the container, run the following command:_
  "docker run <name of the image >"

_To start a kubernetes cluster, run the following command from the required infra/k8s:_
"k apply -f <name of deployment configuration file>" e.g. "k apply -f posts-depl.yaml"

_To get all services use:_ "kubectl get services"

_To get all deployments use:_ "kubectl get deployments"

_To describe a deployment by name, use:_ "kubectl describe deployment <deployment name>"

_To delete a deployment by name, use:_ "kubectl delete deployment <deployment name>"

_To get pods created by a deployment, use:_ "kubectl get pods"

_To check the status of a pod i.e. which pod it is listening on, use:_ "kubectl logs <pod name from the get pods command>"

**How to Create a deployment**

 1. Build the image using the command: "docker build -t <image name>"

 2. Push the image to docker hub using the command: "docker push <image name>"

 3. Create the deployment configuration file and apply it using the command: "k apply -f <name of deployment configuration file>".
 
 4. Create the cluster ip service.

**How to Update Images used by a deployment**

 1. Make sure that the deployment is using a latest tag

 2. Update the code

 3. Build the image using the command: "docker build -t <image name> ."

 4. Push the image to docker hub using the command: "docker push <image name>"

 5. Run the command: "kubectl rollout restart deployment <deployment name>"

**ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors**

If your pods are showing ErrImagePull, ErrImageNeverPull, or ImagePullBackOff errors after running kubectl apply, the simplest solution is to provide an imagePullPolicy to the pod.

1. First, run "run kubectl delete -f <directory>" e.g. "kubectl delete -f ./"

2. Then, update your pod manifest:

   spec:
     containers:
       - name: posts
         image: cygnet/posts:0.0.1
         imagePullPolicy: Never

3. Then, "run kubectl apply -f <directory>" e.g. "run kubectl apply -f ./"

This will ensure that Kubernetes will use the image built locally from your image cache instead of attempting to pull from a registry.


