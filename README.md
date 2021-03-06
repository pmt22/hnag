# HNAG - Hôm Nay Ăn Gì (What Shall We Eat)

HNAG is a web app for internal use and a place for us to experience designing an enterprise like web, try out different
technologies, languages and techniques.

## Description

HNAG comes from our need for a tool for managing our ordering, debt between us (could be more in the future). The
services/modules are built independently with developer's own choice.

## Modules

There are currently 5 modules:

1. Order module: taking, processing, managing orders from users. This service should be able to handle many request
   concurrently.
2. Debt module
3. Exhibition module
4. User module: authentication, the only gateway for frontend making contact with the services.
5. Central module: the bridge that connect all services, dispatching request to the right service.

## Architecture

### Simple flow

```mermaid
flowchart BT
    subgraph Flowchart
      subgraph GUI
         HNAG 
      end
      
      User-service <===> GUI
      
      subgraph Services
         Central-service <--> User-service
       
         Order-service <--> Central-service
       
         Debt-service <--> Central-service
       
         Exhibition-service <--> Central-service
       
         Other-services <-.-> Central-service
      end
      
      Persistence <======> Services
      
      subgraph Persistence
         database[(MongoDB)]
      end
    end
```

## Technical Stack

- MongoDB
- RabbitMQ

### Order module

- Programing language: Go
- Web Framework: Gin

### Debt module

### Exhibition module

### User module

- Spring Boot
- Spring DevTools
- Spring Webflux
- Spring Security
- GraphQL Java

### Central module

- Vert.x
- 
