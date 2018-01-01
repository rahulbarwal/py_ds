import json
import datetime

from database.base import db_base


class CustomEncoder(json.JSONEncoder):
    def default(self, o):
        for property in vars(o).iteritems():
            if any([callable(property), property.startswith('__'), property.startswith('_')]):
                pass
            if isinstance(property, (str, int, bool, float)):
                return super(CustomEncoder, self).default(o)
            elif isinstance(property, datetime):
                return str(property)
            elif isinstance(property, db_base):
                return self.default(property)
