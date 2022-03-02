package models

import (
	"testing"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

//AnswerLogin model Unit test case
func TestAnswerLogin(t *testing.T) {
	loginSucess := AnswerLogin{"SUCCESS"}
	if loginSucess.Token != "SUCCESS" {
		t.Errorf("Object not initialzed with the code: %s.", loginSucess.Token)
	}

	loginFailure := AnswerLogin{}
	if loginFailure.Token != "" {
		t.Errorf("Object not initialzed")
	}
}

//Claim model Unit test case
func TestClaim(t *testing.T) {
	claims := &jwt.StandardClaims{
		Audience:  "SE",
		ExpiresAt: 15000,
		Id:        "AFBECD",
		IssuedAt:  1500,
		Issuer:    "Tester",
		NotBefore: 2000,
		Subject:   "Testing",
	}
	claimJSON := Claim{"", primitive.NewObjectID(), *claims}
	if claimJSON.VerifyIssuedAt(1000, true) {
		t.Errorf("Verification of IssuedAt failed. IssuedAt: %d.", claimJSON.IssuedAt)
	}

	if claimJSON.ID.IsZero() {
		t.Errorf("Object ID should be a non-zero")
	}

}

//Post model Unit test case
func TestPost(t *testing.T) {
	postMessage := Post{"Message has been posted!"}
	if postMessage.Message == "" {
		t.Errorf("Post Structure has not been initialzed with the message")
	}
}

//RecordPost model Unit test case
func TestRecordPost(t *testing.T) {
	RecordPost := RecordPost{"FAFAFAFAFAFA", "User Message", time.Now()}
	if RecordPost.Date.IsZero() {
		t.Errorf("Date not set to current date: %v.", RecordPost.Date)
	}

	if RecordPost.UserID == "" {
		t.Errorf("userID is invalid or empty")
	}
}

//User model Unit test case
func TestUser(t *testing.T) {
	User := User{primitive.NewObjectID(), "Test", "User", time.Now(), "testuser@se.com", "123456", "", "", "", "", ""}
	if User.ID.Hex() == "" {
		t.Errorf("ID is must for a user Structure %s", User)
	}

	if User.Email == "" {
		t.Errorf("User email is must for any user %s", User)
	}
}
