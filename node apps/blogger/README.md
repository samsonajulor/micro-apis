## architecture
- The client/react-app communicates with the posts and comments service to create posts and comments
- The post service has two routes to create and list all posts
- The comment service has two routes to create and list all comments
- The events service listens for events on the comments and post service which are referred to as listeners and in this case post request. It then publishes them again to listeners.
- The events service sends post and comment created events to the query service in a data structure.
- The query service has two endpoints. 1. posts/events will be called by the events service to create the list of posts 2. get/posts will be called by the client to retrieve the list of posts created
- The client/react app communicates with the query service to retrieve posts and comments.
- the moderation service retrieves created comments from the events service and checks if it contains the unapproved results. It returns the a commentCreated events.
- The event service sends the comment moderation event to the comment service which then updates the global state of the comment in the post.
- A comment moderated event is sent from the comment service to the events service.
- Finally, the updated comment is sent to the query service post/event route  from the event service.

### to create an alias
`code ~/.bashrc` or  `code ~/.zshrc`
## kubernetes terms
1. cluster: a collection of nodes + a master to manage them

2. node: A virtual machine that will run our containers

3. pod: a running container capable of running multiple containers.

4. deployment: monitors a set of pods, and makes sure that they are running and restarts them if they crash.

5. service: provides an easy to remember url to access a running container.

6. objects: a collection of deployments, pods and services created via a YAML config file. 

PS: The YAML config file acts a documentation to tell other engineers what is going on in each service.

**DO NOT CREATE OBJECTS DIRECTLY FROM THE TERMINAL. USE THE YAML CONFIG FILE ALWAYS**

**Instructions**

_To create an image run the following command:_
docker build -t <name of the container>` e.g `docker build -t posts:0.0.1 .`

_To start the container, run the following command:_
  `docker run <name of the image >`

_To create and start container, but also override the default command:_
  `docker run -it <name of the image tag or image id> <command to be executed>`

_print out information about all the running containers:_
  `docker ps`

_To execute the given command in a running container:_
  `docker exec -it < container id > < command to be executed e.g. sh >`

_To print out logs from the given container:_
  `docker logs < container id >`

_To start a kubernetes cluster, run the following command from the required infra/k8s:_
`kubectl apply -f <name of deployment configuration file>` e.g. `kubectl apply -f posts-depl.yaml`

_To get all services use:_ `kubectl get services`

_To execute the given command in a running pod:_
  `kubectl exec -it < pod name > < command to be executed e.g. sh >`

_To get all deployments use:_ `kubectl get deployments`

_To describe a deployment by name, use:_ `kubectl describe deployment <deployment name>`

_To describe a pod by name, use:_ `kubectl describe pod <pod name>`

_To delete a deployment by name, use:_ `kubectl delete deployment <deployment name>` or `kubectl delete -f ./`

_To get pods created by a deployment, use:_ `kubectl get pods`

_To check the status of a pod i.e. which pod it is listening on, use:_ `kubectl logs <pod name from the get pods command>`

**How to Create a deployment**

 1. Build the image using the command: `docker build -t <image name> .`

 2. Push the image to docker hub using the command: `docker push <image name>`

 3. Create the deployment configuration file and apply it using the command: `k apply -f <name of deployment configuration file>`.
 
 4. Create the cluster ip service.

**How to Update Images used by a deployment**

 1. Make sure that the deployment is using a latest tag

 2. Update the code

 3. Build the image using the command: `docker build -t <image name> .`

 4. Push the image to docker hub using the command: `docker push <image name>`

 5. Run the command: `kubectl rollout restart deployment <deployment name>`

**how to solve ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors**

If your pods are showing ErrImagePull, ErrImageNeverPull, or ImagePullBackOff errors after running kubectl apply, the simplest solution is to provide an imagePullPolicy to the pod.

1. First, run `run kubectl delete -f <directory>` e.g. `kubectl delete -f ./`

2. Then, update your pod manifest:

   spec:
     containers:
       - name: posts
         image: cygnet/posts:0.0.1
         imagePullPolicy: Never

3. Then, `run kubectl apply -f <directory>` e.g. `run kubectl apply -f ./`

This will ensure that Kubernetes will use the image built locally from your image cache instead of attempting to pull from a registry.

### handling missing events when the query service goes down
1. sync with the post and comments services to get all posts and comments on initializing the service
2. or get all comments and posts directly from the respective databases.
3. or the event bus stores events internally in a database and sends them to the query service anytime it comes back online.

### types of services
1. cluster ip: this sets up an easy-to-remember url to access a pod. It onlu exposes pods to other pods in the cluster

2. Node port: This makes the pod accessible from outside the cluster. It is used during development

3. Load Balancer: It makes the pod accessible from outside the cluster. It is used in production.

4. External Name: It redirects an in-cluster request to a CNAME url.



