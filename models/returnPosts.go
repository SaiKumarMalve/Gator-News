package models


import (
	"time"
	"go.mongodb.org/mongo-driver/bson/primitive"

)
/* returnPost  is the structure with which we will return the posts */

type ReturnPost struct{
	ID primitive.ObjectID `bson:"_id" json:"_id,omitempty"`
	UserID string `bson:"userid" json:"userID,omitempty"`
	Message string `bson:"message" json:"message,omitempty"`
	Date time.Time `bson:"date" json:"date,omitempty"`
}