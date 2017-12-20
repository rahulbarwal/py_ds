from google.appengine.ext import ndb

from base.db_base import DataStore


class Events(DataStore):
	author = ndb.StringProperty()
	date = ndb.DateTimeProperty(auto_now_add=True)
	event_detail = ndb.StringProperty(indexed=False)
	tags = ndb.StringProperty(repeated=True)
	public = ndb.BooleanProperty(default=False)
