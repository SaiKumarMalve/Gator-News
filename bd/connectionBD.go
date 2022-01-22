package bd

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var MongoCN = conectarBD()
var clientOptions = options.Client().ApplyURI("mongodb+srv://gatorUsers:Gators2023@gator-news.djwv2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

func conectarBD() *mongo.Client {
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err.Error())
		return client
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err.Error())
		return client

	}
	log.Println("connection exists in BD")
	return client
}

func CheckConnection() int {
	err := MongoCN.Ping(context.TODO(), nil)
	if err != nil {
		return 0

	}
	return 1
}
