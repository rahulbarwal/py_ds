import json
from json_msg.base import base_json_msg


class LifeEvent(base_json_msg.BaseJSON):
    def __init__(self, user, date, event_detail, tags, public):
        self.user = user
        self.date = date
        self.event_detail = event_detail
        self.tags = tags
        self.public = public
