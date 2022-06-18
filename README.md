# Docker Basics
Docker is a software platform that allows you to build, test, and deploy applications quickly! 

This readme contains introduction to docker, along with some commonly used commands. 
## What is Docker?
Before understanding docker, we need to understand the concepts of virtualization and containerization.
#### Virtualization:
 -  Virtualization refers to the act of creating a virtual version of something
-   In Computing, virtualization is “abstraction” of computer resources.
-   Virtualization gives illusion that an OS is running on real hardware
-   We can achieve the concept of virtualization using Hypervisors (VmWare, VirtualBox)

##### <center>  Virtualization Architecture <center>
![enter image description here](https://raw.githubusercontent.com/sohaibsalman/docker-basics/main/public/images/virtualization.png)
#### Containerization:

> Containerization is a form of **virtualization** where applications run in
> **isolated** user spaces, called **containers**, while **using the same shared
> operating system (OS)**.
-   Another level of virtualization
-   Host kernel is shared
-   A Container contains only the required file system instead of the full OS.
-   A Container contains everything to run an application.

#### Virtualization vs. Containerization:
![enter image description here](https://raw.githubusercontent.com/sohaibsalman/docker-basics/main/public/images/containers-vs-virtual-machines.jpg)
#### Finally! What is Docker?
-   A Container runs through some container engine. Docker is such a runtime!
- Docker is a **set of platform as a service products** that use OS-level virtualization to deliver software in **packages** called **containers**.

##### <center>  Docker Architecture / Components <center>

![enter image description here](https://raw.githubusercontent.com/sohaibsalman/docker-basics/8aabff9dace14ac604d6462b6f847f5063d1b9a1/public/images/architecture.svg)

## Why Docker?
The importance of docker can be understood by looking at the following meme:

![enter image description here](https://raw.githubusercontent.com/sohaibsalman/docker-basics/main/public/images/docker-meme.png)

-   Don’t need to worry about all the dependencies used to run a software
-   Same experience on any environment (Dev, Staging, Production)
-   Environment Isolation
-   As a developer we can develop isolated apps that does not affect our host OS
- Ship Anytime, Anywhere
##  How does docker work under the hood?
-   Written in Go Programming language
-   Takes advantage of several features of the Linux kernel to deliver its functionality
-   Docker uses a technology called namespaces to provide the isolated workspace called the container.
	-   Namespaces:
		-   Isolating the resources per process. Specify the area of hard-drive for a process.
	-   Control Groups:
		-   Limit the amount of resources used per process.

## Container vs Image
#### Image:
-   Single file with all the dependencies and configuration required to run a program
-   Read-only template with instructions for creating a Docker container
#### Container:
-   Instance of an image.
-   Runs a program.
-   By default, a container is relatively well isolated from other containers.

![enter image description here](https://raw.githubusercontent.com/sohaibsalman/docker-basics/main/public/images/image-vs-container.png)
