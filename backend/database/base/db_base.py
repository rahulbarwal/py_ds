from google.appengine.ext import ndb


class DataStore(ndb.Model):

    def save_entity(self):
        return self.put()
