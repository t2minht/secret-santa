class Cousin:
    def __init__(self, name, parent, preferences = None):
        self.name = name
        if preferences is not None:
            self.preferences = set(preferences) # who they prefer
        else:
            self.preferences = None
        self.preferedBy = set() # who prefers them
        self.match = None
        self.parent = parent
    
