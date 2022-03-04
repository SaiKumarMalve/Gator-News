# Sprint II

Frontend Demo: https://youtu.be/Gzo_MphEFjE

Backend Demo: https://youtu.be/aLl1goWGH6w


# Project Accomplishments:
# Backend:
1. Wrote unit test cases for the following packages:
    - bd
    - jwt
    - models
    - routers
    - middlew
2. Built readPosts API which takes id and page as parameters to return all the posts on the user's feed. 
3. To generate a build after every merge or commit to main branch an action was created with the code in go-build.yml
4. The unit test cases written for the backend in Golang are located under Gator-News/UnitTests and to run the test cases after every commit to the main branch an action was created with the code in go-test.yml
# Documentation of API Services:
<details>
  <summary>Registration API</summary>
  
  - request :  **POST** <br />
  
  - [https://gatornews.herokuapp.com/registration/ ](https://gatornews.herokuapp.com/registration/)
  
  - **BODY** raw
  ``` json
  {
    "name": "Test",
    "lastname": "User",
    "email": "testuser@se.com",
    "password": "123456"
   }
   ```
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ```  

 
</details>

<details>
  <summary>Login API</summary>
  
  - request :  **POST** <br />
  
  - [https://gatornews.herokuapp.com/login/ ](https://gatornews.herokuapp.com/login/)
  
  - **BODY** raw
  ``` json
    { 
          "email": "testuser@se.com", 
          "password": "123456" 
     } 

   ```
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ```  
  ``` json
    {
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwMzM4YzlmMTg1MzQxY2U4YTdkOTMiLCJiaW9ncmFwaHkiOiIiLCJiaXJ0aGRhdGUiOiIyMDIyLTAzLTA0VDAxOjA3OjI1LjEyM1oiLCJlbWFpbCI6InRlc3R1c2VyQHNlLmNvbSIsImV4cCI6MTY0NjQ0Mjc0NiwibGFzdG5hbWUiOiJVc2VyIiwibG9jYXRpb24iOiIiLCJuYW1lIjoiVGVzdCIsIndlYnNpdGUiOiIifQ.7tD_XrxyEOLUkZXN-T4Az0yYTuzCW4bomwxouzRXsQM"
    }
   ```
 
</details>

<details>
 
  <summary>viewProfile API</summary>
  
  - request :  **GET** <br />
  
  - [https://gatornews.herokuapp.com/viewProfile?id=6220338c9f185341ce8a7d93 ](https://gatornews.herokuapp.com/viewProfile?id=6220338c9f185341ce8a7d93)
  
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ```  
  ``` json
  
    {"id":"6220338c9f185341ce8a7d93","name":"Test","lastname":"User","BirthDate":"2022-03-04T01:07:25.123Z","email":"testuser@se.com"}
   
   ```
 

 
</details>

<details>
  <summary>modifyProfile API</summary>
  
  - request :  **PUT** <br />
  
  - [https://gatornews.herokuapp.com/modifyProfile ](https://gatornews.herokuapp.com/modifyProfile)
  
  - **BODY** raw
  ``` json
       { 
            "name":"Test" , 
            "lastname": "User", 
            "birthDate": "1995-02-23T00:00:00Z", 
            "location": "Gainesville",
            "biography": "I am MS CS student", 
            "website": "https://github.com/SaiKumarMalve/Gator-News"
        }  

   ```
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ``` 
 
</details>

<details>
  <summary>Post API</summary>
  
  - request :  **POST** <br />
  
  - [https://gatornews.herokuapp.com/post ](https://gatornews.herokuapp.com/post)
  
  - **BODY** raw
  ``` json
       { 
            "message":"This is the Demo for testing purpose"
       }  

   ```
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ``` 
 
</details>

<details>
  <summary>readPosts API</summary>
  
  - request :  **GET** <br />
  
  - [https://gatornews.herokuapp.com/readPosts?id=6220338c9f185341ce8a7d93&page=1 ](https://gatornews.herokuapp.com/readPosts?id=6220338c9f185341ce8a7d93&page=1)
  - **OUTPUT** 
  ``` json
    "Status : 201 Created"
  ``` 
   ``` json
    [ {
        "_id": "622167e0a389bd529161b5db",
        "userID": "6220338c9f185341ce8a7d93",
        "message": "Test User Message",
        "date": "2022-03-04T01:14:08.847Z"
    },
    {
        "_id": "622167cceaa1be5c027fd250",
        "userID": "6220338c9f185341ce8a7d93",
        "message": "This is the Demo for testing purpose",
        "date": "2022-03-04T01:13:48.978Z"
    } ]
  ``` 
 
</details>

