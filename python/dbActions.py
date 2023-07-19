import firebase_admin, csv
from firebase_admin import db


def intialize():
    # generate JSON from Fire base -> Project Settings -> Service Accounts: Press generate private key
    # Put JSON in src directory
    # name it: "cousin-secret-santa-database.json"
    cred_object = firebase_admin.credentials.Certificate(
        "python/cousin-secret-santa-database.json"
    )
    databaseURL = "https://cousin-secret-santa-default-rtdb.firebaseio.com/"
    default_app = firebase_admin.initialize_app(
        cred_object, {"databaseURL": databaseURL}
    )


def writeRecipient(name, recipient):
    intialize()
    ref = db.reference("/cousin")
    ref.child(name).update({"recipient": recipient})

def readDB():
    intialize()
    ref = db.reference("/cousin")
    cousinDict = ref.get()

    print(cousinDict)
    writefile = "python/test.csv"
    with open(writefile, "w", newline = '') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        # print(cousinDict.keys())
        for key in cousinDict.keys():
            cousinInfo = cousinDict[key]
            preferences = cousinInfo["preferences"].replace(",", "|")
            writer.writerow([key, cousinInfo["parent"], preferences])
    phonefile = "python/numbers.csv"
    with open(phonefile, "w", newline = '') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for key in cousinDict.keys():
            writer.writerow([key, cousinInfo["phone"]])

    

