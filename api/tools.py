import hashlib


def define_product_path(instance, filename):
    code = hashlib.md5()
    extension = filename.split('.')
    hash_code = code.hexdigest()
    return f'{hash_code}.{extension[-1]}'
