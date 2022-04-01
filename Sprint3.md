# Sprint III

Frontend Demo: https://youtu.be/5fnr_Sdbr-U

Backend Demo: https://youtu.be/WQyZxikPB5g

# Project Accomplishments:
# Backend:
1. Built removePosts API which takes id as parameter to delete all the user's posts.
2. highRelationship API was created to register a relationship between the users. In order to achieve this, We have a created "Relationship.go" model which records the relationship of one user with another.
3. In order to delete the relationship between the users, we have created lowRelationship API. Using this, we delete the relationship in the database.
4. userList API is used for retrieving the list of users in the database.This basically depends on 3 parameters - (type,page,search). If type is follow, it generates the list of users that the logged in user follows. If the type is new, it generates a list of all the new users. We can also search for a particular user by specifying search parameter.
 
# Frontend:
