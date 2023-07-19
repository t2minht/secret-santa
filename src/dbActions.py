import firebase_admin
from firebase_admin import db


def intialize():
    # generate JSON from Fire base -> Project Settings -> Service Accounts: Press generate private key
    # Put JSON in src directory
    # name it: "cousin-secret-santa-database.json"
    cred_object = firebase_admin.credentials.Certificate(
        "src/cousin-secret-santa-database.json"
    )
    databaseURL = "https://cousin-secret-santa-default-rtdb.firebaseio.com/"
    default_app = firebase_admin.initialize_app(
        cred_object, {"databaseURL": databaseURL}
    )


def writeRecipient(name, recipient):
    intialize()
    ref = db.reference("/cousin")
    ref.child(name).update({"recipient": recipient})
