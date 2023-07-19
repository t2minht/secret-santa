import json, os, csv

def json_to_csv():
    readfile = "python/cousin-secret-santa-default-rtdb-export.json"
    writefile = "python/test.csv"
    with open(readfile, "r") as reader:
        data = json.load(reader)
    cousinDict = data["cousin"]
    with open(writefile, "w", newline = '') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for key in cousinDict.keys():
            cousinInfo = cousinDict[key]
            preferences = cousinInfo["preferences"].replace(",", "|")
            writer.writerow([key, cousinInfo["parent"], preferences])
            
    return

print("Start")

json_to_csv()


print("End")