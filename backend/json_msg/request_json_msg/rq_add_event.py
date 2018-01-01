class AddEvent:
    def __init__(self, event_detail, public=True, tags=None):
        self.event_detail = event_detail
        self.public = public
        self.tags = tags if tags else []
