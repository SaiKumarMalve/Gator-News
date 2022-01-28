package bd

import (
	"context"
	"time"

	"github.com/SaiKumarMalve/Gator-News/models"
	"go.mongodb.org/mongo-driver/bson"
)

func CheckUserAlreadyExists(email string) (models.User, bool, string) {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	db := MongoCN.Database(("Gator-News"))
	col := db.Collection("Users")
	condition := bson.M{"email": email}
	var result models.User
	err := col.FindOne(ctx, condition).Decode(&result)
	ID := result.ID.Hex()
	if err != nil {
		return result, false, ID

	}
	return result, true, ID
}
