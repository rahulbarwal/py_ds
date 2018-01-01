from handlers import hl_life_event


def get_life_event(request):
    return hl_life_event.get_users_life_events(request)


def post_life_event(add_event_obj):
    return hl_life_event.post_users_life_events(add_event_obj)
