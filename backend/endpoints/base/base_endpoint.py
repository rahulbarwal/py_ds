import webapp2
import json
import logging

from json_msg.base.base_json_msg import CustomEncoder


class BaseEndpoint(webapp2.RequestHandler):

    def options(self):
        self.response.headers['Access-Control-Max-Age'] = '3600'
        self.response.headers['Access-Control-Allow-Origin'] = self.request.headers['Origin']
        self.response.headers['Access-Control-Allow-Headers'] = 'client_type, Authorization, Content-Type, city'
        self.response.headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE'

    def get(self):
        if self.request.headers.get('Origin', None):
            self.response.headers['Access-Control-Allow-Origin'] = self.request.headers['Origin']
        response = self.process_get(self.request)
        self.response.headers['Content-Type'] = 'text/json'
        logging.info(response)
        response = json.dumps(response, cls=CustomEncoder)
        self.response.write(response)

    def post(self):
        if self.request.headers.get('Origin', None):
            self.response.headers['Access-Control-Allow-Origin'] = self.request.headers['Origin']
        response = self.process_post()
        self.response.headers['Content-Type'] = 'text/json'
        response = json.dumps(response, cls=CustomEncoder)
        self.response.write(response)

    def process_get(self, request):
        print 'get is not defined for this endpoint'
        return 1

    def process_post(self):
        print 'post is not defined for this endpoint'
        return 1
