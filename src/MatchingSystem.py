from Cousin import Cousin
import random

def initalize():
    # Get all cousins from database and create cousin objects
    # Return dictionary...set...maybe list? of cousin objects
    pass

def setupPreferences(cousins):
    # Set preferedBy for each cousin
    # Returns set of cousins with nonEmpty preferendBy
    toRemove =set()
    for cousin in cousins:
        if cousin.preferences is not None:
            for pref in cousin.preferences:
                cousins[pref].preferedBy.add(cousin)
                toRemove.add(pref)
    return toRemove 

def pickPreferences(preferenceSet):
    # Pick matches for cousins in preferenceSet
    for cousin in preferenceSet:
        random.choice(cousin.preferences).match = cousin
        # TODO: need to remove cousin from preferences of other cousins
    return

def Pick():
    

cousins = initalize()
preferenceSet = setupPreferences(cousins)
generalSet = set(cousins.keys()).difference(preferenceSet)


