import json
from datetime import datetime


class CustomEncoder(json.JSONEncoder):
    def default(self, o):
        if hasattr(o, 'to_json'):
            return o.to_json()
        return super(CustomEncoder, self).default(o)


def getter_setter_gen(name, type_):
    def getter(self):
        return getattr(self, "__" + name)

    def setter(self, value):
        if not isinstance(value, type_):
            raise TypeError("%s attribute must be set to an instance of %s" % (name, type_))
        setattr(self, "__" + name, value)

    return property(getter, setter)


def auto_attr_check(cls):
    new_dct = {}
    for key, value in cls.__dict__.items():
        if isinstance(value, type):
            value = getter_setter_gen(key, value)
        new_dct[key] = value
    # Creates a new class, using the modified dictionary as the class dict:
    return type(cls)(cls.__name__, cls.__bases__, new_dct)


class BaseJSON:

    def getter_setter_gen(self, name, type_, default):
        def getter(self):
            return getattr(self, name)

        def setter(self, value):
            if not isinstance(value, type_):
                raise TypeError("%s attribute must be set to an instance of %s" % (name, type_))
            setattr(self, name, value)
        setattr(self, name, default)
        return property(getter, setter)

    def to_json(self):
        json_obj = {}
        for attr in dir(self):
            if any([callable(getattr(self, attr)), attr.startswith('_')]):
                continue
            elif isinstance(getattr(self, attr), BaseJSON):
                json_obj[attr] = getattr(self, attr).to_json()
            elif isinstance(getattr(self, attr), datetime):
                json_obj[attr] = str(getattr(self, attr))
            else:
                json_obj[attr] = getattr(self, attr)
        return json_obj
