import firebase_admin
from firebase_admin import db

def intialize():
	cred_object = firebase_admin.credentials.Certificate(
		'./cousin-secret-santa-firebase-adminsdk-pqryk-5a15348d35.json')
	databaseURL = 'https://cousin-secret-santa-default-rtdb.firebaseio.com/'
	default_app = firebase_admin.initialize_app(cred_object, {
		'databaseURL': databaseURL
	})
def writeRecipient(name):
	intialize()
	ref = db.reference("/cousin")
	ref.child(name).update({'recipient': 'poop'})


