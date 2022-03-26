package bd

import (
	"context"
	"fmt"
	"time"

	"github.com/SaiKumarMalve/Gator-News/models"
	"go.mongodb.org/mongo-driver/bson"
)

/*ConsultRelation checks the relationship between 2 users*/
func ConsultRelation(t models.Relationship) (bool, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database("gatorNews")
	col := db.Collection("relationship")

	condition := bson.M{
		"userID":         t.UserID,
		"userRelationID": t.UserRelationshipID,
	}

	var result models.Relationship
	fmt.Println(result)
	err := col.FindOne(ctx, condition).Decode(&result)
	if err != nil {
		fmt.Println(err.Error())
		return false, err
	}
	return true, nil
}
