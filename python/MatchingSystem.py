from Cousin import Cousin
import random, csv, os

def initalize():
    # Get all cousins from database and create cousin objects
    # Return dictionary...set...maybe list? of cousin objects
    cousinsList = []
    filename = 'python/exampleBank.csv'

    with open(filename, "r") as file:
        reader = csv.reader(file)
        fields = next(reader)
        for row in reader:
            preferencesSet = set(row[2].split("|"))
            print(row[0])
            print(preferencesSet)
            if row[1] == "Huong":
                preferencesSet.discard("Phuong")
                preferencesSet.discard("Khoi")
                preferencesSet.discard("Tyna")
                preferencesSet.discard("Thao")
                preferencesSet.discard("Khoa")
            elif row[1] == "Tho":
                preferencesSet.discard("Anh-Viet")
                preferencesSet.discard("Ai-Vy")
                preferencesSet.discard("Chris")
                preferencesSet.discard("Ai-Van")
                preferencesSet.discard("Anh-Vu")
            elif row[1] == "Thuy":
                preferencesSet.discard("Thi")
                preferencesSet.discard("Tuong")
                preferencesSet.discard("Thien-An")
                preferencesSet.discard("Thai-Hien")
                preferencesSet.discard("Thuan")
            elif row[1] == "Nguyet":
                preferencesSet.discard("David")
                preferencesSet.discard("Madison")
                preferencesSet.discard("Aidan")
                preferencesSet.discard("Brayson")
            elif row[1] == "Ut":
                preferencesSet.discard("Mai-Linh")
                preferencesSet.discard("Thai-Binh")
                preferencesSet.discard("Anh-Mai")
            print(preferencesSet)
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

    print("Wants:")
    print(wants)
    print("Wanted:")
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
        print(cousin + " up for auction")
        print(wanted.get(cousin))
        print("Winner: " + winner)
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
        # print(wants)
        # print(wanted)
    # print("")
    print(pickedDict)
    
    return pickedDict

def normalPicking(cousinList, currentPicks):

    leftSide = []
    rightSide = []
    for cousin in cousinList:
        name = cousin.name
        if not (name in currentPicks.keys()):
            leftSide.append([name, cousin.parent])
        if not (name in currentPicks.values()):
            rightSide.append([name, cousin.parent])

    
    failurePrev = True
    while failurePrev:

        li1 = leftSide.copy()
        random.shuffle(li1)
        li2 = rightSide.copy()
        random.shuffle(li2)

        # print(li1)
        # print(li2)
        
        finalList = []
        failure = False

        while len(li1) > 0 and len(li2) > 0:
            left = li1[0]
            right = li2[0]
            matched = 0
            start = ''
            looping = False
            while matched == 0:
                if looping == True and start == right:
                    break
                if left[1] != right[1]:
                    finalList.append([left[0], left[1], '-', right[0], right[1]])
                    currentPicks[left[0]] = right[0]
                    li1.pop(0)
                    li2.pop(0)
                    matched = 1
                    start = ''
                    looping = False
                    # print(len(li1))
                else:
                    if looping == False:
                        start = li2[0]
                        looping = True
                    li2.append(li2.pop(0))
                    left = li1[0]
                    right = li2[0]
            if looping == True and start == right:
                # print('Failure')
                failure = True
                break
            else:
                looping == True
                start = ''
            if len(li1) == 0:
                failurePrev = False
    if failure == False:
        for key in currentPicks.keys():
            print(key + " : " + currentPicks[key])
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
pickedDict = pickPreferences(wants, wanted)
finalPicks = normalPicking(cL, pickedDict)
