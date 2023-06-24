class Cousin:
    def __init__(self, name, preferences = None, parent):
        self.name = name
        if preferences is not None:
            self.preferences = set(preferences) # who they prefer
        else:
            self.preferences = None
        self.preferedBy = set() # who prefers them
        self.match = None
        self.parent = parent
    
