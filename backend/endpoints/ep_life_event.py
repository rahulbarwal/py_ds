import logging
from json_msg.request_json_msg import rq_add_event
from base.base_endpoint import BaseEndpoint
from delegates import del_life_event


class EPLifeEvent(BaseEndpoint):
    def process_get(self, request):
        return del_life_event.get_life_event(request)

    def process_post(self):
        post_data = self.request
        add_event_obj = rq_add_event.AddEvent(post_data.get('event_detail', ''),
                                              post_data.get('public', True),
                                              post_data.get('tags', None))
        logging.info('rahul barwal')
        logging.info(add_event_obj.event_detail)
        return True #del_life_event.post_life_event(add_event_obj)
