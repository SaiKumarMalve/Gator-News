package UnitTests

import (
	"testing"
	"time"

	"github.com/SaiKumarMalve/Gator-News/models"
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

//AnswerLogin model Unit test case
func TestAnswerLogin(t *testing.T) {
	loginSucess := models.AnswerLogin{"SUCCESS"}
	assert.Equal(t, loginSucess.Token, "SUCCESS", "Object not initialzed with the code: %s.", loginSucess.Token)

	loginFailure := models.AnswerLogin{}
	assert.Equal(t, loginFailure.Token, "", "Object not initialzed")
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
	claimJSON := models.Claim{"", primitive.NewObjectID(), *claims}
	if claimJSON.VerifyIssuedAt(1000, true) {
		t.Errorf("Verification of IssuedAt failed. IssuedAt: %d.", claimJSON.IssuedAt)
	}

	if claimJSON.ID.IsZero() {
		t.Errorf("Object ID should be a non-zero")
	}

}

//Post model Unit test case
func TestPost(t *testing.T) {
	postMessage := models.Post{"Message has been posted!"}
	assert.Equal(t, postMessage.Message, "Message has been posted!", "Post Structure has not been initialzed with the message")
}

//RecordPost model Unit test case
func TestRecordPost(t *testing.T) {
	RecordPost := models.RecordPost{"FAFAFAFAFAFA", "User Message", time.Now()}
	if RecordPost.Date.IsZero() {
		t.Errorf("Date not set to current date: %v.", RecordPost.Date)
	}

	assert.Equal(t, RecordPost.UserID, "FAFAFAFAFAFA", "userID is invalid or empty")
}

//User model Unit test case
func TestUser(t *testing.T) {
	User := models.User{primitive.NewObjectID(), "Test", "User", time.Now(), "testuser@se.com", "123456", "", "", "", "", ""}
	if User.ID.Hex() == "" {
		t.Errorf("ID is must for a user Structure %s", User)
	}

	assert.Equal(t, User.Email, "testuser@se.com", "User email is must for any user %s", User)
}
