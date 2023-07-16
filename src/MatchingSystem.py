from Cousin import Cousin
import random, csv, os

def initalize():
    # Get all cousins from database and create cousin objects
    # Return dictionary...set...maybe list? of cousin objects
    cousinsList = []
    filename = 'src/exampleBank.csv'

    with open(filename, "r") as file:
        reader = csv.reader(file)
        fields = next(reader)
        for row in reader:
            preferencesSet = set(row[2].split("|"))
            cousin = Cousin(row[0], row[1], preferencesSet)
            cousinsList.append(cousin)
    return cousinsList

# def setupPreferences(cousins):
#     # Set preferedBy for each cousin
#     # Returns set of cousins with nonEmpty preferendBy
#     toRemove =set()
#     for cousin in cousins:
#         if cousin.preferences is not None:
#             for pref in cousin.preferences:
#                 cousins[pref].preferedBy.add(cousin)
#                 toRemove.add(pref)
#     return toRemove 

def wants(cousins):
    # give dictionary 
    # key: person
    # value: list of possible giftees
    wants = dict()
    for cousin in cousins:
        if (cousin.preferences == {""}):
            continue
        wants[cousin.name] = cousin.preferences
    # print(wants)
    return wants

def wanted(wants):
    # give dictionary 
    # key: person
    # value: list of possible gifters
    wanted = dict()
    for key in wants:
        values = wants.get(key)
        for value in values:
            # print(key + " - " + value)
            if value in wanted:
                # print("entry already in")
                wanted[value].append(key)
                # wanted[value] = wanted.get(value).append(key)
            else:
                # print("adding new entry")
                wanted[value] = [key]
            # print(wanted)
            # print("---")
    # print(wanted)  
    return wanted


def pickPreferences(wants, wanted):
    # Pick matches for cousins in preferenceSet
    l = list(wanted.items())
    random.shuffle(l)
    wanted = dict(l)
    pickedDict = dict()

    print(wants)
    print(wanted)

    for cousin in wanted:
        votersWeights= []
        count = 0
        possibleWinners = wanted.get(cousin)
        # print(cousin)
        # print(possibleWinners)
        for i in range(len(possibleWinners)):
            weight = (1 / len(wants.get(possibleWinners[i])))
            # print(possibleWinners[i] + " - " + str(weight))
            count += weight
            votersWeights.append(count)
        # print(votersWeights)
        winningNumber = random.random() * count
        winner = ""
        for i in range(len(votersWeights)):
            if(winningNumber < votersWeights[i]):
                winner = possibleWinners[i]
                break
        if winner != "":
            pickedDict[winner] = cousin
        print("-------")
        print(cousin)
        print(wanted.get(cousin))
        print(winner)
        print("-------")

        for key in wanted:
            if winner in wanted[key]:
                wanted[key].remove(winner)
            if len(wanted[key]) < 0:
                wanted.pop(key)
        for key in wants:
            if cousin in wants[key]:
                wants[key].remove(cousin)
            if len(wants[key]) < 0:
                wants.pop(key)
        print(wants)
        print(wanted)
    print("")
    print(pickedDict)
        

    return

def Pick():
    cousins = initalize()
    wants = wants(cousins)
    wanted = wanted(wants)
    choicePicked = pickPreferences(wants, wanted)

print("Start")
cL = initalize()
wants = wants(cL)
wanted = wanted(wants)
pickPreferences(wants, wanted)
