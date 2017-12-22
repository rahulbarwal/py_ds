import webapp2


class BaseEndpoint(webapp2.RequestHandler):
	def get(self):
		self.response.headers['Content-Type'] = 'text/plain'
		self.process_get()

	def post(self):
		pass

	def process_get(self):
		return 'get method not supported'
