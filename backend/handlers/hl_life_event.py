
from database import db_events
from json_msg.response_json_msg import rp_Events


def get_users_life_events(*args):
    events = db_events.Events.query_get_events().fetch_async(limit=10)
    response = [rp_Events.LifeEvent(event.user, event.date, event.event_detail, event.tags, event.public)
                for event in events.get_result()]
    return response


def post_users_life_events(add_event_obj):
    new_event = db_events.Events()
    new_event.populate(
        event_detail=add_event_obj.event_detail,
        tags=add_event_obj.tags,
        public=add_event_obj.public)
    new_event.save_entity()
    return True
