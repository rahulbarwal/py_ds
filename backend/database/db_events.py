from google.appengine.ext import ndb

from base.db_base import DataStore

DEFAULT_USER = 'shaktiman'


class Events(DataStore):
    user = ndb.StringProperty(default=DEFAULT_USER)
    date = ndb.DateTimeProperty(auto_now=True)
    event_detail = ndb.StringProperty(indexed=False)
    tags = ndb.StringProperty(repeated=True)
    public = ndb.BooleanProperty(default=False)

    @classmethod
    def query_get_events(cls):
        return cls.query().filter(cls.user == DEFAULT_USER)
